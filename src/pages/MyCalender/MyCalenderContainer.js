import MyCalender from './MyCalender';
import mediaService from '~/service/MedicalService';
import bookingService from '~/service/BookingService';
import paymentService from '~/service/PaymentService';
import { useEffect, useState } from 'react';

function MyCalenderContainer() {
    const [sheduleCompletes, setSheduleCompletes] = useState();
    const [sheduleWaiting, setSheduleWaiting] = useState();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('token'));
        const getAllSheduleIsCompleteByCurrentLogin = async (token) => {
            const result = await mediaService.getAllSheduleIsCompleteByCurrentLogin(token).then((response) => response);
            console.log('complete');
            console.log(result);
            setSheduleCompletes(result);
        };

        const getAllSheduleIsWaitingByCurrentLogin = async (token) => {
            const result = await mediaService.getAllSheduleIsWaitingByCurrentLogin(token).then((response) => response);
            setSheduleWaiting(result);
        };

        getAllSheduleIsCompleteByCurrentLogin(userInfo.token);
        getAllSheduleIsWaitingByCurrentLogin(userInfo.token);
    }, []);

    const cancelBooking = async (id) => {
        const userInfo = JSON.parse(localStorage.getItem('token'));
        let result = await bookingService.cancelBooking(id, userInfo.token);
        if (result) {
            alert('Đã huỷ lịch thành công');
            window.location.reload();
        } else {
            alert('Có lỗi xảy ra vui lòng thử lại');
            window.location.replace('/');
        }
    };

    const createPayment = async (id, price) => {
        const userInfo = JSON.parse(localStorage.getItem('token'));

        localStorage.setItem(userInfo.username + '_booking_id', id);
        const body = {
            amount: price,
            bankCode: '',
        };
        const result = await paymentService.createPayment(body).then((response) => response);
        if (result.code === '00') window.location.replace(result.data);
    };

    return (
        <MyCalender
            completes={sheduleCompletes}
            waitings={sheduleWaiting}
            cancelBooking={cancelBooking}
            createPayment={createPayment}
        ></MyCalender>
    );
}

export default MyCalenderContainer;
