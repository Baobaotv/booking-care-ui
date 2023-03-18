import config from '~/config';

const getListOfRecentHandbook = async (body) => {
    const response = await fetch(config.baseUrl + 'handbook/get-list-of-recent', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getFeaturedHandbook = async (body) => {
    const response = await fetch(config.baseUrl + 'handbook/get-featured-handbook', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    getListOfRecentHandbook,
    getFeaturedHandbook,
};

export default api;
