import { useEffect, useState } from 'react';
import config from '~/config';
import Hospital from './Hospital';
import hospitalService from '~/service/HospitalService';

function HospitalContainer() {
    const [currentPage, setCurrentPage] = useState(config.pageableDefault.pageDefault);
    const [hospitals, setHospitals] = useState([]);
    const [name, setName] = useState('');
    const [typeSearch, setTypeSearch] = useState('');

    const getAllHospital = async () => {
        const result = await hospitalService.getAllHospital(currentPage).then((response) => response);
        setHospitals(result);
    };

    useEffect(() => {
        if (!typeSearch) {
            getAllHospital();
        }
        if (typeSearch === 'NAME') {
            searchAllByName();
        }
    }, [currentPage]);

    const searchAllByName = async () => {
        const result = await hospitalService.searchAllByName(name, currentPage).then((response) => response);
        setHospitals(result);
    };

    const onClickSearchByName = () => {
        setCurrentPage(config.pageableDefault.pageDefault);
        searchAllByName();
    };

    return (
        <Hospital
            hospitals={hospitals}
            onClickPage={setCurrentPage}
            searchAllByName={onClickSearchByName}
            name={name}
            setName={setName}
            setTypeSearch={setTypeSearch}
            setHospitals={setHospitals}
            typeSearch={typeSearch}
        ></Hospital>
    );
}

export default HospitalContainer;
