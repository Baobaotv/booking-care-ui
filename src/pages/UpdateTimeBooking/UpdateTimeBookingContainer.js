import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import userService from '~/service/UserService';
import workTimeService from '~/service/WorkTimeService';
import bookingService from '~/service/BookingService';
import UpdateTimeBooking from './UpdateTimeBooking';
function UpdateTimeBookingContainer() {
    const [searchParams] = useSearchParams();
    const [doctor, setDoctor] = useState();
    const [workTimes, setWorkTimes] = useState();
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
    }, [searchParams]);

    const updateTimeBooking = async (body) => {
        const userInfo = JSON.parse(localStorage.getItem('token'));
        const result = await bookingService.updateTimeBooking(body, userInfo.token);
        if (result) {
            alert('Cập nhật thành công');
            window.location.replace('/lich-kham-cua-toi');
        } else {
            alert('Đã có lỗi xảy ra, vui lòng thử lại');
            window.location.replace('/');
        }
    };

    return (
        <UpdateTimeBooking
            doctor={doctor}
            workTimes={workTimes}
            updateTimeBooking={updateTimeBooking}
        ></UpdateTimeBooking>
    );
}

export default UpdateTimeBookingContainer;
