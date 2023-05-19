import { faCalendar, faCancel, faCircleInfo, faCreditCard, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog } from '@headlessui/react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkToPage from '~/components/helper/LinkToPage';
import config from '~/config';
import styles from './MyCalender.module.scss';
const cx = classNames.bind(styles);

function MyCalender({ completes, waitings, cancelBooking }) {
    const [isOpen, setIsOpen] = useState(false);
    const [medicalId, setMedicalId] = useState();
    return (
        <div className={cx('wrapper')}>
            <LinkToPage title={'Danh sách ca khám'}></LinkToPage>
            <div className={cx('content')}>
                <div className={cx('calender-waiting')}>
                    <p className={cx('title')}>{'Ca khám đang đang chờ khám'}</p>
                    <div className={cx('table-content')}>
                        <table>
                            <thead className={cx('header-table')}>
                                <tr>
                                    <th>{'Thời gian khám'}</th>
                                    <th>{'Chuyên khoa'}</th>
                                    <th>{'Bác sĩ khám'}</th>
                                    <th>{'Hình thức khám'}</th>
                                    <th>{'Trạng thái thanh toán'}</th>
                                    <th>{'Thao tác'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!waitings && waitings.length > 0 ? (
                                    waitings.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.wordTimeTime + ' ' + item.date}</td>
                                                <td>{item.doctor.specializedName}</td>
                                                <td>{item.doctor.name}</td>
                                                <td>{item.type}</td>
                                                <td>
                                                    {item.statusPayment === 1 ? 'Đã thanh toán' : 'Chưa thanh toán'}
                                                </td>

                                                <td className={cx('td-action')}>
                                                    <Link
                                                        className={cx('link-action')}
                                                        to={config.routes.detailCalender + '?id=' + item.id}
                                                        title={'Chi tiết ca khám'}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCircleInfo}
                                                            className={cx('btn-action')}
                                                        ></FontAwesomeIcon>
                                                    </Link>
                                                    <Link
                                                        className={cx('link-action')}
                                                        to={config.routes.updateBooking + '?id=' + item.id}
                                                        title={'Cập nhật thông tin ca khám'}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faPenToSquare}
                                                            className={cx('btn-action')}
                                                        ></FontAwesomeIcon>
                                                    </Link>
                                                    <Link
                                                        className={cx('link-action')}
                                                        to={
                                                            config.routes.updateTimeBooking +
                                                            '?id=' +
                                                            item.id +
                                                            '&date=' +
                                                            item.date
                                                        }
                                                        title={'Thay đổi thời gian khám bệnh'}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCalendar}
                                                            className={cx('btn-action')}
                                                        ></FontAwesomeIcon>
                                                    </Link>

                                                    <FontAwesomeIcon
                                                        title={'Huỷ ca khám'}
                                                        icon={faCancel}
                                                        className={cx('btn-action')}
                                                        onClick={() => {
                                                            setMedicalId(item.id);
                                                            setIsOpen(true);
                                                        }}
                                                    ></FontAwesomeIcon>
                                                    {item.statusPayment !== 1 && (
                                                        <FontAwesomeIcon
                                                            title={'Thanh toán'}
                                                            icon={faCreditCard}
                                                            className={cx('btn-action')}
                                                            onClick={() => {
                                                                setMedicalId(item.id);
                                                                setIsOpen(true);
                                                            }}
                                                        ></FontAwesomeIcon>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr> Không có ca khám</tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={cx('calender-complete')}>
                    <p className={cx('title')}>{'Ca khám đã hoàn thành'}</p>
                    <div className={cx('table-content')}>
                        <table>
                            <thead className={cx('thead-dark')}>
                                <tr>
                                    <th>{'Thời gian khám'}</th>
                                    <th>{'Chuyên khoa'}</th>
                                    <th>{'Bác sĩ khám'}</th>
                                    <th>{'Hình thức khám'}</th>
                                    <th>{'Ngày đặt lịch khám'}</th>
                                    <th>{'Thao tác'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!completes && completes.length > 0 ? (
                                    completes.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.wordTimeTime + ' ' + item.date}</td>
                                                <td>{item.doctor.specializedName}</td>
                                                <td>{item.doctor.name}</td>
                                                <td>{item.type}</td>
                                                <td>{item.createdDate}</td>

                                                <td>
                                                    <Link
                                                        to={config.routes.detailCalender + '?id=' + item.id}
                                                        title={'Chi tiết ca khám'}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCircleInfo}
                                                            className={cx('btn-action')}
                                                        ></FontAwesomeIcon>
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr> Khong</tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={cx('wrapper-dialog')}>
                <Dialog.Panel>
                    <div className={cx('dialog-header')}>
                        <Dialog.Title className={cx('dialog-title')}>{'Thông báo'}</Dialog.Title>
                    </div>
                    <div className={cx('dialog-desc')}>
                        <Dialog.Description className={cx('dialog-desc-content')}>
                            {'Hệ thống BookingCare xin chân trọng thông báo'}
                        </Dialog.Description>
                    </div>

                    <div className={cx('dialog-content')}>
                        <p>
                            {
                                'Chúng tôi nhận thấy rằng bạn đang muốn HUỶ lịch khám, bạn có chắc chắn muốn HUỶ lịch khám chứ'
                            }
                        </p>
                    </div>

                    <div className={cx('dialog-action')}>
                        <button
                            className={cx('dialog-btn')}
                            onClick={() => {
                                setIsOpen(false);
                                cancelBooking(medicalId);
                            }}
                        >
                            {'Xác nhận'}
                        </button>
                        <button
                            className={cx('dialog-btn', 'btn-cancel')}
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            {'Huỷ'}
                        </button>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    );
}

export default MyCalender;
