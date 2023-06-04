import React, { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import config from '~/config';

let stompClient = null;
function GlobalSocket({ children }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        let userInfo = JSON.parse(localStorage.getItem('token'));
        if (!!userInfo) {
            connectSockJs(userInfo);
        }
    }, [JSON.parse(localStorage.getItem('token'))]);

    function connectSockJs(userInfo) {
        let receiveMessages = (message) => {
            if (messages && messages[1]) {
                let newArr = [...messages[1]];
                newArr.push(JSON.parse(message.body));
                let newMessage = [messages[0], newArr];
                setMessages(...newMessage);
            } else {
                // setIsShowMessage(true);
            }

            let elem = document.getElementById('message-list');
            elem.scrollTop = elem.scrollHeight;
        };

        const connect = (userInfo) => {
            if (!!userInfo) {
                let socket = new SockJS(config.hostBe + '/ws');
                if (!!stompClient) {
                    stompClient = null;
                }
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

    return <React.Fragment>{children}</React.Fragment>;
}
export default GlobalSocket;
export { stompClient };
