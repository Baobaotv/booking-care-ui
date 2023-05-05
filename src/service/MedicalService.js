import config from '~/config';

const deleteById = async (id, token) => {
    const response = await fetch(config.baseUrl + 'media/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }).then(async (response) => await response);
    return response;
};

const getAllSheduleIsWaitingByCurrentLogin = async (token) => {
    const response = await fetch(config.baseUrl + 'media/get-all-schedule-is-waiting-current-login', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(async (response) => await response.json());
    return response;
};

const getAllSheduleIsCompleteByCurrentLogin = async (token) => {
    const response = await fetch(config.baseUrl + 'media/get-all-schedule-is-complete-current-login', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(async (response) => await response.json());
    return response;
};

const getOneById = async (id, token) => {
    const response = await fetch(config.baseUrl + 'media/' + id, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    deleteById,
    getAllSheduleIsWaitingByCurrentLogin,
    getAllSheduleIsCompleteByCurrentLogin,
    getOneById,
};

export default api;
