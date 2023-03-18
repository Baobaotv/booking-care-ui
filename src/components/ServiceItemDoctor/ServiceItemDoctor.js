import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ServiceItemDoctor.module.scss';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);

function ServiceItemDoctor({ type, data }) {
    const content = {};
    switch (type) {
        case 'doctor': {
            content.to = config.routes.doctorDetail + '?id=' + data.id;
            content.title = data.name;
            content.img = data.img;
            content.desc = 'Bác sĩ chuyên khoa: ' + data.specializedName;
            break;
        }
        case 'hospital': {
            content.to = config.routes.hospitalDetail + '?id=' + data.id;
            content.title = data.name;
            content.img = data.img;
            content.desc = data.location;
            break;
        }
        default: {
            content.to = '/';
            content.title = 'Ưu đãi 50% phí khám với bác sĩ tại Phòng khám Mediplus';
            content.img = images.serviceItemRedirect;
            content.desc = 'Giảm 50% phí khám ban đầu với các chuyên khoa Cơ xương khớp, Tim mạch và Tiêu hóa';
            break;
        }
    }
    return (
        <Link to={content.to} className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('doctor-avatar')} alt="Bác sĩ Chuyên khoa II Trần Minh Khuyên" src={content.img} />
            </div>
            <h3 className={cx('doctor-name')}>{content.title}</h3>
            <h4 className={cx('doctor-description')}>
                <span>{content.desc}</span>
            </h4>
        </Link>
    );
}

export default ServiceItemDoctor;
