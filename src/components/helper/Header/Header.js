import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import PageSwitchItem from './PageSwitchItem';
import config from '~/config/config';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const userInfo = JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <header className={cx('header')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('header_nav')}>
                    <div className={cx('icon-bar')}>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </div>
                    <Link to="/" className={cx('header_nav-logo')}>
                        {' '}
                        <img src={images.logo} alt="logo" />
                    </Link>

                    <div className={cx('header_nav-list', 'hide-on-tablet-mobile')}>
                        <PageSwitchItem
                            to={config.routes.specialty}
                            title={'Chuyên Khoa'}
                            description={'Tìm bác sĩ theo chuyên khoa'}
                        ></PageSwitchItem>
                        <PageSwitchItem
                            to={config.routes.hospital}
                            title={'Cơ Sở Y Tế'}
                            description={'Chọn bệnh viện phòng khám'}
                        ></PageSwitchItem>
                        <PageSwitchItem
                            to={config.routes.doctor}
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
                        {!userInfo ? (
                            <div className={cx('login-list')}>
                                <Link to={config.routes.login} className={cx('login-item', 'js-dangNhap')}>
                                    Đăng Nhập
                                </Link>{' '}
                                <Link to={config.routes.register} className={cx('login-item', 'js-dangKy')}>
                                    Đăng Ký
                                </Link>
                            </div>
                        ) : (
                            <div className={cx('login-list')}>
                                <Link
                                    to={config.routes.home}
                                    className={cx('login-item', 'js-dangNhap', 'user-name')}
                                    id="test"
                                >
                                    {userInfo.username}
                                    {userInfo.roles.includes('ROLE_ADMIN') || userInfo.roles.includes('ROLE_DOCTOR') ? (
                                        <div className={cx('update__Thongtin')}>
                                            <ul className={cx('list__thongtin')}>
                                                <li className={cx('thongtin__item')}>
                                                    <Link to="/admin/home">Chuyển tới giao diện admin</Link>
                                                    <Link to="/doctor/home">Chuyển tới giao diện doctor</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <div className={cx('update__Thongtin')}>
                                            <ul className={cx('list__thongtin')}>
                                                <li className={cx('thongtin__item')}>
                                                    <Link to={config.routes.updateProfile}>Cập Nhật Thông Tin</Link>
                                                </li>
                                                <li className={cx('thongtin__item')}>
                                                    <Link to={config.routes.myCalender}>Xem Lịch Khám</Link>
                                                </li>
                                                <li className={cx('thongtin__item')}>
                                                    <Link to={config.routes.myMessage}>Tin nhắn</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </Link>
                                <input type="hidden" id="idUser" />
                                <button
                                    to={config.routes.login}
                                    className={cx('login-item', 'logout-btn')}
                                    onClick={() => handleLogout()}
                                >
                                    Đăng xuất
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
