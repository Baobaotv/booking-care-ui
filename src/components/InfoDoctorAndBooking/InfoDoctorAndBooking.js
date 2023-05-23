import { faCalendarDays, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import images from '~/assets/images';
import ButtonBooking from '../helper/ButtonBooking';
import styles from './InfoDoctorAndBooking.module.scss';
import workTimeService from '~/service/WorkTimeService';
import util from '~/Util';
const cx = classNames.bind(styles);

function InfoDoctorAndBooking({ data }) {
    const [date, setDate] = useState(util.formatDate(new Date()));
    const [worTimeOfDoctor, setWorTimeOfDoctor] = useState([]);
    const doctorId = data.id;

    useEffect(() => {
        if (!data) return;
        const getAllWorkTimeByDoctorIdAndDate = async (doctorId, date) => {
            const result = await workTimeService.getAllTimeOfDoctorByDate(doctorId, date).then((response) => response);
            setWorTimeOfDoctor(result);
        };
        getAllWorkTimeByDoctorIdAndDate(doctorId, date);
    }, [date]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-doctor')}>
                <div className={cx('info-doctor-avatar')}>
                    <img src={data.img || images.doctorAvatar} alt={'avatar-doctor'} />
                </div>
                <div className={cx('info-doctor-content')}>
                    <span className={cx('info-doctor-name')}>{data.name}</span>
                    <div className={cx('info-doctor-short-description')}>
                        <p dangerouslySetInnerHTML={{ __html: data.shortDescription }}></p>
                    </div>
                </div>
            </div>
            <div className={cx('hospital-booking')}>
                <div className={cx('hospital-booking-wrapper-time')}>
                    <input
                        type="date"
                        id="date"
                        className={cx('hospital-booking-time')}
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    />
                </div>
                <p className={cx('hospital-booking-time-title')}>
                    <FontAwesomeIcon
                        className={cx('hospital-booking-time-icon')}
                        icon={faCalendarDays}
                    ></FontAwesomeIcon>
                    Lịch Khám
                </p>
                <div className={cx('hospital-booking-action')}>
                    {!!worTimeOfDoctor
                        ? worTimeOfDoctor.map((item, index) => {
                              return (
                                  <ButtonBooking
                                      title={item.name + '(' + item.time + ')'}
                                      key={index}
                                      date={date}
                                      doctorId={data.id}
                                      workTimeId={item.id}
                                      isFree={true}
                                  ></ButtonBooking>
                              );
                          })
                        : data.lstWorkTime.map((item, index) => {
                              return (
                                  <ButtonBooking
                                      title={item.name + '(' + item.time + ')'}
                                      key={index}
                                      date={date}
                                      doctorId={data.id}
                                      workTimeId={item.id}
                                      isFree={true}
                                  ></ButtonBooking>
                              );
                          })}
                </div>
                <div className={cx('hospital-booking-action-tutorial')}>
                    <p>
                        Chọn
                        <FontAwesomeIcon
                            className={cx('hospital-booking-action-icon-select')}
                            icon={faHandPointUp}
                        ></FontAwesomeIcon>
                        và đăng kí đặt lịch (phí đặt lịch 0đ)
                    </p>
                </div>
                <div className={cx('hospital-info')}>
                    <div className={cx('hospital-info-address')}>
                        <p>Địa chỉ khám</p>
                        <span>{data.hospitalLocation}</span>
                    </div>
                    <div className={cx('hospital-info-cost')}>
                        <p> Giá khám: </p>
                        <span>800.000Đ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoDoctorAndBooking;
