import { faCalendarAlt, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import ButtonBooking from '~/components/helper/ButtonBooking';
import LinkToPage from '~/components/helper/LinkToPage';
import styles from './DoctorDetail.module.scss';

const cx = classNames.bind(styles);

function DoctorDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Bác sĩ/ Chi tiết bác sĩ'}></LinkToPage>
                <div className={cx('doctor-content')}>
                    <div className={cx('doctor-introduce')}>
                        <div className={cx('doctor-introduce-avatar')}>
                            <img src={images.doctorAvatar} alt="doctor-avatar"></img>
                        </div>
                        <div className={cx('doctor-introduce-content')}>
                            <p className={cx('doctor-name')}>Bác sĩ Chuyên khoa II Trần Minh Khuyên</p>
                            <div className={cx('doctor-short-description')}>
                                <p>Phó Giám đốc, Trưởng khoa Hỗ trợ Sinh sản Bệnh viện Nam học và Hiếm muộn Hà Nội</p>
                                <p>Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('calendar')}>
                        <input type={'date'}></input>
                        <p>
                            <FontAwesomeIcon className={cx('calendar-icon')} icon={faCalendarAlt}></FontAwesomeIcon>Lịch
                            khám
                        </p>
                    </div>
                    <div className={cx('doctor-booking')}>
                        <div className={cx('doctor-calendar')}>
                            <ButtonBooking title={'08:00-08:30'}></ButtonBooking>
                            <ButtonBooking title={'08:30-09:00'}></ButtonBooking>
                            <ButtonBooking title={'09:30-10:00'}></ButtonBooking>
                            <ButtonBooking title={'08:00-08:30'}></ButtonBooking>
                            <ButtonBooking title={'08:00-08:30'}></ButtonBooking>
                            <ButtonBooking title={'08:30-09:00'}></ButtonBooking>
                            <ButtonBooking title={'09:30-10:00'}></ButtonBooking>
                            <ButtonBooking title={'08:00-08:30'}></ButtonBooking>
                        </div>
                        <div className={cx('doctor-booking-info')}>
                            <div className={cx('doctor-booking-info-address')}>
                                <p className={cx('doctor-booking-hospital-title')}>Địa chỉ khám</p>
                                <p className={cx('doctor-booking-hospital-name')}>
                                    Phòng khám Bệnh viện Đại học Y Dược 1
                                </p>
                                <p className={cx('doctor-booking-hospital-address')}>
                                    20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM
                                </p>
                            </div>
                            <div className={cx('doctor-booking-info-price')}>
                                <span className={cx('doctor-booking-info-price-title')}>Giá khám:</span>
                                <span className={cx('doctor-booking-info-price-value')}>500.000đ</span>
                            </div>
                        </div>
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
                    <hr></hr>
                    <div className={cx('doctor-description')}>
                        <div class="bs-noidung" id="bs-gioithieu">
                            <h2>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h2>
                            <ul>
                                <li>Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh</li>
                                <li>
                                    Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de
                                    Paris)
                                </li>
                                <li>Bác sĩ nhận khám từ 16 tuổi trở lên</li>
                            </ul>
                            <h3>Quá trình đào tạo</h3>
                            <ul>
                                <li>Tốt nghiệp Bác sĩ Đa khoa, Trường Đại học y dược thành phố Hồ Chí Minh</li>
                                <li>
                                    Học chuyên khoa cấp I và chuyên khoa cấp II Chuyên ngành Tâm thần, Đại học Y khoa
                                    Huế
                                </li>
                                <li>
                                    Tốt nghiệp Tâm lý trị liệu, trường Tâm lý thực Hành Paris (Psychology practique de
                                    Paris)
                                </li>
                            </ul>
                            <h3>Quá trình công tác</h3>
                            <ul>
                                <li>
                                    Nguyên Trưởng phòng Kế hoạch Nghiệp vụ, Trưởng phòng khám Tâm thần Quận 3, thành phố
                                    Hồ Chí Minh
                                </li>
                                <li>Nguyên Trưởng khoa lâm sàng Bệnh tâm thần thành phố Hồ Chí Minh</li>
                                <li>
                                    Giám định viên tư pháp chuyên ngành Tâm thần giám định các trường hợp trọng án, các
                                    trường hợp có liên quan pháp lý do cảnh sát điều tra, tòa án các cấp trưng cầu.
                                </li>
                            </ul>
                            <h2>Khám và điều trị</h2>
                            <ul>
                                <li>
                                    Các rối loạn giấc ngủ không thực tổn: mất ngủ, ngủ nhiều, ngủ ngày quá mức, rối loạn
                                    nhịp thức ngủ, hoảng sợ khi ngủ, ác mộng, ngủ rũ,...
                                </li>
                                <li>
                                    Các rối loạn lo âu: lo lắng, sợ hãi về tương lai, cảm giác cáu gắt, căng thẳng, vận
                                    động, bồn chồn, hồi hộp, vã mồ hôi tay chân, cồn cào,...
                                </li>
                                <li>Rối loạn trầm cảm: buồn chán, bi quan, mệt mỏi, giảm hoạt động,...</li>
                                <li>Hưng cảm: vui vẻ quá mức, suồng sã, tăng hoạt động, đứng ngồi không yên,...</li>
                                <li>Rối loạn hoang tưởng:&nbsp;hoang tưởng bị hại, bị theo dõi, liên hệ, bị tội,...</li>
                                <li>Rối loạn ảo giác</li>
                                <li>Các rối loạn liên quan đến stress</li>
                                <li>Rối loạn khí sắc</li>
                                <li>Rối loạn cảm xúc phân liệt</li>
                                <li>Rối loạn đa nhân cách</li>
                                <li>Các bệnh lý loạn thần do sử dụng chất (ma túy đá, cần sa, heroin..)...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorDetail;
