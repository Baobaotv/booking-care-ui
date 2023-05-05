import config from '~/config';

//not contain wk is sheduled
const getAllTimeOfDoctorByDate = async (doctorId, date) => {
    const params = {
        'doctor-id': doctorId,
        date: date,
    };
    const response = await fetch(
        config.baseUrl + 'workTime/get-all-by-doctor-and-date?' + new URLSearchParams(params).toString(),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    ).then(async (response) => await response.json());
    return response;
};

// contain wk is sheduled
const getAllTimeOfDoctor = async (doctorId) => {
    const response = await fetch(config.baseUrl + 'workTime/get-all-by-doctor?doctor-id=' + doctorId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getOneById = async (id) => {
    const response = await fetch(config.baseUrl + 'workTime/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getAll = async () => {
    const response = await fetch(config.baseUrl + 'workTime/get-all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    getAllTimeOfDoctorByDate,
    getAllTimeOfDoctor,
    getOneById,
    getAll,
};

export default api;
