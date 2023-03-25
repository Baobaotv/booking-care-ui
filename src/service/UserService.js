import config from '~/config';

const signIn = async (body) => {
    const response = await fetch(config.baseUrl + 'signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response.json());
    return response;
};

const signup = async (body) => {
    const response = await fetch(config.baseUrl + 'signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then((response) => response.json());
    return response.data;
};

const getListDoctorOnline = async (body) => {
    const response = await fetch(config.baseUrl + 'user/get-doctor-online', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getFeaturedDoctor = async (body) => {
    const response = await fetch(config.baseUrl + 'user/get-featured-doctor', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getDoctorOfSpecialty = async (id, currentPage = config.pageableDefault.pageDefault) => {
    const response = await fetch(
        config.baseUrl +
            'user/specialzed/' +
            id +
            '?page=' +
            currentPage +
            '&size=' +
            config.pageableDefault.sizeDefault,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    ).then(async (response) => await response.json());
    return response;
};

const api = {
    signIn,
    signup,
    getListDoctorOnline,
    getFeaturedDoctor,
    getDoctorOfSpecialty,
};

export default api;
