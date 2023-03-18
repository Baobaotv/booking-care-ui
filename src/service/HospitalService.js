import config from '~/config';

const getFeaturedHospital = async (body) => {
    const response = await fetch(config.baseUrl + 'hospital/get-featured-hospital', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    getFeaturedHospital,
};

export default api;
