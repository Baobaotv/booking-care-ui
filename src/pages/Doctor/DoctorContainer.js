import Doctor from './Doctor';
import { useEffect, useState } from 'react';
import userService from '~/service/UserService';

function DoctorContainer() {
    const [currentPage, setCurrentPage] = useState(0);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const getAllDoctor = async (currentPage) => {
            const result = await userService.getAllDoctor(currentPage).then((response) => response);
            setDoctors(result);
        };
        getAllDoctor(currentPage);
    }, [currentPage]);

    return <Doctor doctors={doctors} onClickPage={setCurrentPage}></Doctor>;
}

export default DoctorContainer;
