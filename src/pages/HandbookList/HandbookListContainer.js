import HandBookList from './HandbookList';
import handbookService from '~/service/HandbookService';
import specialtyService from '~/service/SpecialtyService';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function HandbookListContainer() {
    const [searchParams] = useSearchParams();
    const [specialtyList, setSpecialtyList] = useState([]);
    const [handbooks, setHandbooks] = useState([]);
    const [title, setTitle] = useState(searchParams.get('title'));
    const [specialtyId, setSpecialtyId] = useState(searchParams.get('specialty-id'));
    const [currentPage, setCurrentPage] = useState(0);
    const optionSearch = useRef({
        title: searchParams.get('title'),
        specialtyId: searchParams.get('specialty-id'),
    });

    const getHandBook = async (title, specilatyId, currentPage) => {
        const result = await handbookService
            .searchHandbooks(title, specilatyId, currentPage)
            .then((response) => response);
        setHandbooks(result);
    };

    const onClickSearch = () => {
        optionSearch.current.title = title;
        optionSearch.current.specialtyId = !specialtyId ? '' : specialtyId;
        setCurrentPage(0);
        getHandBook(optionSearch.current.title, optionSearch.current.specialtyId, currentPage);
    };

    useEffect(() => {
        const getAllSpecialty = async () => {
            const result = await specialtyService.getAllSpecialty(0, 20).then((response) => response);
            setSpecialtyList(result);
        };
        getAllSpecialty();
    }, []);

    useEffect(() => {
        getHandBook(optionSearch.current.title, optionSearch.current.specialtyId, currentPage);
    }, [currentPage]);
    return (
        <HandBookList
            specialties={specialtyList}
            handbooks={handbooks}
            specialtyId={specialtyId}
            title={title}
            onChangeTitle={setTitle}
            onChangeSpecialty={setSpecialtyId}
            onClickPage={setCurrentPage}
            onClickSearch={onClickSearch}
        ></HandBookList>
    );
}

export default HandbookListContainer;
