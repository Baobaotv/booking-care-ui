import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ServiceItemHandbook.module.scss';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);
function ServiceItemHandbook() {
    return (
        <Link className={cx('content__handbook')} to={config.routes.handbookDetail}>
            <div className={cx('content__handbook-item')}>
                <img src={images.serviceItemRedirect} alt="" />
                <dv className={cx('content__handbook-description')}>
                    <p className={cx('content__handbook-title')}>
                        Top 6 địa chỉ khám Cơ xương khớp uy tín Hà Nội (Phần 4)
                    </p>

                    <p className={cx('content__handbook-short-description')}>
                        BookingCare gợi ý 8 bác sĩ cơ xương khớp giỏi tại Hà Nội nhiều kinh nghiệm để bệnh nhân và người
                        nhà tham khảo gồm các thông tin: Thế mạnh chuyên sâu, lịch khám, giá khám, cách đặt hẹn trước.
                    </p>
                </dv>
            </div>
        </Link>
    );
}

export default ServiceItemHandbook;
