import { useEffect, useRef, useState } from 'react';
import UpdateBooking from './UpdateBooking';
import bookingService from '~/service//BookingService';
import mediaService from '~/service/MedicalService';
import paymentService from '~/service/PaymentService';
import { useSearchParams } from 'react-router-dom';
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
function UpdateBookingContainer() {
    const [searchParams] = useSearchParams();
    const [user, setUser] = useState();
    const [workTime, setWorkTime] = useState();
    const [validateMSG, setValidateMSG] = useState();
    const [date, setDate] = useState();
    const [isPayment, setIsPayment] = useState();
    const nameScheduler = useRef();
    const phoneScheduer = useRef();
    const namePatient = useRef();
    const sex = useRef();
    const phonePatient = useRef();
    const location = useRef();
    const reason = useRef();
    const idDoctor = useRef();
    const idWorktime = useRef();
    const yearOfBirth = useRef();
    const type = useRef();
    const amount = useRef();
    const [typeCheckHealth, setTypeCheckHealth] = useState();
    const [typePay, setTypePay] = useState('OFF');
    const [typePersonSchedule, setTypePersonSchedule] = useState('forMe');
    const [typeSex, setTypeSex] = useState('Nam');
    const [typeCheckHealthOld, setTypeCheckHealthOld] = useState();
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
        yearOfBirth,
        type,
        amount,
    });

    function sendNotification(body, userId) {
        let notificationForm = {
            doctorId: user.id,
            userId: userId,
            wkTime: workTime.time,
            date: date,
        };
        stompClient.send('/app/notification', {}, JSON.stringify(notificationForm));
    }

    const onSubmit = () => {
        if (!isLogin()) return;

        let isValid = isValidData(form.current);
        if (!isValid) return;
        const body = getBodyBooking(form.current);
        const userInfo = JSON.parse(localStorage.getItem('token'));
        if (typePay === 'ON' && isPayment !== 1) {
            handleUpdateBookingAndCreatePayment(body, userInfo.token, userInfo.username, userInfo.id);
        } else {
            handleUpdateBooking(body, userInfo.token, userInfo.id);
        }
    };

    const isLogin = () => {
        if (!localStorage.getItem('token')) {
            alert('Vui lòng Đăng nhập để thực hiện chức năng này');
            return false;
        }
        return true;
    };

    const handleUpdateBookingAndCreatePayment = async (body, token, username, userId) => {
        const result = await bookingService.updateBooking(body, token).then((response) => response);
        if (result) {
            localStorage.setItem(username + '_booking_id', body.id);
            if (typeCheckHealthOld === 'off' && typeCheckHealth === 'ON') {
                sendNotification(body, userId);
            }
            createPayment();
        } else {
            alert('Đã xảy ra lỗi trong quá trình đặt lịch, xin vui lòng thực hiện lại');
        }
    };

    const handleUpdateBooking = async (body, token, userId) => {
        const result = await bookingService.updateBooking(body, token).then((response) => response);
        if (result) {
            if (typeCheckHealthOld === 'off' && typeCheckHealth === 'ON') {
                sendNotification(body, userId);
            }
            alert('Đã cập nhật thành công');
            window.location.replace('/');
        } else {
            alert('Đã xảy ra lỗi trong quá trình đặt lịch, xin vui lòng thực hiện lại');
        }
    };

    function getBodyBooking(form) {
        const body = {
            id: searchParams.get('id'),
            nameScheduler: !!form.nameScheduler.current ? form.nameScheduler.current.value : '',
            phoneScheduer: !!form.phoneScheduer.current ? form.phoneScheduer.current.value : '',
            namePatient: form.namePatient.current.value,
            sex: typeSex,
            phonePatient: form.phonePatient.current.value,
            location: form.location.current.value,
            reason: form.reason.current.value,
            yearOfBirth: form.yearOfBirth.current.value,
            type: typeCheckHealth.toLowerCase(),
            amount: form.amount.current.value,
            statusPayment: isPayment,
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
            } else {
                const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
                if (!form.phoneScheduer.current.value.match(regexPhoneNumber)) {
                    msg.phoneScheduer = 'Số điện thoại không đúng, vui lòng nhập lại';
                }
            }
        }
        if (!form.namePatient.current.value) {
            msg.namePatient = 'Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú';
        }
        if (!form.phonePatient.current.value) {
            msg.phonePatient = 'Vui lòng nhập thông tin';
        } else {
            const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            if (!form.phonePatient.current.value.match(regexPhoneNumber)) {
                msg.phonePatient = 'Số điện thoại không đúng, vui lòng nhập lại';
            }
        }
        if (!form.yearOfBirth.current.value) {
            msg.yearOfBirth = 'Vui lòng nhập thông tin';
        } else {
            let regex = /(?:19|20)\d\d/;
            if (!regex.test(Number(form.yearOfBirth.current.value))) {
                msg.yearOfBirth = 'Năm sinh không đúng, vui lòng nhập lại';
            }
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
        const getDetailMedical = async (id) => {
            const result = await mediaService.getOneById(id).then((response) => response);
            form.current.namePatient.current.value = result.namePatient;
            form.current.phonePatient.current.value = result.phonePatient;
            if (!!result.nameScheduler && !!result.phoneScheduer) {
                form.current.nameScheduler.current.value = result.nameScheduler;
                form.current.phoneScheduer.current.value = result.phoneScheduer;
            }
            form.current.location.current.value = result.location;
            form.current.reason.current.value = result.reason;
            form.current.yearOfBirth.current.value = result.yearOfBirth;
            form.current.amount.current.value = result.examinationPrice;
            setDate(result.date);
            result.sex === 'Name' ? setTypeSex('Nam') : setTypeSex('Nu');
            result.type === 'on' ? setTypeCheckHealth('ON') : setTypeCheckHealth('OFF');
            result.type === 'on' ? setTypePay('ON') : setTypePay('OFF');
            result.statusPayment === 1 ? setIsPayment(1) : setIsPayment(0);
            setUser(result.doctor);
            setWorkTime({
                id: result.workTimeID,
                time: result.wordTimeTime,
            });
            setTypeCheckHealthOld(result.type);
        };
        getDetailMedical(searchParams.get('id'));
        connectSockJs();
    }, []);

    return (
        <UpdateBooking
            user={user}
            workTime={workTime}
            form={form}
            date={date}
            isPayment={isPayment}
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
        ></UpdateBooking>
    );
}

export default UpdateBookingContainer;
