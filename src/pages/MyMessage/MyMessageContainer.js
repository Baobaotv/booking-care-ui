import { useEffect, useRef, useState } from 'react';
import MyMessage from './MyMessage';
import interactiveService from '~/service/InteractiveService';
import messageservice from '~/service/MessageService';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import config from '~/config';
import { useAppDispatch, useAppSelector } from '~/store/hook';
import { setMessage } from '~/store/message';
let stompClient = null;

function MyMessageContainer() {
    const dispatch = useAppDispatch();
    const { messageData } = useAppSelector((state) => state.mess);
    const [interactives, setInteractives] = useState();
    const [statusUpdate, setStatusUpdate] = useState(true);
    const messages = useRef([]);
    // const [messages, setMessages] = useState([]);
    const [selectedId, setSelectedId] = useState();
    const userInfo = JSON.parse(localStorage.getItem('token'));

    const getInteractiveOfCurrentUser = async (token) => {
        const result = await interactiveService.getInteractiveOfCurrentUser(token).then((response) => response);
        setInteractives(result);
    };

    useEffect(() => {
        connectSockJs(userInfo);
    }, []);

    useEffect(() => {
        console.log('test');
        getInteractiveOfCurrentUser(userInfo.token);
    }, [messages.current, statusUpdate]);

    function connectSockJs(userInfo) {
        let receiveMessages = (message) => {
            if (window.location.href !== window.location.origin + config.routes.myMessage) {
                return;
            }
            if (!!JSON.parse(message.body) && JSON.parse(message.body).senderId === selectedId) {
                let oldMessages = [...messages.current[1]];
                oldMessages.push(JSON.parse(message.body));
                let newMessage = [messages.current[0], oldMessages];
                messages.current = [...newMessage];
                dispatch(setMessage(newMessage));
                document.getElementById('message-list').scrollTop =
                    document.getElementById('message-list').scrollHeight;
            } else {
                setStatusUpdate(!statusUpdate);
            }
        };

        const connect = (userInfo) => {
            if (!!userInfo) {
                var socket = new SockJS(config.hostBe + '/ws');
                stompClient = over(socket);
                stompClient.connect({}, onConnected, onError);
            }
        };

        const onConnected = () => {
            stompClient.subscribe('/topic/' + userInfo.id, receiveMessages);
        };

        function onError() {
            console.log('Conect socket is fail');
        }
        connect(userInfo);
    }

    const onSelectUser = async (userId) => {
        const result = await messageservice.getListMessageByUserId(userId, userInfo.token).then((response) => response);
        messages.current = result;
        setSelectedId(userId);
    };

    const sendMessage = (content, receverId) => {
        var chatMessage = {
            senderId: userInfo.id,
            receiverId: receverId,
            content: content,
        };
        if (receverId === 0) {
            stompClient.send('/app/server', {}, JSON.stringify(chatMessage));
        } else {
            stompClient.send('/app/sendToUSer', {}, JSON.stringify(chatMessage));
        }
        let oldMessage = [...messages.current[1]];
        oldMessage.push(chatMessage);
        let newMessage = [messages.current[0], oldMessage];
        messages.current = [...newMessage];
        dispatch(setMessage(newMessage));
        document.getElementById('message-list').scrollTop = document.getElementById('message-list').scrollHeight;
    };

    return (
        <>
            <MyMessage
                selectedId={selectedId}
                interactives={interactives}
                messages={messages.current}
                userInfo={userInfo}
                onSelectUser={onSelectUser}
                sendMessage={sendMessage}
            ></MyMessage>
        </>
    );
}

export default MyMessageContainer;
