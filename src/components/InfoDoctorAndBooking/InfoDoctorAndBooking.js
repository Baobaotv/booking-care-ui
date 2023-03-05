import { faCalendarDays, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import ButtonBooking from '../helper/ButtonBooking';
import styles from './InfoDoctorAndBooking.module.scss';

const cx = classNames.bind(styles);

function InfoDoctorAndBooking() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-doctor')}>
                <div className={cx('info-doctor-avatar')}>
                    <img src={images.doctorAvatar} alt={'avatar-doctor'} />
                </div>
                <div className={cx('info-doctor-content')}>
                    <span className={cx('info-doctor-name')}>Bác sĩ Docter Name</span>
                    <div className={cx('info-doctor-short-description')}>
                        <p>Tốt nghiệp Bác sĩ Thần kinh Cột sống tại Life Chiropractic College - Hoa Kỳ</p>
                        <p>Chữa bệnh Thần kinh Cột sống không dùng thuốc hay phẫu thuật</p>
                        <p>Bác sĩ nhận khám và điều trị cả trẻ em, người lớn</p>
                    </div>
                </div>
            </div>
            <div className={cx('hospital-booking')}>
                <div className={cx('hospital-booking-wrapper-time')}>
                    <input type="date" id="date" className={cx('hospital-booking-time')} />
                </div>
                <p className={cx('hospital-booking-time-title')}>
                    <FontAwesomeIcon
                        className={cx('hospital-booking-time-icon')}
                        icon={faCalendarDays}
                    ></FontAwesomeIcon>
                    Lịch Khám
                </p>
                <div className={cx('hospital-booking-action')}>
                    <ButtonBooking title={'Đăng kí khám(Ca sáng)'}></ButtonBooking>
                    <ButtonBooking title={'Đăng kí khám(Ca chiều)'}></ButtonBooking>
                </div>
                <div className={cx('hospital-booking-action-tutorial')}>
                    <p>
                        Chọn
                        <FontAwesomeIcon
                            className={cx('hospital-booking-action-icon-select')}
                            icon={faHandPointUp}
                        ></FontAwesomeIcon>
                        và đăng kí đặt lịch (phí đặt lịch 0đ)
                    </p>
                </div>
                <div className={cx('hospital-info')}>
                    <div className={cx('hospital-info-address')}>
                        <p>Địa chỉ khám</p>
                        <span>99 Nguyễn Du, Phường Bến Thành, Quận 1, Tp Hồ Chí Minh</span>
                    </div>
                    <div className={cx('hospital-info-cost')}>
                        <p> Giá khám: </p>
                        <span>800.000Đ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoDoctorAndBooking;
