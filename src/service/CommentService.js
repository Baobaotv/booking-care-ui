import config from '~/config';

const getAllByHandbookId = async (id) => {
    const response = await fetch(config.baseUrl + 'comment/handbook/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const deleteById = async (id) => {
    const response = await fetch(config.baseUrl + 'comment/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: id,
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    getAllByHandbookId,
    deleteById,
};

export default api;
