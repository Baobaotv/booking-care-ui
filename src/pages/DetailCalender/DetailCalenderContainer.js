import { useEffect, useState } from 'react';
import DetailCalender from './DetailCalender';
import mediaService from '~/service/MedicalService';
import { useSearchParams } from 'react-router-dom';

function DetailCalenderContainer() {
    const [medical, setMedical] = useState();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('token'));
        const getOneById = async (id, token) => {
            const result = await mediaService.getOneById(id, token).then((response) => response);
            setMedical(result);
        };

        getOneById(searchParams.get('id'), userInfo.token);
    }, []);

    return <DetailCalender medical={medical}></DetailCalender>;
}

export default DetailCalenderContainer;
