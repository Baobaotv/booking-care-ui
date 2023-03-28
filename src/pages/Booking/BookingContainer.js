import { useEffect, useRef, useState } from 'react';
import Booking from './Booking';
import userService from '~/service/UserService';
import workTimeService from '~/service/WorkTimeService';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function BookingContainer() {
    const [searchParams] = useSearchParams();
    const [user, setUser] = useState();
    const [workTime, setWorkTime] = useState();
    const nameScheduler = useRef();
    const phoneScheduer = useRef();
    const namePatient = useRef();
    const sex = useRef();
    const phonePatient = useRef();
    const location = useRef();
    const reason = useRef();
    const idDoctor = useRef();
    const idWorktime = useRef();
    const date = useRef();
    const yearOfBirth = useRef();
    const type = useRef();
    const [typeCheckHealth, setTypeCheckHealth] = useState();
    const form = useRef({
        nameScheduler,
        phoneScheduer,
        namePatient,
        sex,
        phonePatient,
        location,
        reason,
        idDoctor,
        idWorktime,
        date,
        yearOfBirth,
        type,
    });
    const onSubmit = () => {
        console.log(form.current.reason.current.value);
    };

    useEffect(() => {
        const getDoctorById = async (id) => {
            const result = await userService.getDoctorById(id).then((response) => response);
            setUser(result);
        };
        getDoctorById(searchParams.get('doctor-id'));

        const getWorkTimeById = async (id) => {
            const result = await workTimeService.getOneById(id).then((response) => response);
            setWorkTime(result);
        };
        getWorkTimeById(searchParams.get('work-time-id'));
    }, []);

    return (
        <Booking
            user={user}
            workTime={workTime}
            date={searchParams.get('date')}
            form={form}
            typeCheckHealth={typeCheckHealth}
            onChangeCheckHealth={setTypeCheckHealth}
            onSubmit={onSubmit}
        ></Booking>
    );
}

export default BookingContainer;
