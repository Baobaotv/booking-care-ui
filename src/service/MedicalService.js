import config from '~/config';

const deleteById = async (id, token) => {
    const response = await fetch(config.baseUrl + 'media/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
        },
    }).then(async (response) => await response);
    return response;
};


const api = {
    deleteById,
};

export default api;
