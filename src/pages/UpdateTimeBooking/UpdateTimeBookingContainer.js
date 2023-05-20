import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import userService from '~/service/UserService';
import medicalService from '~/service/MedicalService';
import workTimeService from '~/service/WorkTimeService';
import bookingService from '~/service/BookingService';
import UpdateTimeBooking from './UpdateTimeBooking';
import config from '~/config/config';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
let stompClient = null;

function connectSockJs() {
    const connect = () => {
        let socket = new SockJS(config.hostBe + '/ws');
        stompClient = over(socket);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {};

    function onError() {
        console.log('Connect socket to receive comment is fail');
    }
    connect();
}

function UpdateTimeBookingContainer() {
    const [searchParams] = useSearchParams();
    const [doctor, setDoctor] = useState();
    const [workTimes, setWorkTimes] = useState();
    const [medica, setMedical] = useState();
    useEffect(() => {
        const getDoctorById = async (id) => {
            const userInfo = JSON.parse(localStorage.getItem('token'));
            let result = await userService.getDoctorByMedicalId(id, userInfo.token).then((response) => response);
            if (result.status === 404) {
                alert('Không tìm thấy ca khám phù hợp');
                window.location.replace('/');
            }
            result = await result.json().then((res) => res);
            //.json()
            const allTimes = await workTimeService.getAllTimeOfDoctor(result.id).then((response) => response);
            setWorkTimes(allTimes);
            setDoctor(result);
        };
        getDoctorById(searchParams.get('id'));

        const getMedicalById = async (id) => {
            const userInfo = JSON.parse(localStorage.getItem('token'));
            let result = await medicalService.getOneById(id, userInfo.token).then((response) => response);
            setMedical(result);
        };
        getMedicalById(searchParams.get('id'));
        connectSockJs();
    }, [searchParams]);

    function sendNotification(body, userId) {
        let notificationForm = {
            doctorId: body.idDoctor,
            userId: userId,
            wkTime: body.workTimeTime,
            date: body.date,
        };
        stompClient.send('/app/notification', {}, JSON.stringify(notificationForm));
    }

    const updateTimeBooking = async (body) => {
        let newBody = body;
        delete newBody['workTimeTime'];
        const userInfo = JSON.parse(localStorage.getItem('token'));
        const result = await bookingService.updateTimeBooking(newBody, userInfo.token);
        if (result) {
            if (medica.type === 'on') {
                sendNotification(body, userInfo.id);
            }
            alert('Cập nhật thành công');
            window.location.replace('/lich-kham-cua-toi');
        } else {
            alert('Đã có lỗi xảy ra, vui lòng thử lại');
            window.location.replace('/');
        }
    };

    return (
        <UpdateTimeBooking
            medica={medica}
            doctor={doctor}
            workTimes={workTimes}
            updateTimeBooking={updateTimeBooking}
        ></UpdateTimeBooking>
    );
}

export default UpdateTimeBookingContainer;
