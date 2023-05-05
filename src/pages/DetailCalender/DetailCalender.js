import classNames from 'classnames/bind';
import LinkToPage from '~/components/helper/LinkToPage';
import styles from './DetailCalender.module.scss';

const cx = classNames.bind(styles);
function DetailCalender({ medical }) {
    return (
        <div className={cx('wrapper')}>
            <LinkToPage title={'Thông tin ca khám'}></LinkToPage>
            <div className={cx('content')}>
                <div className={cx('calender-info')}>
                    <p className={cx('title')}> {'Thông tin ca khám'}</p>
                    {!!medical ? (
                        <table>
                            <thead className={cx('header-table')}>
                                <tr>
                                    <td className={cx('table-title')}>{'Thông tin'}</td>
                                    <td className={cx('table-content')}>{'Nội dung'}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={cx('table-title')}>{'Ngày khám'}</td>
                                    <td className={cx('table-content')}>{medical.date}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Ca khám'}</td>
                                    <td className={cx('table-content')}>{medical.wordTimeTime}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Chuyên khoa'}</td>
                                    <td className={cx('table-content')}>{medical.doctor.specializedName}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Bác sĩ khám'}</td>
                                    <td className={cx('table-content')}>{medical.doctor.name}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Số điện thoại bác sĩ'}</td>
                                    <td className={cx('table-content')}>{medical.doctor.phone}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Hình thức khám'}</td>
                                    <td className={cx('table-content')}>
                                        {medical.type === 'on' ? 'Khám trực tuyến' : 'Khám tại cơ sở'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Bệnh viện khám'}</td>
                                    <td className={cx('table-content')}>{medical.hospitalName}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Trạng thái ca khám'}</td>
                                    <td className={cx('table-content')}>
                                        {medical.status === 1
                                            ? 'Chờ khám'
                                            : medical.status === 2
                                            ? 'Đã khám'
                                            : 'Đã huỷ'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Thanh toán'}</td>
                                    <td className={cx('table-content')}>
                                        {medical.statusPayment === 1 ? 'Đã thanh toán' : 'Chưa thanh toán'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Lý do khám'}</td>
                                    <td className={cx('table-content')}>{medical.reason}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Tên bệnh nhân'}</td>
                                    <td className={cx('table-content')}>{medical.namePatient}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Số điện thoại bệnh nhân'}</td>
                                    <td className={cx('table-content')}>{medical.phonePatient}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Tên người đặt lịch'}</td>
                                    <td className={cx('table-content')}>{medical.nameScheduler}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Số điện thoại người đặt lịch'}</td>
                                    <td className={cx('table-content')}>{medical.phoneScheduer}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Giới tính'}</td>
                                    <td className={cx('table-content')}>{medical.sex}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'Năm sinh'}</td>
                                    <td className={cx('table-content')}>{medical.yearOfBirth}</td>
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <p>{'Không tìm thấy ca khám phù hợp'}</p>
                    )}
                </div>

                {!!medical && !!medical.payment ? (
                    <div className={cx('payment-info')}>
                        <p className={cx('title')}> {'Thông tin hoá đơn'}</p>
                        <table>
                            <thead className={cx('header-table')}>
                                <tr>
                                    <td className={cx('table-title')}>{'Thông tin'}</td>
                                    <td className={cx('table-content')}>{'Nội dung'}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={cx('table-title')}>{'Ngày tạo'}</td>
                                    <td className={cx('table-content')}>{medical.payment.createdDate}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'vnp_amount'}</td>
                                    <td className={cx('table-content')}>{medical.payment.vnpAmount}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'vnp_bank_code'}</td>
                                    <td className={cx('table-content')}>{medical.payment.vnpBankCode}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'vnp_bank_tran_no'}</td>
                                    <td className={cx('table-content')}>{medical.payment.vnpBankTranNo}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'vnp_card_type'}</td>
                                    <td className={cx('table-content')}>{medical.payment.vnpCardType}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'vnp_order_info'}</td>
                                    <td className={cx('table-content')}>{medical.payment.vnpOrderInfo}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'vnp_pay_date'}</td>
                                    <td className={cx('table-content')}>{medical.payment.vnpPayDate}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'vnp_response_code'}</td>
                                    <td className={cx('table-content')}>{medical.payment.vnpResponseCode}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'vnp_tmn_code'}</td>
                                    <td className={cx('table-content')}>{medical.payment.vnpTmnCode}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'vnp_transaction_no'}</td>
                                    <td className={cx('table-content')}>{medical.payment.vnpTransactionNo}</td>
                                </tr>
                                <tr>
                                    <td className={cx('table-title')}>{'vnp_txn_ref'}</td>
                                    <td className={cx('table-content')}>{medical.payment.vnpTxnRef}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default DetailCalender;
