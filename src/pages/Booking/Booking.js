import { faCalendarAlt, faCirclePlus, faLocationDot, faPhone, faUserPen } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import InputBooking from '~/components/helper/InputBooking';
import styles from './Booking.module.scss';
const cx = classNames.bind(styles);

function Booking({
    user,
    workTime,
    date,
    form,
    typeCheckHealth,
    onChangeCheckHealth,
    onSubmit,
    validateMSG,
    typePersonSchedule,
    onChangePersonSchedule,
    typeSex,
    onChangeSex,
    typePay,
    onChangeTypePay,
}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-doctor')}>
                <div className={cx('wrapper-content')}>
                    <div className={cx('info-doctor-content')}>
                        <div className={cx('info-doctor-avatar')}>
                            <img src={!!user ? user.img : images.avatarDefault} alt={'doctor-avatar'}></img>
                        </div>
                        <div className={cx('info-doctor-description')}>
                            <h1 className={cx('info-doctor-title')}>Đặt lịch khám</h1>
                            <h2 className={cx('info-doctor-name')}>Bác sĩ: {!!user ? user.name : ''}</h2>
                            <span className={cx('info-doctor-time-book')}>
                                Ca khám - {!!workTime && workTime.time} - Ngày - {date}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('info-book-schedule')}>
                <div className={cx('wrapper-content')}>
                    <div>
                        <label className={cx('info-book-cost')}>
                            <input type="radio" checked="checked" name="price" value="54" readOnly />
                            <span>Giá khám</span>
                            <div>
                                {!!user &&
                                    user.examinationPrice.toLocaleString('it-IT', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                            </div>
                            <input type={'hidden'} ref={form.current.amount} value={!!user && user.examinationPrice} />
                        </label>
                    </div>
                    <div className={cx('info-book-select-audience')}>
                        <div className={cx('info-book-for-me')}>
                            <input
                                type={'radio'}
                                name="audience"
                                checked={typePersonSchedule === 'forMe'}
                                onChange={() => onChangePersonSchedule('forMe')}
                            ></input>
                            <label>Đặt cho mình</label>
                        </div>
                        <div className={cx('info-book-for-other')}>
                            <input
                                type={'radio'}
                                name="audience"
                                checked={typePersonSchedule === 'forPatient'}
                                onChange={() => onChangePersonSchedule('forPatient')}
                            ></input>
                            <label>Đặt cho người thân</label>
                        </div>
                    </div>
                    {typePersonSchedule === 'forPatient' && (
                        <>
                            <p className={cx('title-info')}>{'Thông tin người đặt lịch'}</p>
                            <div className={cx('info-book-wrapper-input')}>
                                <InputBooking
                                    placeholder={'Họ và tên người đặt lịch'}
                                    icon={faUserPen}
                                    ref={form.current.nameScheduler}
                                ></InputBooking>
                                {!!validateMSG && !!validateMSG.nameScheduler && (
                                    <p className={cx('error-msg')}>{validateMSG.nameScheduler}</p>
                                )}

                                <div className={cx('info-book-patient-input-note')}>
                                    Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú
                                </div>
                            </div>
                            <div className={cx('info-book-wrapper-input')}>
                                <InputBooking
                                    placeholder={'Số điện thoại người đặt lịch'}
                                    icon={faUserPen}
                                    ref={form.current.phoneScheduer}
                                ></InputBooking>
                                {!!validateMSG && !!validateMSG.phoneScheduer && (
                                    <p className={cx('error-msg')}>{validateMSG.phoneScheduer}</p>
                                )}
                            </div>
                        </>
                    )}
                    <div className={cx('info-book-wrapper-input')}>
                        <p className={cx('title-info')}>{'Thông tin bệnh nhân'}</p>
                        <InputBooking
                            placeholder={'Họ và tên bệnh nhân'}
                            icon={faUserPen}
                            ref={form.current.namePatient}
                        ></InputBooking>
                        {!!validateMSG && !!validateMSG.namePatient && (
                            <p className={cx('error-msg')}>{validateMSG.namePatient}</p>
                        )}

                        <div className={cx('info-book-patient-input-note')}>
                            Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú
                        </div>
                    </div>
                    <div className={cx('info-book-select-audience')}>
                        <div className={cx('info-book-for-me')}>
                            <input
                                type={'radio'}
                                name="gender"
                                checked={typeSex === 'Nam'}
                                onChange={() => onChangeSex('Nam')}
                            ></input>
                            <label>Nam</label>
                        </div>
                        <div className={cx('info-book-for-other')}>
                            <input
                                type={'radio'}
                                name="gender"
                                checked={typeSex === 'Nu'}
                                onChange={() => onChangeSex('Nu')}
                            ></input>
                            <label>Nữ</label>
                        </div>
                    </div>
                    <div className={cx('info-book-wrapper-input')}>
                        <InputBooking
                            placeholder={'Số điện thoại liên hệ'}
                            icon={faPhone}
                            ref={form.current.phonePatient}
                        ></InputBooking>
                        {!!validateMSG && !!validateMSG.phonePatient && (
                            <p className={cx('error-msg')}>{validateMSG.phonePatient}</p>
                        )}
                    </div>
                    <div className={cx('info-book-wrapper-input')}>
                        <InputBooking
                            placeholder={'Năm sinh'}
                            icon={faCalendarAlt}
                            ref={form.current.yearOfBirth}
                        ></InputBooking>
                        {!!validateMSG && !!validateMSG.yearOfBirth && (
                            <p className={cx('error-msg')}>{validateMSG.yearOfBirth}</p>
                        )}
                    </div>
                    {/* <div className={cx('info-book-wrapper-input')}>
                        <InputBooking placeholder={'Tỉnh thành'} icon={faLocationDot} ></InputBooking>
                    </div>
                    <div className={cx('info-book-wrapper-input')}>
                        <InputBooking placeholder={'Quận huyện'} icon={faLocationDot}></InputBooking>
                    </div> */}
                    <div className={cx('info-book-wrapper-input')}>
                        <InputBooking
                            placeholder={'Địa chỉ'}
                            icon={faLocationDot}
                            ref={form.current.location}
                        ></InputBooking>
                        {!!validateMSG && !!validateMSG.location && (
                            <p className={cx('error-msg')}>{validateMSG.location}</p>
                        )}
                    </div>
                    <div className={cx('info-book-wrapper-input')}>
                        <InputBooking
                            placeholder={'Ly do khám'}
                            icon={faCirclePlus}
                            type={'textarea'}
                            ref={form.current.reason}
                        ></InputBooking>
                        {!!validateMSG && !!validateMSG.reason && (
                            <p className={cx('error-msg')}>{validateMSG.reason}</p>
                        )}
                    </div>
                    <div className={cx('info-book-payment')}>
                        <p className={cx('info-book-payment-title')}>Hình thức khám bệnh</p>
                        <div className={cx('info-book-select-audience')}>
                            <div className={cx('info-book-for-me')}>
                                <input
                                    type={'radio'}
                                    name="checkHealth"
                                    checked={typeCheckHealth === 'off'}
                                    onChange={() => onChangeCheckHealth('off')}
                                ></input>
                                <label>Khám tại cơ sở y tế</label>
                            </div>
                            <div className={cx('info-book-for-other')}>
                                <input
                                    type={'radio'}
                                    name="checkHealth"
                                    checked={typeCheckHealth === 'on'}
                                    onChange={() => {
                                        onChangeCheckHealth('on');
                                        onChangeTypePay('ON');
                                    }}
                                ></input>
                                <label>Khám qua video</label>
                            </div>
                        </div>
                    </div>
                    <div className={cx('info-book-payment')}>
                        <p className={cx('info-book-payment-title')}>Hình thức thanh toán</p>
                        <div className={cx('info-book-select-audience')}>
                            {typeCheckHealth === 'off' && (
                                <div className={cx('info-book-for-me')}>
                                    <input
                                        type={'radio'}
                                        name="payment"
                                        checked={typePay === 'OFF'}
                                        onChange={() => onChangeTypePay('OFF')}
                                    ></input>
                                    <label>Thanh toán tại cơ sở y tế</label>
                                </div>
                            )}
                            <div className={cx('info-book-for-other')}>
                                <input
                                    type={'radio'}
                                    name="payment"
                                    checked={typePay === 'ON'}
                                    onChange={() => onChangeTypePay('ON')}
                                ></input>
                                <label>Thanh toán online</label>
                            </div>
                        </div>
                    </div>
                    <div className={cx('info-book-payment-content')}>
                        <div className={cx('info-book-price-medical')}>
                            <p>Giá khám</p>
                            <p>300.000 đ</p>
                        </div>
                        <div className={cx('info-book-price-book')}>
                            <p>Phí đặt lịch</p>
                            <p>Miễn phí</p>
                        </div>
                        <hr></hr>
                        <div className={cx('info-book-total-price')}>
                            <p>Tổng cộng</p>
                            <p>300.000 đ</p>
                        </div>
                    </div>
                    <p className={cx('info-book-note')}>
                        Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời gian làm thủ tục khám
                    </p>
                    <div className={cx('info-book-warning')}>
                        <p className={cx('info-book-warning-title')}>Lưu ý</p>
                        <p>
                            Thông tin anh/chị cung cấp sẽ được sử dụng làm hồ sơ khám bệnh, khi điền thông tin anh/chị
                            vui lòng:
                        </p>
                        <ul>
                            <li>
                                Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên, ví dụ:<b> Trần Văn Phú&nbsp;</b>
                            </li>
                            <li>Điền đầy đủ, đúng và vui lòng kiểm tra lại thông tin trước khi ấn "Xác nhận"</li>
                        </ul>
                    </div>

                    <button className={cx('info-book-btn')} onClick={onSubmit}>
                        Xác nhận đặt lịch khám
                    </button>

                    <p className={cx('terms-of-use')}>
                        Bằng việc xác nhận đặt khám, bạn đã hoàn toàn đồng ý với
                        <Link to="/"> Điều khoản sử dụng </Link>
                        dịch vụ của chúng tôi.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Booking;
