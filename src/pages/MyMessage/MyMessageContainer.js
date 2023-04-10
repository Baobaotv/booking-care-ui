import { useEffect, useState } from 'react';
import MyMessage from './MyMessage';
import interactiveService from '~/service/InteractiveService';
import messageservice from '~/service/MessageService';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
// import { stompClient } from '~/components/GlobalEvent';
let stompClient = null;

function connectSockJs(userInfo, messages, setMessages) {
    let receiveMessages = (message) => {
        messages[1].push(JSON.parse(message.body));
        let newMessage = [messages[0], messages[1]];
        setMessages(newMessage);
        let elem = document.getElementById('message-list');
        elem.scrollTop = elem.scrollHeight;
        return message;
    };

    const connect = (userInfo) => {
        if (!!userInfo) {
            var socket = new SockJS('http://172.16.17.194:8080/ws');
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

function MyMessageContainer() {
    const [interactives, setInteractives] = useState();
    const [messages, setMessages] = useState([]);
    const [selectedId, setSelectedId] = useState();
    const userInfo = JSON.parse(localStorage.getItem('token'));

    const getInteractiveOfCurrentUser = async (token) => {
        const result = await interactiveService.getInteractiveOfCurrentUser(token).then((response) => response);
        setInteractives(result);
    };

    useEffect(() => {
        connectSockJs(userInfo, messages, setMessages);
        getInteractiveOfCurrentUser(userInfo.token);
    }, [messages]);

    const onSelectUser = async (userId) => {
        const result = await messageservice.getListMessageByUserId(userId, userInfo.token).then((response) => response);
        setMessages(result);
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
        messages[1].push(chatMessage);
        let newMessage = [messages[0], messages[1]];
        setMessages(newMessage);
        let elem = document.getElementById('message-list');
        elem.scrollTop = elem.scrollHeight;
    };

    return (
        <>
            <MyMessage
                selectedId={selectedId}
                interactives={interactives}
                messages={messages}
                userInfo={userInfo}
                onSelectUser={onSelectUser}
                sendMessage={sendMessage}
            ></MyMessage>
        </>
    );
}

export default MyMessageContainer;
