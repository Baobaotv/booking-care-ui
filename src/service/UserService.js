import config from '~/config';

const signIn = async (body) => {
    const response = await fetch(config.baseUrl + 'signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response);
    return response;
};

const signup = async (body) => {
    const response = await fetch(config.baseUrl + 'signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response);
    return response;
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

const getDoctorBySpecialtyIdAndDateAndWorkTimeId = async (specialtyId, workTimeId, date) => {
    const response = await fetch(
        config.baseUrl +
            'user/get-all-by specialty-workTimeId?specialtyId=' +
            specialtyId +
            '&workTimeId=' +
            workTimeId +
            '&date=' +
            date,
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

const getDoctorByMedicalId = async (id, token) => {
    const url = config.baseUrl + 'user/doctor-by-medical/' + id;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }).then(async (response) => await response);
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

const searchDoctor = async (
    hospitalId,
    specialtyId,
    doctorName,
    currentPage = config.pageableDefault.pageDefault,
    size = 8,
) => {
    const params = {
        hospitalId: hospitalId,
        specialtyId: specialtyId,
        doctorName: doctorName,
        page: currentPage,
        size,
    };
    const response = await fetch(config.baseUrl + 'user/search-doctor?' + new URLSearchParams(params).toString(), {
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

const createUrlResetPassword = async (body) => {
    const response = await fetch(config.baseUrl + 'user/create-url-reset-pass', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response);
    return response;
};

const resetPassword = async (body) => {
    const response = await fetch(config.baseUrl + 'user/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(body),
    }).then(async (response) => await response);
    return response;
};

const changePassword = async (body, token) => {
    const response = await fetch(config.baseUrl + 'user/change-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
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
    getDoctorByMedicalId,
    getDoctorBySpecialtyIdAndDateAndWorkTimeId,
    searchDoctor,
    createUrlResetPassword,
    resetPassword,
    changePassword,
};

export default api;
