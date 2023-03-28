import Handbook from './Handbook';
import handbookService from '~/service/HandbookService';
import specialtyService from '~/service/SpecialtyService';
import { useEffect, useState } from 'react';

function HandbookContainer() {
    const [listHandbookFeatured, setListHandbookFeatured] = useState([]);
    const [listOfRecentHandbook, setListOfRecentHandbook] = useState([]);
    const [specialtyList, setSpecialtyList] = useState([]);

    useEffect(() => {
        const getListOfRecentHandbook = async () => {
            const result = await handbookService.getListOfRecentHandbook().then((response) => response);
            setListOfRecentHandbook(result);
        };

        const getFeaturedHandbook = async () => {
            const result = await handbookService.getFeaturedHandbook().then((response) => response);
            setListHandbookFeatured(result);
        };
        const getAllSpecialty = async () => {
            const result = await specialtyService.getAllSpecialty(0, 10).then((response) => response);
            setSpecialtyList(result);
        };

        getAllSpecialty();
        getListOfRecentHandbook();
        getFeaturedHandbook();
    }, []);
    return (
        <Handbook
            recentHandbooks={listOfRecentHandbook}
            featuredHandbooks={listHandbookFeatured}
            specialties={specialtyList}
        ></Handbook>
    );
}

export default HandbookContainer;
