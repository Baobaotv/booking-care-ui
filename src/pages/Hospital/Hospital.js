import classNames from 'classnames/bind';
import Pagination from '~/components/helper/Pagination';
import LinkToPage from '~/components/helper/LinkToPage';
import ServiceItemDoctor from '~/components/ServiceItemDoctor';
import styles from './Hospital.module.scss';
import SearchHospital from '~/components/SearchHospital/SearchHospital';

const cx = classNames.bind(styles);

function Hospital() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Cơ sở y tế'}></LinkToPage>
                <SearchHospital></SearchHospital>
                <div className={cx('hospital_column')}>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                    <ServiceItemDoctor type={'hospital'}></ServiceItemDoctor>
                </div>
            </div>
            <Pagination></Pagination>
        </div>
    );
}

export default Hospital;
