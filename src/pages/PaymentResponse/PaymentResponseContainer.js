import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentResponse from './PaymentResponse';
import paymentService from '~/service/PaymentService';
import config from '~/config/config';

function PaymentResponseContainer() {
    const location = useLocation();
    const [paymentResponse, setPaymentResponse] = useState();
    const [statusPayment, setStatusPayment] = useState();
    const [messagePayment, setMessagePayment] = useState();
    useEffect(() => {
        let search = location.search.substring(1);
        let bodyPayment = JSON.parse(
            '{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        );
        const userInfo = JSON.parse(localStorage.getItem('token'));
        const bookingId = JSON.parse(localStorage.getItem(userInfo.username + '_booking_id'));
        bodyPayment['medicalId'] = bookingId;
        bodyPayment['createdById'] = userInfo.id;
        bodyPayment['paymentReturnUrl'] = window.location.href;

        checkPaymentReturn(bodyPayment, userInfo.token);
    }, []);

    const checkPaymentReturn = async (body, token) => {
        const result = await paymentService.checkPaymentReturn(body, token).then((response) => response);
        console.log(result);
        if (result.status !== config.constant.payment_paid) {
            setStatusPayment(result.status);
            if (result.status === -1) {
                setMessagePayment('Giao dịch không hợp lệ, quý khách vui lòng thực hiện lại');
            } else {
                setMessagePayment('Giao dịch thất bại, quý khách vui lòng thực hiện thanh toán lịch khám mới');
            }
        } else {
            setStatusPayment(result.status);
            setPaymentResponse(result.data);
        }
    };

    return (
        <PaymentResponse
            paymentResponse={paymentResponse}
            statusPayment={statusPayment}
            messagePayment={messagePayment}
        ></PaymentResponse>
    );
}

export default PaymentResponseContainer;
