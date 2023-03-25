import { useSearchParams } from 'react-router-dom';
import SpecialtyDetail from './SpecialtyDetail';
import specialtyService from '~/service/SpecialtyService';
import userService from '~/service/UserService';
import { useEffect, useState } from 'react';

function SpecialtyDetailContainer() {
    const [searchParams] = useSearchParams();
    const [specialDetail, setSpecialDetail] = useState();
    const [doctorOfSpecialties, setDoctorOfSpecialties] = useState();
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const getSpecialtyDetail = async () => {
            const result = await specialtyService
                .getSpecialtyDetail(searchParams.get('id'))
                .then((response) => response);
            setSpecialDetail(result);
        };
        const getDoctorOfSpecialty = async () => {
            const result = await userService.getDoctorOfSpecialty(searchParams.get('id')).then((response) => response);
            setDoctorOfSpecialties(result);
        };
        getSpecialtyDetail();
        getDoctorOfSpecialty();
    }, [searchParams]);

    useEffect(() => {
        const getDoctorOfSpecialty = async (currentPage) => {
            const result = await userService
                .getDoctorOfSpecialty(searchParams.get('id'), currentPage)
                .then((response) => response);
            setDoctorOfSpecialties(result);
        };
        getDoctorOfSpecialty(currentPage);
    }, [currentPage]);

    return (
        <SpecialtyDetail
            specialDetail={specialDetail}
            doctorOfSpecialties={doctorOfSpecialties}
            onClickPage={setCurrentPage}
        ></SpecialtyDetail>
    );
}

export default SpecialtyDetailContainer;
