import classNames from 'classnames/bind';
import styles from './PaymentResponse.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config/config';

const cx = classNames.bind(styles);
function PaymentResponse({ paymentResponse, statusPayment, messagePayment }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <header className={cx('content-header')}>
                    {statusPayment === config.constant.payment_paid ? (
                        <>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className={cx('header-icon', 'header-icon-success')}
                            ></FontAwesomeIcon>
                            <h2 className={cx('header-title', 'header-title-success')}>{'Giao dịch thành công'}</h2>
                            <span>{'BookingCare cảm ơn quý khách đã tin tưởng và lựa chọn dịch vụ của chúng tôi'}</span>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                className={cx('header-icon', 'header-icon-error')}
                            ></FontAwesomeIcon>
                            <h2 className={cx('header-title', 'header-title-error')}>{'Giao dịch thất bại'}</h2>
                            <span>{'BookingCare cảm ơn quý khách đã tin tưởng và lựa chọn dịch vụ của chúng tôi'}</span>
                        </>
                    )}

                    <hr></hr>
                </header>
                <div className={cx('payment-info')}>
                    {statusPayment === config.constant.payment_paid ? (
                        <>
                            <p className={cx('payment-info-title')}>Thông tin giao dich</p>
                            <div className={cx('payment-info-row')}>
                                <span className={cx('payment-info-row-title')}>Mã giao dịch</span>
                                <span className={cx('payment-info-row-valuw')}>
                                    {!!paymentResponse ? paymentResponse.vnpTxnRef : ''}
                                </span>
                            </div>
                            <div className={cx('payment-info-row')}>
                                <span className={cx('payment-info-row-title')}>Số tiền thanh toán</span>
                                <span className={cx('payment-info-row-valuw')}>
                                    {!!paymentResponse ? paymentResponse.vnpAmount : ''}
                                </span>
                            </div>

                            <div className={cx('payment-info-row')}>
                                <span className={cx('payment-info-row-title')}>Đơn vị tiền tệ</span>
                                <span className={cx('payment-info-row-valuw')}>VND</span>
                            </div>

                            <div className={cx('payment-info-row')}>
                                <span className={cx('payment-info-row-title')}>Ngân hàng</span>
                                <span className={cx('payment-info-row-valuw')}>
                                    {!!paymentResponse ? paymentResponse.vnpBankCode : ''}
                                </span>
                            </div>

                            <div className={cx('payment-info-row')}>
                                <span className={cx('payment-info-row-title')}>Thông tin giao dịch</span>
                                <span className={cx('payment-info-row-valuw')}>
                                    {!!paymentResponse ? paymentResponse.vnpOrderInfo : ''}
                                </span>
                            </div>

                            <div className={cx('payment-info-row')}>
                                <span className={cx('payment-info-row-title')}>Ngày khám bệnh</span>
                                <span className={cx('payment-info-row-valuw')}>
                                    {!!paymentResponse ? paymentResponse.medicalExaminationSchedule.date : ''}
                                </span>
                            </div>
                        </>
                    ) : (
                        <p className={cx('payment-info-title')}>{messagePayment}</p>
                    )}
                </div>
                <div className={cx('payment-redirect')}>
                    <Link to={config.routes.home} className={cx('payment-btn')}>
                        {'Trở về trang chủ'}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PaymentResponse;
