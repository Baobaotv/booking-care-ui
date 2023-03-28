import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DoctorDetail from './DoctorDetail';
import userService from '~/service/UserService';
function DoctorDetailContainer() {
    const [searchParams] = useSearchParams();
    const [doctor, setDoctor] = useState();
    useEffect(() => {
        const getDoctorById = async (id) => {
            const result = await userService.getDoctorById(id).then((response) => response);
            setDoctor(result);
        };
        getDoctorById(searchParams.get('id'));
    }, [searchParams]);
    return <DoctorDetail doctor={doctor}></DoctorDetail>;
}

export default DoctorDetailContainer;
