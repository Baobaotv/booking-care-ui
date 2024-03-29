import config from '~/config';

const createPayment = async (body) => {
    const response = await fetch(config.baseUrl + 'payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response.json());
    return response;
};

const savePayment = async (body, token) => {
    const response = await fetch(config.baseUrl + 'payment/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response.json());
    return response;
};

const checkPaymentReturn = async (body, token) => {
    const response = await fetch(config.baseUrl + 'payment/return', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    createPayment,
    savePayment,
    checkPaymentReturn,
};

export default api;
