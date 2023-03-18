import config from '~/config';

const getFeaturedSpecialty = async (body) => {
    const response = await fetch(config.baseUrl + 'specicalized/get-featured-specialty', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    getFeaturedSpecialty,
};

export default api;
