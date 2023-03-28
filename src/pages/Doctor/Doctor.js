import classNames from 'classnames/bind';
import styles from './Doctor.module.scss';
import Pagination from '~/components/helper/Pagination';
import LinkToPage from '~/components/helper/LinkToPage';
import ServiceItemDoctor from '~/components/ServiceItemDoctor';
import SearchDoctor from '~/components/SearchDoctor';

const cx = classNames.bind(styles);

function Doctor({ doctors, onClickPage }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Bác sĩ'}></LinkToPage>
                <SearchDoctor></SearchDoctor>
                <h3 className={cx('doctor-title')}>Danh sách bác sĩ</h3>
                <div className={cx('doctor_column')}>
                    {!!doctors.content &&
                        doctors.content.map((item, index) => {
                            return <ServiceItemDoctor key={index} data={item} type={'doctor'}></ServiceItemDoctor>;
                        })}
                    {/* <ServiceItemDoctor type={'doctor'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'doctor'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'doctor'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'doctor'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'doctor'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'doctor'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'doctor'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'doctor'}></ServiceItemDoctor> */}
                </div>
            </div>
            <Pagination
                totalPages={doctors.totalPages}
                pageSize={doctors.size}
                currentPage={doctors.number}
                onClickPage={onClickPage}
            ></Pagination>
        </div>
    );
}

export default Doctor;
