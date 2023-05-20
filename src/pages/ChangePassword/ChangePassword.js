import { faLock } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import InputBooking from '~/components/helper/InputBooking';
import LinkToPage from '~/components/helper/LinkToPage';
import styles from './ChangePassword.module.scss';
const cx = classNames.bind(styles);

function ChangePassword({ form, onSubmit, validateMSG }) {
    return (
        <div className={cx('wrapper')}>
            <LinkToPage title={'Đổi mật khẩu'}></LinkToPage>

            <div className={cx('content')}>
                <div className={cx('wrapper-form')}>
                    <div className={cx('info-book-wrapper-input')}>
                        <p className={cx('title')}>{'Mật khẩu mới'}</p>
                        <InputBooking
                            placeholder={'Mật khẩu mới'}
                            icon={faLock}
                            ref={form.password}
                            type={'password'}
                        ></InputBooking>
                        {!!validateMSG && !!validateMSG.password && (
                            <p className={cx('error-msg')}>{validateMSG.password}</p>
                        )}

                        <br></br>
                        <p className={cx('title')}>Mật khẩu xác minh</p>
                        <InputBooking
                            placeholder={'Mật khẩu xác minh'}
                            icon={faLock}
                            ref={form.passwordConfirm}
                            type={'password'}
                        ></InputBooking>
                        {!!validateMSG && !!validateMSG.passwordConfirm && (
                            <p className={cx('error-msg')}>{validateMSG.passwordConfirm}</p>
                        )}
                        <br></br>

                        <button className={cx('info-book-btn')} onClick={onSubmit}>
                            Đổi mật khẩu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
