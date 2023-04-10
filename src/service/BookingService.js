import config from '~/config';

const booking = async (body, token) => {
    const response = await fetch(config.baseUrl + 'booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response.json());
    return response;
};


const api = {
    booking,
};

export default api;
