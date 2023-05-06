import classNames from 'classnames/bind';
import Pagination from '~/components/helper/Pagination';
import LinkToPage from '~/components/helper/LinkToPage';
import ServiceItemDoctor from '~/components/ServiceItemDoctor';
import styles from './Hospital.module.scss';
import SearchHospital from '~/components/SearchHospital/SearchHospital';

const cx = classNames.bind(styles);

function Hospital({ hospitals, onClickPage, searchAllByName, name, setName, setTypeSearch }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Cơ sở y tế'}></LinkToPage>
                <SearchHospital
                    searchAllByName={searchAllByName}
                    name={name}
                    setName={setName}
                    setTypeSearch={setTypeSearch}
                ></SearchHospital>
                <div className={cx('hospital_column')}>
                    {!!hospitals.content &&
                        hospitals.content.map((item, index) => {
                            return <ServiceItemDoctor type={'hospital'} key={index} data={item}></ServiceItemDoctor>;
                        })}
                    {/* <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor> */}
                </div>
            </div>
            <Pagination
                totalPages={hospitals.totalPages}
                pageSize={hospitals.size}
                currentPage={hospitals.number}
                onClickPage={onClickPage}
            ></Pagination>
        </div>
    );
}

export default Hospital;
