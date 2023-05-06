import config from '~/config';

const searchAllByFullText = async (query) => {
    const response = await fetch(config.baseUrl + 'search-all?query=' + encodeURIComponent(query), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    searchAllByFullText,
};

export default api;
