import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import styles from './ContentDownloadApp.module.scss';

const cx = classNames.bind(styles);
function ContentDownloadApp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('content__bookingcare')}>
                    <img src={images.app} alt="" className={cx('content__bookingcare-img')} />
                    <div className={cx('content__bookingcare-body')}>
                        <h2 className={cx('content__bookingcare-heading')}>Tải ứng dụng BookingCare</h2>
                        <ul className={cx('content__bookingcare-list')}>
                            <li className={cx('content__bookingcare-item')}>
                                <FontAwesomeIcon icon={faCheck} className={cx('content-icon')}></FontAwesomeIcon>
                                Đặt Lịch Khám Nhanh Hơn
                            </li>
                            <li className={cx('content__bookingcare-item')}>
                                <FontAwesomeIcon icon={faCheck} className={cx('content-icon')}></FontAwesomeIcon>
                                Nhận Thông Báo Từ Hệ Thống
                            </li>
                            <li className={cx('content__bookingcare-item')}>
                                <FontAwesomeIcon icon={faCheck} className={cx('content-icon')}></FontAwesomeIcon>
                                Nhận Hướng Dẫn Đi Khám Chi Tiết
                            </li>
                        </ul>
                        <a href="/" className={cx('bookingcare-install')}>
                            <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                                alt=""
                                className={cx('bookingcare-install-img1')}
                            />
                            <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                                alt=""
                                className={cx('bookingcare-install-img2')}
                            />
                        </a>
                        <a href="/" className={cx('link')}>
                            Hoặc mở liên kết : <strong>https://bookingcare.vn/app</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentDownloadApp;
