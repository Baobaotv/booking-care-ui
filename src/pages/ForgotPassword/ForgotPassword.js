import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config/config';

const cx = classNames.bind(styles);
function ForgotPassword({ username, setUserName, email, setEmail, validateMSG, actionReset }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <header className={cx('content-header')}>
                    <h2 className={cx('header-title', 'header-title-success')}>{'Quên mật khẩu'}</h2>
                    <span>{'BookingCare cảm ơn quý khách đã tin tưởng và lựa chọn dịch vụ của chúng tôi'}</span>
                    <hr></hr>
                </header>
                <div className={cx('forgot-form')}>
                    <div className={cx('forgot-form-row')}>
                        <p className={cx('forgot-form-title')}>Tên đăng nhập</p>
                        <input
                            type={'text'}
                            placeholder={'Tên đăng nhập'}
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        {!!validateMSG && !!validateMSG.username && (
                            <p className={cx('error-msg')}>{validateMSG.username}</p>
                        )}
                    </div>
                    <div className={cx('forgot-form-row')}>
                        <p className={cx('forgot-form-title')}>Email xác minh</p>
                        <input
                            type={'text'}
                            placeholder={'Email'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {!!validateMSG && !!validateMSG.email && <p className={cx('error-msg')}>{validateMSG.email}</p>}
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

export default ForgotPassword;
