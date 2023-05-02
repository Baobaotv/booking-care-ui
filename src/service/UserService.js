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

const getDoctorOfHospital = async (id, currentPage = config.pageableDefault.pageDefault) => {
    const response = await fetch(
        config.baseUrl + 'user/hospital/' + id + '?page=' + currentPage + '&size=' + config.pageableDefault.sizeDefault,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    ).then(async (response) => await response.json());
    return response;
};

const getDoctorById = async (id, date) => {
    const url = !!date ? config.baseUrl + 'user/doctor/' + id + '?date=' + date : config.baseUrl + 'user/doctor/' + id;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getAllDoctor = async (currentPage = config.pageableDefault.pageDefault, size = 8) => {
    const response = await fetch(config.baseUrl + 'user/doctor?page=' + currentPage + '&size=' + size, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getInfoCurrentUser = async (token) => {
    const response = await fetch(config.baseUrl + 'current-login', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }).then(async (response) => await response.json());
    return response;
};

const updateProfile = async (data, token) => {
    const response = await fetch(config.baseUrl + 'updateClient', {
        method: 'POST',
        headers: {
            Accept: 'application/form-data',
            Authorization: `Bearer ${token}`,
        },
        enctype: 'multipart/form-data',
        body: data,
    }).then((response) => response.json());
    return response.data;
};

const api = {
    signIn,
    signup,
    getListDoctorOnline,
    getFeaturedDoctor,
    getDoctorOfSpecialty,
    getDoctorById,
    getDoctorOfHospital,
    getAllDoctor,
    getInfoCurrentUser,
    updateProfile,
};

export default api;
