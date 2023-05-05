import config from '~/config';

const getListOfRecentHandbook = async (body) => {
    const response = await fetch(config.baseUrl + 'handbook/get-list-of-recent', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getFeaturedHandbook = async (body) => {
    const response = await fetch(config.baseUrl + 'handbook/get-featured-handbook', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const getOneHandbook = async (id) => {
    const response = await fetch(config.baseUrl + 'handbook/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const searchHandbooks = async (
    title,
    specialzedId,
    page = config.pageableDefault.pageDefault,
    size = config.pageableDefault.sizeDefault,
) => {
    const params = {
        title: !!title ? title : '',
        specialzedId: specialzedId,
        page: page,
        size: size,
    };
    const response = await fetch(config.baseUrl + 'handbook/search?' + new URLSearchParams(params).toString(), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => await response.json());
    return response;
};

const api = {
    getListOfRecentHandbook,
    getFeaturedHandbook,
    searchHandbooks,
    getOneHandbook,
};

export default api;
