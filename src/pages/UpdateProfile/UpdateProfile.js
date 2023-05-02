import { faEnvelope, faPhone, faUserPen } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import InputBooking from '~/components/helper/InputBooking';
import LinkToPage from '~/components/helper/LinkToPage';
import styles from './UpdateProfile.module.scss';
const cx = classNames.bind(styles);

function UpdateProfile({ form, img, onChangeImg, onSubmit, validateMSG }) {
    return (
        <div className={cx('wrapper')}>
            <LinkToPage title={'Cập nhập thông tin'}></LinkToPage>

            <div className={cx('content')}>
                <div className={cx('wrapper-avatar')}>
                    <img src={!!img ? img : images.avatarDefault} alt={'avatar-user'}></img>
                    <input type={'file'} ref={form.img} onInput={(e) => onChangeImg(e)} />
                </div>
                <div className={cx('wrapper-form')}>
                    <div className={cx('info-book-wrapper-input')}>
                        <p className={cx('title')}>{'Họ và tên'}</p>
                        <InputBooking placeholder={'Họ và tên '} icon={faUserPen} ref={form.fullName}></InputBooking>
                        {!!validateMSG && !!validateMSG.fullName && (
                            <p className={cx('error-msg')}>{validateMSG.fullName}</p>
                        )}
                        <div className={cx('info-book-patient-input-note')}>
                            Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú
                        </div>
                        <br></br>
                        <p className={cx('title')}>Email</p>
                        <InputBooking placeholder={'xxx@gmail.com'} icon={faEnvelope} ref={form.email}></InputBooking>
                        {!!validateMSG && !!validateMSG.email && <p className={cx('error-msg')}>{validateMSG.email}</p>}
                        <br></br>
                        <p className={cx('title')}>{'Số điện thoại'}</p>
                        <InputBooking placeholder={'Số điện thoại'} icon={faPhone} ref={form.phone}></InputBooking>
                        {!!validateMSG && !!validateMSG.phone && <p className={cx('error-msg')}>{validateMSG.phone}</p>}
                        <br></br>

                        <button className={cx('info-book-btn')} onClick={onSubmit}>
                            Xác nhận đặt lịch khám
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfile;
