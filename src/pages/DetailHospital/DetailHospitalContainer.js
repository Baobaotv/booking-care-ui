import { useEffect, useState } from 'react';
import config from '~/config';
import DetailHospital from './DetailHospital';
import hospitalService from '~/service/HospitalService';
import userService from '~/service/UserService';
import { useSearchParams } from 'react-router-dom';

function DetailHospitalContainer() {
    const [searchParams] = useSearchParams();
    const [hospital, setHospital] = useState();
    const [doctorsBooking, setDoctorsBooking] = useState();
    const [currentPage, setCurrentPage] = useState(config.pageableDefault.pageDefault);
    const hospitalId = searchParams.get('id');

    useEffect(() => {
        const getOneHospitalById = async (id) => {
            const result = await hospitalService.getOneHospitalById(id).then((response) => response);
            setHospital(result);
        };
        getOneHospitalById(hospitalId);
    }, [hospitalId]);

    useEffect(() => {
        const getDoctorOfHospital = async (hospitalId) => {
            const result = await userService.getDoctorOfHospital(hospitalId).then((response) => response);
            setDoctorsBooking(result);
        };
        getDoctorOfHospital(hospitalId);
    }, [currentPage, hospitalId]);

    return (
        <DetailHospital
            hospital={hospital}
            doctorsBooking={doctorsBooking}
            onClickPage={setCurrentPage}
        ></DetailHospital>
    );
}

export default DetailHospitalContainer;
