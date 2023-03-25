import config from '~/config';

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

const api = {
    getAllTimeOfDoctorByDate,
};

export default api;
