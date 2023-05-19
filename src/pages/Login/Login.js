import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login({
    type,
    actionSignIn,
    actionSignup,
    fullName,
    setFullName,
    phone,
    setPhone,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    email,
    setEmail,
    userName,
    setUserName,
    validateMSG,
}) {
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
                        <h3 className={cx('account-title')}>Đăng kí vào Bookingcare</h3>
                        <p className={cx('account-desc')}>
                            Chăm sóc sức khỏe ngày hôm nay cho tôi hy vọng tươi sáng hơn vào ngày mai
                        </p>
                        <div className={cx('account-information-form')}>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Họ và tên</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Họ và tên"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    id="fullNameSignUp"
                                ></input>
                                {!!validateMSG && !!validateMSG.fullName && (
                                    <p className={cx('error-msg')}>{validateMSG.fullName}</p>
                                )}
                            </div>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Email</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Nhập email của bạn"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="emailSignUp"
                                ></input>
                                {!!validateMSG && !!validateMSG.email && (
                                    <p className={cx('error-msg')}>{validateMSG.email}</p>
                                )}
                            </div>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Số điện thoại</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Nhập số điện thoại của bạn"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    id="phoneSignUp"
                                ></input>
                                {!!validateMSG && !!validateMSG.phone && (
                                    <p className={cx('error-msg')}>{validateMSG.phone}</p>
                                )}
                            </div>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Tên đăng nhập</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Nhập tên đăng nhập của bạn"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                ></input>
                                {!!validateMSG && !!validateMSG.userName && (
                                    <p className={cx('error-msg')}>{validateMSG.userName}</p>
                                )}
                            </div>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Mật khẩu</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Nhập mật khẩu"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="passwordSignUp"
                                ></input>
                                {!!validateMSG && !!validateMSG.password && (
                                    <p className={cx('error-msg')}>{validateMSG.password}</p>
                                )}
                            </div>
                            <div className={cx('account-info-input')}>
                                <label className={cx('account-info-title')}>Xác nhận mật khẩu</label>
                                <input
                                    className={cx('account-info-input-input')}
                                    placeholder="Xác nhận mật khẩu"
                                    type="password"
                                    value={passwordConfirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                ></input>
                                {!!validateMSG && !!validateMSG.passwordConfirm && (
                                    <p className={cx('error-msg')}>{validateMSG.passwordConfirm}</p>
                                )}
                            </div>
                            <div className={cx('account-info-action-more')}>
                                <Link to={config.routes.forgotPassword}>Quên mật khẩu</Link>
                            </div>
                        </div>
                        <button className={cx('account-info-btn')} onClick={actionSignup}>
                            Đăng kí
                        </button>
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
