import Doctor from './Doctor';
import { useEffect, useState } from 'react';
import userService from '~/service/UserService';
import hospitalService from '~/service/HospitalService';
import specialtyService from '~/service/SpecialtyService';

function DoctorContainer() {
    const [currentPage, setCurrentPage] = useState(0);
    const [doctors, setDoctors] = useState([]);
    const [hospitals, setHospitals] = useState([]);
    const [specialtys, setSpecialtys] = useState([]);
    const [doctorName, setDoctorName] = useState('');
    const [hospitalId, setHospitalId] = useState(0);
    const [specialtyId, setSpecialtyId] = useState(0);

    const searchDoctor = async () => {
        setCurrentPage(0);
        const result = await userService
            .searchDoctor(hospitalId, specialtyId, doctorName, currentPage)
            .then((response) => response);
        setDoctors(result);
    };

    const getDoctors = async () => {
        const result = await userService
            .searchDoctor(hospitalId, specialtyId, doctorName, currentPage)
            .then((response) => response);
        setDoctors(result);
    };

    useEffect(() => {
        getDoctors();
        const getAllHospital = async () => {
            const result = await hospitalService.getAllHospital(0, 100).then((response) => response);
            setHospitals(result);
        };
        const getAllSpecialty = async () => {
            const result = await specialtyService.getAllSpecialty(0, 100).then((response) => response);
            setSpecialtys(result);
        };
        getAllSpecialty();
        getAllHospital();
    }, []);

    useEffect(() => {
        getDoctors();
    }, [currentPage]);

    return (
        <Doctor
            doctors={doctors}
            onClickPage={setCurrentPage}
            hospitals={hospitals}
            specialtys={specialtys}
            doctorName={doctorName}
            setDoctorName={setDoctorName}
            hospitalId={hospitalId}
            setHospitalId={setHospitalId}
            specialtyId={specialtyId}
            setSpecialtyId={setSpecialtyId}
            searchDoctor={searchDoctor}
        ></Doctor>
    );
}

export default DoctorContainer;
