import Home from './Home';
import handbookService from '~/service/HandbookService';
import userService from '~/service/UserService';
import hospitalService from '~/service/HospitalService';
import specialtyService from '~/service/SpecialtyService';
import { useEffect, useState } from 'react';

function HomeContainer() {
    const [listOfRecentHandbook, setListOfRecentHandbook] = useState([]);
    const [listDoctorOnline, setListDoctorOnline] = useState([]);
    const [listHospitalFeatured, setListHospitalFeatured] = useState([]);
    const [listSpecialtyFeatured, setListSpecialtyFeatured] = useState([]);
    const [listDoctorFeatured, setListDoctorFeatured] = useState([]);
    const [listHandbookFeatured, setListHandbookFeatured] = useState([]);

    useEffect(() => {
        const getListOfRecentHandbook = async () => {
            const result = await handbookService.getListOfRecentHandbook().then((response) => response);
            setListOfRecentHandbook(result);
        };
        const getListDoctorOnline = async () => {
            const result = await userService.getListDoctorOnline().then((response) => response);
            setListDoctorOnline(result);
        };
        const getFeaturedHospital = async () => {
            const result = await hospitalService.getFeaturedHospital().then((response) => response);
            setListHospitalFeatured(result);
        };
        const getFeaturedSpecialty = async () => {
            const result = await specialtyService.getFeaturedSpecialty().then((response) => response);
            setListSpecialtyFeatured(result);
        };
        const getFeaturedDoctor = async () => {
            const result = await userService.getFeaturedDoctor().then((response) => response);
            setListDoctorFeatured(result);
        };
        const getFeaturedHandbook = async () => {
            const result = await handbookService.getFeaturedHandbook().then((response) => response);
            setListHandbookFeatured(result);
        };
        getListOfRecentHandbook();
        getListDoctorOnline();
        getFeaturedHospital();
        getFeaturedSpecialty();
        getFeaturedDoctor();
        getFeaturedHandbook();
    }, []);

    return (
        <Home
            recentHandbooks={listOfRecentHandbook}
            doctorOnline={listDoctorOnline}
            featuredHospitals={listHospitalFeatured}
            featuredSpecialty={listSpecialtyFeatured}
            featuredDoctors={listDoctorFeatured}
            featuredHandbooks={listHandbookFeatured}
        ></Home>
    );
}

export default HomeContainer;
