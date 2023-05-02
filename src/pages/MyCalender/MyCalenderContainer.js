import MyCalender from './MyCalender';
import mediaService from '~/service/MedicalService';
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

    return <MyCalender completes={sheduleCompletes} waitings={sheduleWaiting}></MyCalender>;
}

export default MyCalenderContainer;
