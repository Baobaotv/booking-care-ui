import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import styles from './ItemHandbookNormal.module.scss';

const cx = classNames.bind(styles);

function ItemHandbookNormal() {
    return (
        <Link className={cx('wrapper')} to={config.routes.handbookDetail}>
            <div className={cx('handbook-avatar')}>
                <img src={images.handbookAvatar} alt="Handbook avatar"></img>
            </div>
            <p className={cx('handbook-title')}>
                Khám Tai Mũi Họng tại Bệnh viện Nam Sài Gòn có tốt không? Review chi tiết
            </p>
            <p className={cx('handbook-short-description')}>
                Cùng BookingCare tìm hiểu về các thông tin thăm khám, chất lượng dịch vụ và phản hồi của bệnh nhân về
                chuyên khoa Tai Mũi Họng tại Bệnh viện Đa khoa Nam Sài Gòn.
            </p>
        </Link>
    );
}

export default ItemHandbookNormal;
