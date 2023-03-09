import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import styles from './ItemHandbookHorizontal.module.scss';
const cx = classNames.bind(styles);

function ItemHandbookHorizontal() {
    return (
        <Link className={cx('wrapper')} to={config.routes.handbookDetail}>
            <img className={cx('hospital-avatar')} src={images.handbookAvatar} alt="handbook-avatar"></img>
            <div className={cx('handbook-information')}>
                <p className={cx('handbook-title')}>8 bác sĩ Thần kinh giỏi và nhiều kinh nghiệm ở Hà Nội (Phần 1) </p>
                <span className={cx('handbook-description')}>
                    BookingCare gợi ý 8 bác sĩ cơ xương khớp giỏi tại Hà Nội nhiều kinh nghiệm để bệnh nhân và người nhà
                    tham khảo gồm các thông tin: Thế mạnh chuyên sâu, lịch khám, giá khám, cách đặt hẹn trước.
                </span>
            </div>
        </Link>
    );
}

export default ItemHandbookHorizontal;
