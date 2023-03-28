import { useEffect, useState } from 'react';
import config from '~/config';
import Hospital from './Hospital';
import hospitalService from '~/service/HospitalService';

function HospitalContainer() {
    const [currentPage, setCurrentPage] = useState(config.pageableDefault.pageDefault);
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        const getAllHospital = async () => {
            const result = await hospitalService.getAllHospital(currentPage).then((response) => response);
            setHospitals(result);
        };
        getAllHospital();
    }, [currentPage]);

    return <Hospital hospitals={hospitals} onClickPage={setCurrentPage}></Hospital>;
}

export default HospitalContainer;
