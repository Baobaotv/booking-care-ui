import { faCakeCandles, faCalendar, faCancel, faCircleInfo, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import LinkToPage from '~/components/helper/LinkToPage';
import styles from './MyCalender.module.scss';
const cx = classNames.bind(styles);

function MyCalender({ completes, waitings }) {
    console.log(completes);
    return (
        <div className={cx('wrapper')}>
            <LinkToPage title={'Danh sách ca khám'}></LinkToPage>
            <div className={cx('content')}>
                <div className={cx('calender-waiting')}>
                    <p className={cx('title')}>{'Ca khám đang đang chờ khám'}</p>
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
                                {!!waitings && waitings.length > 0 ? (
                                    waitings.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.wordTimeTime + ' ' + item.date}</td>
                                                <td>{item.doctor.specializedName}</td>
                                                <td>{item.doctor.name}</td>
                                                <td>{item.type}</td>
                                                <td>{item.createdDate}</td>

                                                <td>
                                                    <FontAwesomeIcon
                                                        icon={faCircleInfo}
                                                        className={cx('btn-action')}
                                                    ></FontAwesomeIcon>
                                                    <FontAwesomeIcon
                                                        icon={faPenToSquare}
                                                        className={cx('btn-action')}
                                                    ></FontAwesomeIcon>
                                                    <FontAwesomeIcon
                                                        icon={faCalendar}
                                                        className={cx('btn-action')}
                                                    ></FontAwesomeIcon>
                                                    <FontAwesomeIcon
                                                        icon={faCancel}
                                                        className={cx('btn-action')}
                                                    ></FontAwesomeIcon>
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
                                                    <FontAwesomeIcon
                                                        icon={faCircleInfo}
                                                        className={cx('btn-action')}
                                                    ></FontAwesomeIcon>
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
        </div>
    );
}

export default MyCalender;
