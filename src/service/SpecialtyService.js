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

const getAllSpecialty = async (page = 0, size = 6) => {
    const response = await fetch(config.baseUrl + 'specicalized?page=' + page + '&size' + size, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getSpecialtyDetail = async (id) => {
    const response = await fetch(config.baseUrl + 'specicalized/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    getFeaturedSpecialty,
    getAllSpecialty,
    getSpecialtyDetail,
};

export default api;
