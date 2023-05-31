import { faCalendarDays, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import images from '~/assets/images';
import BtnUpdateBooking from '~/components/helper/BtnUpdateBooking';
import styles from './InfoDoctorAndUpdateBooking.module.scss';
const cx = classNames.bind(styles);

function InfoDoctorAndUpdateBooking({ data, date, onClick }) {
    const doctorId = data.id;

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
                    <input type="date" id="date" className={cx('hospital-booking-time')} value={date} readOnly />
                </div>
                <p className={cx('hospital-booking-time-title')}>
                    <FontAwesomeIcon
                        className={cx('hospital-booking-time-icon')}
                        icon={faCalendarDays}
                    ></FontAwesomeIcon>
                    Lịch Khám
                </p>
                <div className={cx('hospital-booking-action')}>
                    {!!data.lstWorkTime
                        ? data.lstWorkTime.map((item, index) => {
                              return (
                                  <BtnUpdateBooking
                                      title={item.name + '(' + item.time + ')'}
                                      key={index}
                                      date={date}
                                      doctorId={data.id}
                                      workTimeId={item.id}
                                      isFree={true}
                                      onClick={() => onClick(item.id, doctorId, item.time)}
                                  ></BtnUpdateBooking>
                              );
                          })
                        : data.lstWorkTime.map((item, index) => {
                              return (
                                  <BtnUpdateBooking
                                      title={item.name + '(' + item.time + ')'}
                                      key={index}
                                      date={date}
                                      doctorId={data.id}
                                      workTimeId={item.id}
                                      isFree={true}
                                      onClick={() => onClick(item.id, doctorId, item.time)}
                                  ></BtnUpdateBooking>
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

export default InfoDoctorAndUpdateBooking;
