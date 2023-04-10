import { useEffect, useRef, useState } from 'react';
import Booking from './Booking';
import userService from '~/service/UserService';
import bookingService from '~/service//BookingService';
import workTimeService from '~/service/WorkTimeService';
import paymentService from '~/service/PaymentService';
import { useSearchParams } from 'react-router-dom';
import config from '~/config/config';

function BookingContainer() {
    const [searchParams] = useSearchParams();
    const [user, setUser] = useState();
    const [workTime, setWorkTime] = useState();
    const [validateMSG, setValidateMSG] = useState();
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
    const amount = useRef();
    const [typeCheckHealth, setTypeCheckHealth] = useState();
    const [typePay, setTypePay] = useState();
    const [typePersonSchedule, setTypePersonSchedule] = useState('forMe');
    const [typeSex, setTypeSex] = useState('Name');
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
        amount,
    });
    const onSubmit = () => {

        if (!isLogin()) return;

        let isValid = isValidData(form.current);
        if (!isValid) return;
        const body = getBodyBooking(form.current);
        const userInfo = JSON.parse(localStorage.getItem('token'));
        if (typePay === 'ON') {
            handleBookingAndCreatePayment(body, userInfo.token, userInfo.username);
        } else {
            alert('submit');
        }
    };

    const isLogin =() => {
        if (!localStorage.getItem('token')) {
            alert('Vui lòng Đăng nhập để thực hiện chức năng này');
            return false;
        }
        return true;
    }

    const handleBookingAndCreatePayment = async (body, token, username) => {
        const result = await bookingService.booking(body, token).then((response) => response);
        if (result) {
            localStorage.setItem(username + '_booking_id', result);
            createPayment();
        }
        else {
            alert('Đã xảy ra lỗi trong quá trình đặt lịch, xin vui lòng thực hiện lại');
        }
    };

    function getBodyBooking(form) {
        const body = {
            nameScheduler: !!form.nameScheduler.current ? form.nameScheduler.current.value : '',
            phoneScheduer: !!form.phoneScheduer.current ? form.phoneScheduer.current.value : '',
            namePatient: form.namePatient.current.value,
            sex: typeSex,
            phonePatient: form.phonePatient.current.value,
            location: form.location.current.value,
            reason: form.reason.current.value,
            idDoctor: searchParams.get('doctor-id'),
            idWorktime: searchParams.get('work-time-id'),
            date: searchParams.get('date'),
            yearOfBirth: form.yearOfBirth.current.value,
            type: typeCheckHealth,
            amount: form.amount.current.value,
            statusPayment: config.constant.payment_unPaid
        };
        return body;
    }

    function isValidData(form) {
        const msg = {};
        if (typePersonSchedule === 'forPatient') {
            if (!form.nameScheduler.current.value) {
                msg.nameScheduler = 'Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú';
            }
            if (!form.phoneScheduer.current.value) {
                msg.phoneScheduer = 'Vui lòng nhập thông tin';
            }
        }
        if (!form.namePatient.current.value) {
            msg.namePatient = 'Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú';
        }
        if (!form.phonePatient.current.value) {
            msg.phonePatient = 'Vui lòng nhập thông tin';
        }
        if (!form.yearOfBirth.current.value) {
            msg.yearOfBirth = 'Vui lòng nhập thông tin';
        }
        if (!form.location.current.value) {
            msg.location = 'Vui lòng nhập thông tin';
        }
        if (!form.reason.current.value) {
            msg.reason = 'Vui lòng nhập thông tin';
        }

        setValidateMSG(msg);
        if (Object.keys(msg).length <= 0) return true;
        return false;
    }

    const createPayment = async () => {
        const body = {
            amount: form.current.amount.current.value,
            bankCode: '',
        };
        const result = await paymentService.createPayment(body).then((response) => response);
        if (result.code === '00') window.location.replace(result.data);
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
            validateMSG={validateMSG}
            typePersonSchedule={typePersonSchedule}
            onChangePersonSchedule={setTypePersonSchedule}
            typeSex={typeSex}
            onChangeSex={setTypeSex}
            typePay={typePay}
            onChangeTypePay={setTypePay}
        ></Booking>
    );
}

export default BookingContainer;
