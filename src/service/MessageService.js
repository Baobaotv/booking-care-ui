import config from '~/config';

const getListMessageByUserId = async (body, token) => {
    const response = await fetch(config.baseUrl + 'selectUser', {
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
    getListMessageByUserId,
};

export default api;
