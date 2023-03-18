import config from '~/config';

export const getFeaturedDoctor = await fetch(config.baseUrl + '/doctor/feature').then((response) => response.json());
