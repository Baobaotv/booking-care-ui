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
import { useAppDispatch, useAppSelector } from '~/store/hook';
import { setMessage } from '~/store/message';
let stompClient = null;
let userInfo;

function HomeContainer() {
    const dispatch = useAppDispatch();
    const { messageData } = useAppSelector((state) => state.mess);
    const [listOfRecentHandbook, setListOfRecentHandbook] = useState([]);
    const [listDoctorOnline, setListDoctorOnline] = useState([]);
    const [listHospitalFeatured, setListHospitalFeatured] = useState([]);
    const [listSpecialtyFeatured, setListSpecialtyFeatured] = useState([]);
    const [listDoctorFeatured, setListDoctorFeatured] = useState([]);
    const [listHandbookFeatured, setListHandbookFeatured] = useState([]);

    const [isShowMessage, setIsShowMessage] = useState(false);

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
        userInfo = JSON.parse(localStorage.getItem('token'));
        if (!!userInfo) {
            connectSockJs(userInfo, messageData, dispatch(setMessage(messageData)));
        }
    }, []);

    useEffect(() => {
        if (!isShowMessage) return;

        const onSelectUser = async (userId) => {
            const result = await messageService
                .getListMessageByUserId(userId, userInfo.token)
                .then((response) => response);

            dispatch(setMessage(result));
        };
        onSelectUser(0);
    }, [isShowMessage]);

    console.log('length', messageData.length);

    function connectSockJs(userInfo) {
        let receiveMessages = (message) => {
            console.log('thinh', messageData);
            if (messageData && messageData[1]) {
                console.log('bao', messageData);
                let newArr = [...messageData[1]];
                newArr.push(JSON.parse(message.body));
                let newMessage = [messageData[0], newArr];
                dispatch(setMessage(newMessage));
            }
            setIsShowMessage(true);
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
        messageData[1].push(chatMessage);
        let newMessage = [messageData[0], messageData[1]];
        dispatch(setMessage(newMessage));
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
            messages={messageData}
            sendMessage={sendMessage}
        ></Home>
    );
}

export default HomeContainer;
