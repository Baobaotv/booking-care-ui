import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import PaymentResponse from './PaymentResponse';
import paymentService from '~/service/PaymentService';

function PaymentResponseContainer() {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    useEffect(() => {
        var search = location.search.substring(1);
        let bodyPayment = JSON.parse(
            '{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        );
        console.log(bodyPayment);

        const savePayment = async (body) => {
            const result = await paymentService.savePayment(body).then((response) => response);
            console.log('=========da ghi======');
        };
        savePayment(bodyPayment);
    }, []);

    return <PaymentResponse></PaymentResponse>;
}

export default PaymentResponseContainer;
