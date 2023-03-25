import { useEffect, useState } from 'react';
import Specialty from './Specialty';
import specialtyService from '~/service/SpecialtyService';

function SpecialtyContainer() {
    const [currentPage, setCurrentPage] = useState(0);
    const [specialtyList, setSpecialtyList] = useState([]);

    useEffect(() => {
        const getAllSpecialty = async () => {
            const result = await specialtyService.getAllSpecialty().then((response) => response);
            setSpecialtyList(result);
        };
        getAllSpecialty();
    }, []);

    useEffect(() => {
        const getAllSpecialty = async (currentPage) => {
            const result = await specialtyService.getAllSpecialty(currentPage).then((response) => response);
            setSpecialtyList(result);
        };
        getAllSpecialty(currentPage);
    }, [currentPage]);

    return <Specialty data={specialtyList} onClickPage={setCurrentPage}></Specialty>;
}

export default SpecialtyContainer;
