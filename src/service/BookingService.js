import config from '~/config';

const booking = async (body, token) => {
    const response = await fetch(config.baseUrl + 'booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response.json());
    return response;
};

const updateBooking = async (body, token) => {
    const response = await fetch(config.baseUrl + 'update-booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response.json());
    return response;
};

const updateTimeBooking = async (body, token) => {
    const response = await fetch(config.baseUrl + 'update-time-booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response.json());
    return response;
};

const cancelBooking = async (id, token) => {
    const response = await fetch(config.baseUrl + 'cancel-booking/' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    booking,
    updateBooking,
    updateTimeBooking,
    cancelBooking,
};

export default api;
