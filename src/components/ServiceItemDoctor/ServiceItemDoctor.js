import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ServiceItemDoctor.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ServiceItemDoctor({ type }) {
    const to = type === 'hospital' ? '/benh-vien/chi-tiet' : '/bac-si/id';
    return (
        <Link to={to} className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('doctor-avatar')}
                    alt="Bác sĩ Chuyên khoa II Trần Minh Khuyên"
                    src={images.serviceItemRedirect}
                />
            </div>
            <h3 className={cx('doctor-name')}>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
            <h4 className={cx('doctor-description')}>
                <span>Sức khỏe tâm thần</span>
                <span>Tư vấn, trị liệu Tâm lý</span>
            </h4>
        </Link>
    );
}

export default ServiceItemDoctor;
