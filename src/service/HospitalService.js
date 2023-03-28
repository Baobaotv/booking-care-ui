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

const getAllHospital = async (page = config.pageableDefault.pageDefault, size = 8) => {
    const params = {
        page,
        size,
    };
    const response = await fetch(config.baseUrl + 'hospital?' + new URLSearchParams(params).toString(), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getOneHospitalById = async (id) => {
    const response = await fetch(config.baseUrl + 'hospital/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    getFeaturedHospital,
    getAllHospital,
    getOneHospitalById,
};

export default api;
