import { faCalendarAlt, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import workTimeService from '~/service/WorkTimeService';
import ButtonBooking from '~/components/helper/ButtonBooking';
import LinkToPage from '~/components/helper/LinkToPage';
import Util from '~/Util';
import styles from './DoctorDetail.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function DoctorDetail({ doctor }) {
    const [date, setDate] = useState(Util.formatDate(new Date()));
    const [worTimeOfDoctor, setWorTimeOfDoctor] = useState();
    useEffect(() => {
        if (!doctor) return;
        const doctorId = doctor.id;
        const getAllWorkTimeByDoctorIdAndDate = async (doctorId, date) => {
            const result = await workTimeService.getAllTimeOfDoctorByDate(doctorId, date).then((response) => response);
            setWorTimeOfDoctor(result);
        };
        getAllWorkTimeByDoctorIdAndDate(doctorId, date);
    }, [date]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Bác sĩ/ Chi tiết bác sĩ'}></LinkToPage>
                <div className={cx('doctor-content')}>
                    <div className={cx('doctor-introduce')}>
                        <div className={cx('doctor-introduce-avatar')}>
                            <img src={!!doctor ? doctor.img : images.avatarDefault} alt="doctor-avatar"></img>
                        </div>
                        <div className={cx('doctor-introduce-content')}>
                            <p className={cx('doctor-name')}>Bác sĩ {!!doctor && doctor.name}</p>
                            <div className={cx('doctor-short-description')}>
                                <p>Số điện thoại : {!!doctor && doctor.phone}</p>
                                <p>Bác sĩ công tác tại {!!doctor && doctor.hospitalName}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('calendar')}>
                        <input type={'date'} value={date} onChange={(e) => setDate(e.target.value)}></input>
                        <p>
                            <FontAwesomeIcon className={cx('calendar-icon')} icon={faCalendarAlt}></FontAwesomeIcon>Lịch
                            khám
                        </p>
                    </div>
                    <div className={cx('doctor-booking')}>
                        <div className={cx('doctor-calendar')}>
                            {!!worTimeOfDoctor
                                ? worTimeOfDoctor.map((item, index) => {
                                      return (
                                          <ButtonBooking
                                              title={item.name + '(' + item.time + ')'}
                                              key={index}
                                              date={date}
                                              doctorId={doctor.id}
                                              workTimeId={item.id}
                                          ></ButtonBooking>
                                      );
                                  })
                                : !!doctor &&
                                  doctor.lstWorkTime.map((item, index) => {
                                      return (
                                          <ButtonBooking
                                              doctorId={doctor.id}
                                              workTimeId={item.id}
                                              key={index}
                                              date={date}
                                              title={item.name + '(' + item.time + ')'}
                                          ></ButtonBooking>
                                      );
                                  })}
                            {/* <ButtonBooking title={'08:00-08:30'}></ButtonBooking>
                            <ButtonBooking title={'08:30-09:00'}></ButtonBooking>
                            <ButtonBooking title={'09:30-10:00'}></ButtonBooking>
                            <ButtonBooking title={'08:00-08:30'}></ButtonBooking>
                            <ButtonBooking title={'08:00-08:30'}></ButtonBooking>
                            <ButtonBooking title={'08:30-09:00'}></ButtonBooking>
                            <ButtonBooking title={'09:30-10:00'}></ButtonBooking>
                            <ButtonBooking title={'08:00-08:30'}></ButtonBooking> */}
                        </div>
                        <div className={cx('doctor-booking-info')}>
                            <div className={cx('doctor-booking-info-address')}>
                                <p className={cx('doctor-booking-hospital-title')}>Địa chỉ khám</p>
                                <p className={cx('doctor-booking-hospital-name')}>
                                    Phòng khám {!!doctor && doctor.hospitalName}
                                </p>
                                <p className={cx('doctor-booking-hospital-address')}>
                                    Địa chỉ: {!!doctor && doctor.hospitalLocation}
                                </p>
                            </div>
                            <div className={cx('doctor-booking-info-price')}>
                                <span className={cx('doctor-booking-info-price-title')}>Giá khám:</span>
                                <span className={cx('doctor-booking-info-price-value')}>500.000đ</span>
                            </div>
                        </div>
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
                    <hr></hr>
                    <div className={cx('doctor-description')}>
                        <span dangerouslySetInnerHTML={{ __html: !!doctor && doctor.description }}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorDetail;
