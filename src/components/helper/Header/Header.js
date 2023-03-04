import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import PageSwitchItem from './PageSwitchItem';
import config from '~/config/config';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('header_nav')}>
                    <div className={cx('icon-bar')}>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </div>
                    <a href="/home" className={cx('header_nav-logo')}>
                        {' '}
                        <img src={images.logo} alt="logo" />
                    </a>

                    <div className={cx('header_nav-list', 'hide-on-tablet-mobile')}>
                        <PageSwitchItem
                            to={'/chuyen-khoa'}
                            title={'Chuyên Khoa'}
                            description={'Tìm bác sĩ theo chuyên khoa'}
                        ></PageSwitchItem>
                        <PageSwitchItem
                            to={config.routes.hospital}
                            title={'Cơ Sở Y Tế'}
                            description={'Chọn bệnh viện phòng khám'}
                        ></PageSwitchItem>
                        <PageSwitchItem
                            to={'/bac-si'}
                            title={'Bác Sĩ'}
                            description={'Chọn bác sĩ giỏi'}
                        ></PageSwitchItem>
                        <PageSwitchItem
                            to={config.routes.handbook}
                            title={'Cẩm nang'}
                            description={'Khám sức khỏe tổng quát'}
                        ></PageSwitchItem>
                    </div>

                    <div className={cx('header_nav_login')}>
                        {/* Start Case User login is fail */}
                        <div className={cx('login-list')}>
                            <a href="/login" className={cx('login-item', 'js-dangNhap')}>
                                Đăng Nhập
                            </a>{' '}
                            <a href="/register" className={cx('login-item', 'js-dangKy')}>
                                Đăng Ký
                            </a>
                        </div>
                        {/* END Case User login is fail */}

                        {/* Start Case User login is success */}
                        {/* <div className={cx('login-list')}>
                            <a href="/home" className={cx('login-item', 'js-dangNhap')} id="test">
                                Full Name
                            </a>
                            <input type="hidden" id="idUser" />
                            <a href="/logout" className={cx('login-item', 'js-dangKy')}>
                                Đăng xuất
                            </a>
                        </div> */}
                        {/* Start Case ROLE User : login */}
                        <div className={cx('update__Thongtin')}>
                            <ul className={cx('list__thongtin')}>
                                <li className={cx('thongtin__item')}>
                                    <a href="/updateProfile">Cập Nhật Thông Tin</a>
                                </li>
                                <li className={cx('thongtin__item')}>
                                    <a href="/showMedical">Xem Lịch Khám</a>
                                </li>
                                <li className={cx('thongtin__item')}>
                                    <a href="/myMessage">Tin nhắn</a>
                                </li>
                            </ul>
                        </div>
                        {/* Start Case ROLE User : login */}

                        {/* Start Case ROLE Admin : login */}
                        <div className={cx('update__Thongtin')}>
                            <ul className={cx('list__thongtin')}>
                                <li className={cx('thongtin__item')}>
                                    <a href="/admin/home">Chuyển tới giao diện admin</a>
                                    <a href="/doctor/home">Chuyển tới giao diện doctor</a>
                                </li>
                            </ul>
                        </div>
                        {/* END Case ROLE Admin : login */}
                        {/* END Case User login is success */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
