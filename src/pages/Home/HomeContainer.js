import Home from './Home';
import handbookService from '~/service/HandbookService';
import userService from '~/service/UserService';
import hospitalService from '~/service/HospitalService';
import specialtyService from '~/service/SpecialtyService';
import messageService from '~/service/MessageService';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import { useEffect, useState } from 'react';
import config from '~/config';
let stompClient = null;

function HomeContainer() {
    const [listOfRecentHandbook, setListOfRecentHandbook] = useState([]);
    const [listDoctorOnline, setListDoctorOnline] = useState([]);
    const [listHospitalFeatured, setListHospitalFeatured] = useState([]);
    const [listSpecialtyFeatured, setListSpecialtyFeatured] = useState([]);
    const [listDoctorFeatured, setListDoctorFeatured] = useState([]);
    const [listHandbookFeatured, setListHandbookFeatured] = useState([]);

    const [messages, setMessages] = useState([]);
    const [isShowMessage, setIsShowMessage] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        const getListOfRecentHandbook = async () => {
            const result = await handbookService.getListOfRecentHandbook().then((response) => response);
            setListOfRecentHandbook(result);
        };
        const getListDoctorOnline = async () => {
            const result = await userService.getListDoctorOnline().then((response) => response);
            setListDoctorOnline(result);
        };
        const getFeaturedHospital = async () => {
            const result = await hospitalService.getFeaturedHospital().then((response) => response);
            setListHospitalFeatured(result);
        };
        const getFeaturedSpecialty = async () => {
            const result = await specialtyService.getFeaturedSpecialty().then((response) => response);
            setListSpecialtyFeatured(result);
        };
        const getFeaturedDoctor = async () => {
            const result = await userService.getFeaturedDoctor().then((response) => response);
            setListDoctorFeatured(result);
        };
        const getFeaturedHandbook = async () => {
            const result = await handbookService.getFeaturedHandbook().then((response) => response);
            setListHandbookFeatured(result);
        };
        getListOfRecentHandbook();
        getListDoctorOnline();
        getFeaturedHospital();
        getFeaturedSpecialty();
        getFeaturedDoctor();
        getFeaturedHandbook();
    }, []);

    useEffect(() => {
        if (!isShowMessage) return;

        const onSelectUser = async (userId) => {
            const result = await messageService
                .getListMessageByUserId(userId, userInfo.token)
                .then((response) => response);
            setMessages(result);
        };
        onSelectUser(0);
    }, [isShowMessage]);

    function connectSockJs(userInfo, messages, setMessages) {
        let receiveMessages = (message) => {
            if (!!messages && !!message[1]) {
                messages[1].push(JSON.parse(message.body));
                let newMessage = [messages[0], messages[1]];
                setMessages(newMessage);
            }
            setIsShowMessage(true);
            let elem = document.getElementById('message-list');
            elem.scrollTop = elem.scrollHeight;
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

    useEffect(() => {
        connectSockJs(userInfo, messages, setMessages);
    }, [userInfo]);

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
        <Home
            recentHandbooks={listOfRecentHandbook}
            doctorOnline={listDoctorOnline}
            featuredHospitals={listHospitalFeatured}
            featuredSpecialty={listSpecialtyFeatured}
            featuredDoctors={listDoctorFeatured}
            featuredHandbooks={listHandbookFeatured}
            isShowMessage={isShowMessage}
            onShowMessage={setIsShowMessage}
            messages={messages}
            sendMessage={sendMessage}
        ></Home>
    );
}

export default HomeContainer;
