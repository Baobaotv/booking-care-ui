import config from '~/config';

const getInteractiveOfCurrentUser = async (token) => {
    const response = await fetch(config.baseUrl + 'interactive/get-by-current-login', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
        },
    }).then(async (response) => await response.json());
    return response;
};


const api = {
    getInteractiveOfCurrentUser,
};

export default api;
