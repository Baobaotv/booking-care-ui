import classNames from 'classnames/bind';
import styles from './DetailHospital.module.scss';

import images from '~/assets/images';
import ServiceItemDoctor from '~/components/ServiceItemDoctor';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InfoDoctorAndBooking from '~/components/InfoDoctorAndBooking';
import Pagination from '~/components/helper/Pagination';

const cx = classNames.bind(styles);

const ACTION_SHOW_INTRODUCE = 1;
const ACTION_BOOK_SCHEDULE = 2;

function DetailHospital({ hospital, doctorsBooking, onClickPage }) {
    const [action, setAction] = useState(ACTION_SHOW_INTRODUCE);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('image-title')}>
                <img src={images.backgroundHospital} alt={'background-hospital'} />
                <div className={cx('hospital-information')}>
                    <div className={cx('hospital-information-content')}>
                        <div className={cx('hospital-avatar')}>
                            <img src={images.hospitalAvatar} alt={'Avatar'}></img>
                        </div>
                        <div className={cx('hospital-information-title')}>
                            <h1>{!!hospital && hospital.name}</h1>
                            <span>{!!hospital && hospital.location}</span>
                        </div>
                    </div>
                    <div className={cx('hospital-action')}>
                        <div
                            className={
                                action === ACTION_SHOW_INTRODUCE
                                    ? cx('hospital-action-introduce', 'selected')
                                    : cx('hospital-action-introduce')
                            }
                            onClick={() => setAction(ACTION_SHOW_INTRODUCE)}
                        >
                            Giới thiệu
                        </div>
                        <div
                            className={
                                action === ACTION_BOOK_SCHEDULE
                                    ? cx('introduce-action-book', 'selected')
                                    : cx('introduce-action-book')
                            }
                            onClick={() => setAction(ACTION_BOOK_SCHEDULE)}
                        >
                            Đặt lịch khám
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('hospital-content')}>
                <div className={cx('grid', 'wide')}>
                    <div
                        className={
                            action === ACTION_SHOW_INTRODUCE
                                ? cx('hospital-introduce', 'selected')
                                : cx('hospital-introduce')
                        }
                    >
                        <div className={cx('hospital-title')}>
                            <span>
                                BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người
                                dùng với trên 150 bệnh viện - phòng khám uy tín, hơn 1,000 bác sĩ chuyên khoa giỏi và
                                hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.
                            </span>
                        </div>
                        <div className={cx('hospital-short-description')}>
                            <div>
                                <p>
                                    Từ nay, người bệnh có thể đặt lịch tại Bệnh viện Đa khoa An Việt thông qua hệ thống
                                    đặt khám BookingCare.
                                </p>
                                <ul>
                                    <li>Được lựa chọn khám với các bác sĩ chuyên khoa giàu kinh nghiệm</li>
                                    <li>Hỗ trợ đặt khám trực tuyến trước khi đi khám&nbsp;(miễn phí đặt lịch)</li>
                                    <li>Giảm thiểu thời gian chờ đợi</li>
                                </ul>
                                <p>
                                    Sau khi đặt khám, người bệnh sẽ nhận được hướng dẫn chi tiết về sự chuẩn bị cả TRƯỚC
                                    và TRONG và SAU KHI KHÁM để hành trình đi khám thuận tiện và hiệu quả hơn.
                                </p>
                            </div>
                        </div>

                        <div className={cx('hospital-doctors')}>
                            <div className={cx('hospital-doctors-title')}>
                                <h3>Bác sĩ</h3>
                                <div className={cx('content__heading')}>
                                    <Link to={'/bac-si'} className={cx('heading__search')}>
                                        Xem thêm
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('hospital-doctors-content')}>
                                {!!doctorsBooking &&
                                    doctorsBooking.content.slice(0, 4).map((item, index) => {
                                        return (
                                            <ServiceItemDoctor
                                                data={item}
                                                key={index}
                                                type={'doctor'}
                                            ></ServiceItemDoctor>
                                        );
                                    })}
                                {/* <ServiceItemDoctor></ServiceItemDoctor>
                                <ServiceItemDoctor></ServiceItemDoctor>
                                <ServiceItemDoctor></ServiceItemDoctor>
                                <ServiceItemDoctor></ServiceItemDoctor> */}
                            </div>
                            <div className={cx('hospital-description')}>
                                <div className={cx('hospital-description-title')}>
                                    <h3>Giới thiệu</h3>
                                </div>
                                <div className={cx('hospital-description-content')}>
                                    <div>
                                        <p
                                            dangerouslySetInnerHTML={{ __html: !!hospital ? hospital.description : '' }}
                                        ></p>
                                        <p>
                                            Đội ngũ bác sĩ của bệnh viện đều là các bác sĩ nhiều năm kinh nghiệm và được
                                            bệnh nhân phản hồi tích cực về quá trình khám và điều trị. Bên cạnh đó, bệnh
                                            viện còn đầu tư cơ sở hạ tầng và trang thiết bị hỗ trợ thăm khám và điều trị
                                            hiệu quả cho người bệnh: Hệ thống nội soi tai mũi họng, máy chụp cắt lớp vi
                                            tính, phòng phẫu thuật đảm bảo vô trùng,...
                                        </p>
                                        <p>
                                            <strong>Địa chỉ:</strong> {!!hospital && hospital.location}
                                        </p>
                                        <p>
                                            <strong>Thời gian làm việc: </strong>Thứ 2 đến Chủ Nhật
                                        </p>
                                        <ul>
                                            <li>Sáng: Từ 7h30 – 12h00</li>
                                            <li>Chiều: Từ 13h30 – 16h30</li>
                                        </ul>
                                        <p>
                                            <strong>Hình thức thanh toán:&nbsp;</strong>Tiền mặt, Thẻ ngân hàng
                                        </p>
                                        <p>
                                            <strong>Bảo hiểm bảo lãnh:</strong>&nbsp;Hiện tại, bệnh viện hỗ trợ thanh
                                            toán bảo hiểm y tế nhà nước với các danh mục cho phép và bảo lãnh trực tiếp
                                            nhiều loại bảo hiểm y tế tư nhân như: Insmart, VIB, PTI, Baoviet,...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('hospital-location')}>
                                <div className={cx('hospital-location-title')}>
                                    <h3>Vị trí</h3>
                                </div>
                                <div className={cx('hospital-location-content')}>
                                    <iframe
                                        title={'Vị trí bệnh viện'}
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3622390355554!2d105.77969978778145!3d21.018187148909558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab43c0c4db%3A0xdb6effebd6991106!2sKeangnam%20Landmark%20Tower%2072!5e0!3m2!1sen!2s!4v1677772591187!5m2!1sen!2s"
                                        width={'800'}
                                        height={'450'}
                                        style={{ border: 0 }}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            action === ACTION_BOOK_SCHEDULE
                                ? cx('hospital-book-schedule', 'selected')
                                : cx('hospital-book-schedule')
                        }
                    >
                        <div className={cx('hospital-book-title')}>
                            <h3>Danh sách bác sĩ</h3>
                        </div>
                        <div className={cx('hospital-book-doctors')}>
                            {!!doctorsBooking &&
                                doctorsBooking.content.map((item, index) => {
                                    return <InfoDoctorAndBooking data={item} key={index}></InfoDoctorAndBooking>;
                                })}
                            {/* <InfoDoctorAndBooking></InfoDoctorAndBooking>
                            <InfoDoctorAndBooking></InfoDoctorAndBooking>
                            <InfoDoctorAndBooking></InfoDoctorAndBooking>
                            <InfoDoctorAndBooking></InfoDoctorAndBooking>
                            <InfoDoctorAndBooking></InfoDoctorAndBooking> */}
                        </div>
                        <Pagination
                            totalPages={!!doctorsBooking && doctorsBooking.totalPages}
                            pageSize={!!doctorsBooking && doctorsBooking.size}
                            currentPage={!!doctorsBooking && doctorsBooking.number}
                            onClickPage={onClickPage}
                        ></Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailHospital;
