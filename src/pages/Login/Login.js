import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login({ type, actionSignIn, actionSignup }) {
    const [account, setAccount] = useState(type);

    return (
        <div className={cx('wrapper-a')}>
            <div className={cx('wrapper')}>
                <div className={cx('account-information')}>
                    <div className={cx('account-information-content')}>
                        <h3 className={cx('account-title')}>Đăng nhập vào Bookingcare</h3>
                        <p className={cx('account-desc')}>
                            Chăm sóc sức khỏe ngày hôm nay cho tôi hy vọng tươi sáng hơn vào ngày mai
                        </p>
                        <div className={cx('account-information-form')}>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Tài khoản</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Tài khoản của bạn"
                                    id="usernameLogin"
                                ></input>
                            </div>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Mật khẩu</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Mật khẩu của bạn"
                                    type="password"
                                    id="passwordLogin"
                                    onKeyUp={(e) => {
                                        if (e.key === 'Enter' || e.keyCode === 13) {
                                            actionSignIn();
                                            e.target.value = '';
                                        }
                                    }}
                                ></input>
                            </div>
                            <div className={cx('account-info-action-more')}>
                                <Link to={config.routes.forgotPassword}>Quên mật khẩu</Link>
                            </div>
                        </div>
                        <button className={cx('account-info-btn')} onClick={actionSignIn}>
                            Đăng nhập
                        </button>
                    </div>
                </div>
                <div className={cx('account-information')}>
                    <div className={cx('account-information-content')}>
                        <h3 className={cx('account-title')}>Đăng nhập vào Bookingcare</h3>
                        <p className={cx('account-desc')}>
                            Chăm sóc sức khỏe ngày hôm nay cho tôi hy vọng tươi sáng hơn vào ngày mai
                        </p>
                        <div className={cx('account-information-form')}>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Họ và tên</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Họ và tên"
                                    id="fullNameSignUp"
                                ></input>
                            </div>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Email</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Nhập email của bạn"
                                    type="password"
                                    id="emailSignUp"
                                ></input>
                            </div>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Số điện thoại</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Nhập số điện thoại của bạn"
                                    id="phoneSignUp"
                                ></input>
                            </div>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Mật khẩu</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Nhập mật khẩu"
                                    type="password"
                                    id="passwordSignUp"
                                ></input>
                            </div>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Xác nhận mật khẩu</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Xác nhận mật khẩu"
                                    type="password"
                                ></input>
                            </div>
                            <div className={cx('account-info-action-more')}>
                                <Link to={config.routes.forgotPassword}>Quên mật khẩu</Link>
                            </div>
                        </div>
                        <button className={cx('account-info-btn')}>Đăng kí</button>
                    </div>
                </div>
            </div>
            <div
                className={cx('background-img', account)}
                id={'background-img'}
                style={{
                    backgroundImage: `url(${images.loginBackground})`,
                }}
            >
                {account === 'login' ? (
                    <div className={cx('introduce-action')}>
                        <p className={cx('introduce-title')}>
                            Đăng nhập để trải nghiệm những dịch vụ tốt nhất từ BookingCare
                        </p>
                        <p className={cx('introduce-content')}>Hãy đăng kí nếu bạn chưa có tài khoản đăng nhập</p>
                        <button
                            className={cx('account-info-btn', 'introduce-btn')}
                            onClick={() => setAccount('register')}
                        >
                            <FontAwesomeIcon icon={faArrowLeftLong} className={cx('introduce-icon')}></FontAwesomeIcon>
                            Đăng kí
                        </button>
                    </div>
                ) : (
                    <div className={cx('introduce-action')}>
                        <p className={cx('introduce-title')}>BookingCare xin chào bạn</p>
                        <p className={cx('introduce-content')}>Nếu bạn đã có tài khoản hãy đăng nhập ở đây</p>
                        <button className={cx('account-info-btn', 'introduce-btn')} onClick={() => setAccount('login')}>
                            Đăng nhập
                            <FontAwesomeIcon icon={faArrowRightLong} className={cx('introduce-icon')}></FontAwesomeIcon>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
