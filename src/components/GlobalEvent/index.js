import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './GlobalEvent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDisplay,
    faMicrophone,
    faMicrophoneSlash,
    faPhoneSlash,
    faVideo,
    faVideoSlash,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

let stompClient = null;
function GlobalEvent({ children }) {
    const userInfo = JSON.parse(localStorage.getItem('token'));

    const MAPPING = '/room';
    const peerConnectionConfig = {
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    };

    var ws = useRef();
    var localStream = useRef();
    var connections = useRef({});

    const selfVideo = useRef();
    const remoteVideo = useRef();
    const modal = useRef();
    const btnCancel = useRef();
    const btnAccept = useRef();
    const [showCam, setShowCam] = useState(true);
    const [turnOnMic, setTurnOnMic] = useState(true);
    const [showScreen, setShowScreen] = useState(true);
    let peerId = useRef();
    let meId;

    function init() {
        if (!!userInfo && !!userInfo.token) {
            meId = userInfo.id;
            console.log('connect');
            ws.current = new WebSocket(`wss://${process.env.REACT_APP_HOST_DOMAIN}` + MAPPING);
            ws.current.onmessage = processWsMessage;
            ws.current.onopen = handleWhenOpenWs;
            ws.current.onclose = logMessage;
            ws.current.onerror = logMessage;
        }
    }

    function processWsMessage(message) {
        var signal = JSON.parse(message.data);
        logMessage(signal);
        // you have logged in
        switch (signal.type) {
            case 'init':
                handleInit(signal);
                break;
            case 'logout':
                handleLogout(signal);
                break;
            case 'offer':
                handleOffer(signal);
                break;
            case 'answer':
                handleAnswer(signal);
                break;
            case 'ice':
                handleIce(signal);
                break;
            case 'exit':
                handleExit(signal);
                break;
            case 'callToUser':
                handleCallToUser(signal);
                break;
            case 'cancel-caller':
                handleCancel(signal);
                break;
            default: {
                break;
            }
            //
        }
    }

    function handleInit(signal) {
        peerId.current = signal.sender;
        var connection = getRTCPeerConnectionObject(peerId.current);

        // make an offer, and send the SDP to sender.
        connection
            .createOffer()
            .then(function (sdp) {
                connection.setLocalDescription(sdp);
                console.log('Creating an offer for', peerId.current);
                sendMessage({
                    type: 'offer',
                    receiver: peerId.current,
                    sender: meId,
                    data: sdp,
                });
            })
            .catch(function (e) {
                console.log('Error in offer creation.', e);
            });
    }

    function handleLogout(signal) {
        if (peerId.current === signal.sender) {
            if (!!remoteVideo.current) {
                remoteVideo.current.srcObject = null;
            }
            if (!!selfVideo.current) {
                selfVideo.current.srcObject = null;
            }

            if (!!localStream.current) {
                localStream.current.getTracks().forEach(function (track) {
                    track.stop();
                });
            }
            modal.current.style.display = 'none';
            document.getElementById('modal-notification').style.display = 'block';
            document.getElementById('modal-video').style.display = 'none';
            if (!!connections.current[peerId.current]) {
                connections.current[peerId.current].close();
                delete connections.current[peerId.current];
            }
            window.location.reload();
        }
    }

    function handleOffer(signal) {
        peerId.current = signal.sender;
        var connection = getRTCPeerConnectionObject(peerId.current);
        connection
            .setRemoteDescription(new RTCSessionDescription(signal.data))
            .then(function () {
                console.log('Setting remote description by offer from ' + peerId.current);
                // create an answer for the peedId.
                connection
                    .createAnswer()
                    .then(function (sdp) {
                        // and after callback set it locally and send to peer
                        connection.setLocalDescription(sdp);
                        sendMessage({
                            type: 'answer',
                            receiver: peerId.current,
                            sender: userInfo.id,
                            data: sdp,
                        });
                    })
                    .catch(function (e) {
                        console.log('Error in offer handling.', e);
                    });
            })
            .catch(function (e) {
                console.log('Error in offer handling.', e);
            });
    }

    function handleAnswer(signal) {
        var connection = getRTCPeerConnectionObject(signal.sender);
        connection
            .setRemoteDescription(new RTCSessionDescription(signal.data))
            .then(function () {
                console.log('Setting remote description by answer from' + signal.sender);
            })
            .catch(function (e) {
                console.log('Error in answer acceptance.', e);
            });
    }

    function handleIce(signal) {
        if (signal.data) {
            console.log('Adding ice candidate');
            var connection = getRTCPeerConnectionObject(signal.sender);
            connection.addIceCandidate(new RTCIceCandidate(signal.data));
        }
    }

    function handleExit(signal) {
        if (signal.data) {
            console.log('Handle exit');
            if (!!remoteVideo.current) {
                remoteVideo.current.srcObject = null;
            }
            if (!!selfVideo.current) {
                selfVideo.current.srcObject = null;
            }

            if (!!localStream.current) {
                localStream.current.getTracks().forEach(function (track) {
                    track.stop();
                });
            }
            modal.current.style.display = 'none';
            document.getElementById('modal-notification').style.display = 'block';
            document.getElementById('modal-video').style.display = 'none';
            if (!!connections.current[peerId.current]) {
                connections.current[peerId.current].close();
                delete connections.current[peerId.current];
            }
            window.location.reload();
        }
    }

    function getRTCPeerConnectionObject(uuid) {
        if (connections.current[uuid]) {
            return connections.current[uuid];
        }

        var connection = new RTCPeerConnection(peerConnectionConfig);
        connection.addStream(localStream.current);

        // handle on ice candidate
        connection.onicecandidate = function (event) {
            console.log('candidate is: ' + event.candidate);
            if (event.candidate) {
                sendMessage({
                    type: 'ice',
                    receiver: uuid,
                    sender: meId,
                    data: event.candidate,
                });
            }
        };

        // handle on track / onaddstream
        connection.onaddstream = function (event) {
            console.log('Received new stream from ' + uuid);
            remoteVideo.current.srcObject = event.stream;
        };

        connections.current[uuid] = connection;
        return connection;
    }

    function sendMessage(payload) {
        ws.current.send(JSON.stringify(payload));
    }

    function logMessage(message) {
        console.log(message);
    }

    function handleWhenOpenWs() {
        console.log('conect success');
        sendMessage({
            type: 'save',
            sender: meId,
        });
    }

    function handleCancel(signal) {
        alert('Người nghe đang bận');
    }

    function handleCallToUser(signal) {
        let lstConection = connections.current;
        if (Object.keys(lstConection).length > 0) {
            sendMessage({
                type: 'cancel-caller',
                receiver: signal.sender,
                sender: signal.receiver,
            });
        }

        modal.current.style.display = 'block';
        btnCancel.current.addEventListener('click', function () {
            sendMessage({
                type: 'cancel-caller',
                receiver: signal.sender,
                sender: signal.receiver,
            });

            modal.current.style.display = 'none';
            document.getElementById('modal-notification').style.display = 'block';
            document.getElementById('modal-video').style.display = 'none';
            if (!!connections && !!connections.current[peerId.current]) {
                connections.current[peerId.current].close();
                delete connections.current[peerId.current];
            }
        });

        btnAccept.current.addEventListener('click', function () {
            document.getElementById('modal-notification').style.display = 'none';
            document.getElementById('modal-video').style.display = 'block';

            navigator.mediaDevices
                .getUserMedia({ video: true, audio: true })
                .then(function (stream) {
                    console.log('Stream OK');
                    localStream.current = stream;
                    console.log(localStream.current);
                    selfVideo.current.srcObject = localStream.current;
                })
                .catch(function (error) {
                    console.log('Stream NOT OK: ' + error.name + ': ' + error.message);
                });
            sendMessage({
                type: 'init',
                receiver: signal.sender,
                sender: signal.receiver,
            });
        });
    }

    window.onload = init;

    function eventCallOff() {
        localStream.current.getTracks().forEach(function (track) {
            track.stop();
        });
        sendMessage({
            type: 'exit',
            receiver: peerId.current,
            sender: meId,
            data: peerId.current + 'exit',
        });
        modal.current.style.display = 'none';
        document.getElementById('modal-notification').style.display = 'block';
        document.getElementById('modal-video').style.display = 'none';
        connections.current[peerId.current].close();
        delete connections.current[peerId.current];
    }

    function changStatusCam() {
        const videoTrack = localStream.current.getTracks().find((track) => track.kind === 'video');
        videoTrack.enabled = !showCam;
        setShowCam(!showCam);
    }

    function changeStatusMic() {
        const audioTrack = localStream.current.getTracks().find((track) => track.kind === 'audio');
        audioTrack.enabled = !turnOnMic;
        setTurnOnMic(!turnOnMic);
    }

    const changeVideoScreen = async () => {
        if (!!showScreen) {
            const constraints = { video: { cursor: 'always' }, audio: false };
            const screenCaptureStream = await navigator.mediaDevices.getDisplayMedia(constraints);
            let videoTrack = screenCaptureStream.getVideoTracks()[0];
            localStream.current = screenCaptureStream;
            selfVideo.current.srcObject = localStream.current;
            connections.current[peerId.current].getSenders().forEach(function (rtpSender) {
                if (rtpSender.track.kind === 'video') {
                    rtpSender
                        .replaceTrack(videoTrack)
                        .then(function () {
                            console.log('Replaced video track from camera to screen');
                        })
                        .catch(function (error) {
                            console.log('Could not replace video track: ' + error);
                        });
                }
            });
        } else {
            const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            if (!!localStream.current) {
                localStream.current.getTracks().forEach(function (track) {
                    track.stop();
                });
            }
            localStream.current = cameraStream;
            selfVideo.current.srcObject = localStream.current;
            let videoTrack = cameraStream.getVideoTracks()[0];
            let audioTrack = cameraStream.getAudioTracks()[0];
            connections.current[peerId.current].getSenders().forEach(function (rtpSender) {
                if (rtpSender.track.kind === 'video') {
                    rtpSender
                        .replaceTrack(videoTrack)
                        .then(function () {
                            console.log('Replaced video track from camera to screen');
                        })
                        .catch(function (error) {
                            console.log('Could not replace video track: ' + error);
                        });
                }
                if (rtpSender.track.kind === 'audio') {
                    rtpSender
                        .replaceTrack(audioTrack)
                        .then(function () {
                            console.log('Replaced video track from camera to screen');
                        })
                        .catch(function (error) {
                            console.log('Could not replace video track: ' + error);
                        });
                }
            });
        }

        setShowScreen(!showScreen);
    };

    return (
        <React.Fragment>
            {children}
            <div className={cx('modal')} ref={modal}>
                <div className={cx('modal-notification')} id={'modal-notification'}>
                    <p className={cx('modal-notification-title')}>{'Bạn có một cuộc gọi tới'}</p>
                    <p className={cx('modal-notification-desc')}>{'Cuộc gọi sẽ bắt đầu ngay khi bạn chấp nhận'}</p>
                    <div className={cx('modal-notification-icon')}>
                        <div className={cx('wrapper-icon-cancel')} ref={btnCancel}>
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </div>
                        <div className={cx('wrapper-icon-accept')} ref={btnAccept}>
                            <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <div className={cx('modal-video')} id={'modal-video'}>
                    <video className={cx('modal-remote-video')} autoPlay={true} id="remote" ref={remoteVideo}></video>
                    <div className={cx('wrapper-self-video')}>
                        <video className={cx('modal-self-video')} autoPlay={true} id="self" ref={selfVideo}></video>
                    </div>
                    <div className={cx('modal-action')}>
                        <FontAwesomeIcon
                            className={cx('modal-action-icon')}
                            icon={faPhoneSlash}
                            onClick={eventCallOff}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                            className={!turnOnMic ? cx('modal-action-icon') : cx('modal-action-icon', 'disable')}
                            icon={!turnOnMic ? faMicrophone : faMicrophoneSlash}
                            onClick={changeStatusMic}
                        ></FontAwesomeIcon>

                        <FontAwesomeIcon
                            className={!showCam ? cx('modal-action-icon') : cx('modal-action-icon', 'disable')}
                            icon={!showCam ? faVideo : faVideoSlash}
                            onClick={changStatusCam}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                            className={showScreen ? cx('modal-action-icon') : cx('modal-action-icon', 'disable')}
                            icon={faDisplay}
                            onClick={changeVideoScreen}
                        ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default GlobalEvent;
export { stompClient };
