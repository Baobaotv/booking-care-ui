import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config/config';

const cx = classNames.bind(styles);
function ResetPassword({ password, setPassword, passwordConfirm, setPasswordConfirm, validateMSG, actionReset }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <header className={cx('content-header')}>
                    <h2 className={cx('header-title', 'header-title-success')}>{'Reset mật khẩu'}</h2>
                    <span>{'BookingCare cảm ơn quý khách đã tin tưởng và lựa chọn dịch vụ của chúng tôi'}</span>
                    <hr></hr>
                </header>
                <div className={cx('forgot-form')}>
                    <div className={cx('forgot-form-row')}>
                        <p className={cx('forgot-form-title')}>Mật khẩu</p>
                        <input
                            type={'password'}
                            placeholder={'Mật khẩu'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {!!validateMSG && !!validateMSG.password && (
                            <p className={cx('error-msg')}>{validateMSG.password}</p>
                        )}
                    </div>
                    <div className={cx('forgot-form-row')}>
                        <p className={cx('forgot-form-title')}>Xác nhận mật khẩu</p>
                        <input
                            type={'password'}
                            placeholder={'Xác nhận mật khẩu'}
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        {!!validateMSG && !!validateMSG.passwordConfirm && (
                            <p className={cx('error-msg')}>{validateMSG.passwordConfirm}</p>
                        )}
                    </div>
                </div>
                <div className={cx('payment-redirect')}>
                    <button className={cx('payment-btn')} onClick={actionReset}>
                        {'Reset mật khẩu'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
