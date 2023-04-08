import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import PaymentResponse from './PaymentResponse';
import paymentService from '~/service/PaymentService';
import mediacalService from '~/service/MedicalService';
import config from '~/config/config';

function PaymentResponseContainer() {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const [paymentResponse, setPaymentResponse] = useState();
    const [statusPayment, setStatusPayment] = useState();
    const [messagePayment, setMessagePayment] = useState();
    useEffect(() => {
        var search = location.search.substring(1);
        let bodyPayment = JSON.parse(
            '{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        );
        const userInfo = JSON.parse(localStorage.getItem('token'));
        const bookingId = JSON.parse(localStorage.getItem(userInfo.username + '_booking_id'));
        bodyPayment['medicalId'] = bookingId;
        bodyPayment['createdById'] = userInfo.id;

        if (bodyPayment['vnp_ResponseCode'] === '00') {
            savePayment(bodyPayment, userInfo.token);
            setStatusPayment(config.constant.payment_paid);
        } else if (bodyPayment['vnp_ResponseCode'] === '24') {
            deleteMedicalById(bookingId, userInfo.token);
            setStatusPayment(config.constant.payment_error);
            setMessagePayment('Giao dịch thất bại do quý khác đã hủy giao dịch, quý khách xin vui lòng đặt lại lịch khám.');
        } else {
            setStatusPayment(config.constant.payment_error);
            setMessagePayment('Đã xảy ra lỗi trong quá trình giao dịch, quý khách vui lòng thực hiện thanh toán lịch khám mới')
        }
    }, []);

    const savePayment = async (body, token) => {
        const result = await paymentService.savePayment(body, token).then((response) => response);
        setPaymentResponse(result);
    };

    const deleteMedicalById = async (id, token) => {
        const result = await mediacalService.deleteById(id, token).then((response) => response);
    }

    return <PaymentResponse paymentResponse={paymentResponse} statusPayment= {statusPayment} messagePayment={messagePayment}></PaymentResponse>;
}

export default PaymentResponseContainer;
