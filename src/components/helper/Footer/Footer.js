import { faCheck, faLocationDot, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('footer-information')}>
                        <div className={cx('footer-information-company')}>
                            <Link to={'/'} className={cx('information-link')}>
                                <img src={images.logo} alt="" className={cx('footer__img')} />
                            </Link>
                            <div className={cx('information_content')}>
                                <h2>Công ty Cổ phần Công nghệ BookingCare</h2>
                                <p>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faLocationDot}
                                            className={cx('content-icon')}
                                        ></FontAwesomeIcon>
                                    </span>
                                    28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
                                </p>
                                <p>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className={cx('content-icon')}
                                        ></FontAwesomeIcon>
                                    </span>
                                    ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                                </p>
                            </div>

                            <div className={cx('information_content_img')}>
                                <img src={images.boCongThuong} alt="Bo cong thuong" />
                                <img src={images.boCongThuong} alt="Bo cong thuong" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer-selector')}>
                        <div className={cx('wrapper')}>
                            <ul className={cx('footer2__list')}>
                                <li className={cx('footer2-item')}>
                                    <Link to={'/'}> Liên Hệ Hợp tác</Link>
                                </li>
                                <li className={cx('footer2-item')}>
                                    <Link to={'/'}> Câu hỏi thường gặp </Link>
                                </li>
                                <li className={cx('footer2-item')}>
                                    <Link to={'/khieu-nai'}> Điều khoản sử dụng</Link>
                                </li>
                                <li className={cx('footer2-item')}>
                                    <Link to={'/dieu-khoan'}> Chính sách Bảo mật </Link>
                                </li>
                                <li className={cx('footer2-item')}>
                                    <Link to={'/'}> Quy trình hỗ trợ giả quyết khiếu nại</Link>
                                </li>
                                <li className={cx('footer2-item')}>
                                    <Link to={'/'}> Quy chế hạot động</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={cx('footer-address')}>
                        <div className={cx('footer3')}>
                            <div className={cx('footer3__text')}>
                                <h2 className={cx('footer3__headinding')}>Trụ Sở Tại Hà Nội </h2>
                                <p className={cx('footer3__des')}> 28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                            </div>

                            <div className={cx('footer3__text')}>
                                <h2 className={cx('footer3__headinding')}>Văn phòng tại TP Hồ Chí Minh </h2>
                                <p className={cx('footer3__des')}> 6/6 Cách Mạch Tháng Tám, P. Bến Thành, Quận 1</p>
                            </div>

                            <div className={cx('footer3__text')}>
                                <h2 className={cx('footer3__headinding')}>Hỗ trợ khách hàng </h2>
                                <p className={cx('footer3__des')}> support@bookingcare.vn (7h - 18h)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('footer__bottom')}>
                    <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                    <p className={cx('footer__bottom-install')}>
                        Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng:
                        <Link to={'https://play.google.com/store/apps/details?id=vn.bookingcare.bookingcare'}>
                            {'  Android-'}
                        </Link>
                        <Link to={'https://apps.apple.com/vn/app/bookingcare/id1347700144'}>Iphone/ Ipad-</Link>
                        <Link to={'/'}>Khác</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
