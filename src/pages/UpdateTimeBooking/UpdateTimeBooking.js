import { faCalendarAlt, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import workTimeService from '~/service/WorkTimeService';
import userService from '~/service/UserService';
import LinkToPage from '~/components/helper/LinkToPage';
import styles from './UpdateTimeBooking.module.scss';
import images from '~/assets/images';
import BtnUpdateBooking from '~/components/helper/BtnUpdateBooking';
import InfoDoctorAndUpdateBooking from '~/components/InfoDoctorAndUpdateBooking';

const cx = classNames.bind(styles);

function UpdateTimeBooking({ medica, doctor, workTimes, updateTimeBooking }) {
    let [isOpen, setIsOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const [date, setDate] = useState(searchParams.get('date'));
    const [worTimeOfDoctor, setWorTimeOfDoctor] = useState();
    const [isSuccess, setIsSuccess] = useState(false);
    const [allWorkTime, setAllWorkTime] = useState();
    const [successDoctors, setSuccessDoctors] = useState();
    const [isDisplaySuccessDoctors, setIsDisplaySuccessDoctors] = useState(false);
    const [bodyUpdate, setBodyUpdate] = useState();
    const [isOpenDialogConfirm, setIsOpenDialogConfirm] = useState(false);

    const eventUpdate = () => {
        console.log(bodyUpdate);
        updateTimeBooking(bodyUpdate);
    };

    const onClickWorkTimeFree = (workTimeId, doctorId, workTimeTime) => {
        setBodyUpdate({
            idWorktime: workTimeId,
            idDoctor: doctorId,
            date: date,
            id: searchParams.get('id'),
            workTimeTime: workTimeTime,
        });
        setIsOpenDialogConfirm(true);
    };

    const onClickSuccessDoctor = async (workTimeId) => {
        setIsSuccess(false);
        setIsOpen(false);
        setIsDisplaySuccessDoctors(true);
        const result = await userService
            .getDoctorBySpecialtyIdAndDateAndWorkTimeId(doctor.specializedId, workTimeId, date)
            .then((response) => response);
        setSuccessDoctors(result);
    };

    useEffect(() => {
        if (!doctor) return;
        setIsDisplaySuccessDoctors(false);
        setSuccessDoctors([]);
        const doctorId = doctor.id;
        const getAllWorkTimeByDoctorIdAndDate = async (doctorId, date) => {
            const result = await workTimeService.getAllTimeOfDoctorByDate(doctorId, date).then((response) => response);
            setWorTimeOfDoctor(result);
        };
        getAllWorkTimeByDoctorIdAndDate(doctorId, date);
    }, [date]);

    useEffect(() => {
        if (!isOpen) return;
        const getAllWorkTime = async () => {
            const result = await workTimeService.getAll().then((response) => response);
            setAllWorkTime(result);
        };
        getAllWorkTime();
    }, [isOpen]);

    useEffect(() => {
        if (!isSuccess) return;
        const doctorId = doctor.id;
        const getAllWorkTimeByDoctorIdAndDate = async (doctorId, date) => {
            const result = await workTimeService.getAllTimeOfDoctorByDate(doctorId, date).then((response) => response);
            setWorTimeOfDoctor(result);
        };
        getAllWorkTimeByDoctorIdAndDate(doctorId, date);
    }, [isSuccess]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Cập nhật thời gian khám bệnh'}></LinkToPage>
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
                            {!!workTimes && !!worTimeOfDoctor
                                ? workTimes.map((item, index) => {
                                      if (
                                          !!worTimeOfDoctor &&
                                          worTimeOfDoctor.filter((e) => e.id === item.id).length > 0
                                      ) {
                                          return (
                                              <BtnUpdateBooking
                                                  title={item.name + '(' + item.time + ')'}
                                                  key={index}
                                                  date={date}
                                                  doctorId={doctor.id}
                                                  workTimeId={item.id}
                                                  isFree={true}
                                                  onClick={() => onClickWorkTimeFree(item.id, doctor.id, item.time)}
                                              ></BtnUpdateBooking>
                                          );
                                      } else {
                                          return (
                                              <BtnUpdateBooking
                                                  title={item.name + '(' + item.time + ')'}
                                                  key={index}
                                                  date={date}
                                                  doctorId={doctor.id}
                                                  workTimeId={item.id}
                                                  isFree={false}
                                                  isPayment={!!medica && medica.statusPayment === 1}
                                                  onClick={() => {
                                                      setIsSuccess(false);
                                                      setIsOpen(true);
                                                  }}
                                              ></BtnUpdateBooking>
                                          );
                                      }
                                  })
                                : !!workTimes &&
                                  workTimes.map((item, index) => {
                                      if (
                                          !!doctor.lstWorkTime &&
                                          doctor.lstWorkTime.filter((e) => e.id === item.id).length > 0
                                      ) {
                                          return (
                                              <BtnUpdateBooking
                                                  doctorId={doctor.id}
                                                  workTimeId={item.id}
                                                  key={index}
                                                  date={date}
                                                  title={item.name + '(' + item.time + ')'}
                                                  isFree={true}
                                                  onClick={() => onClickWorkTimeFree(item.id, doctor.id, item.time)}
                                              ></BtnUpdateBooking>
                                          );
                                      } else {
                                          return (
                                              <BtnUpdateBooking
                                                  doctorId={doctor.id}
                                                  workTimeId={item.id}
                                                  key={index}
                                                  date={date}
                                                  title={item.name + '(' + item.time + ')'}
                                                  isFree={false}
                                                  isPayment={!!medica && medica.statusPayment === 1}
                                                  onClick={() => {
                                                      setIsSuccess(false);
                                                      setIsOpen(true);
                                                  }}
                                              ></BtnUpdateBooking>
                                          );
                                      }
                                  })}
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
                                <span className={cx('doctor-booking-info-price-value')}>
                                    {!!doctor &&
                                        doctor.examinationPrice.toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                </span>
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
                            và bấm xác nhận để tiến hành cập nhập thay đổi.
                        </p>
                    </div>
                    <hr></hr>
                    {!isDisplaySuccessDoctors ? (
                        <div className={cx('doctor-description')}>
                            <span dangerouslySetInnerHTML={{ __html: !!doctor && doctor.description }}></span>
                        </div>
                    ) : (
                        <div className={cx('specialty-doctor-content')}>
                            {!!successDoctors &&
                                successDoctors.map((item, index) => {
                                    return (
                                        <InfoDoctorAndUpdateBooking
                                            key={index}
                                            data={item}
                                            date={date}
                                            onClick={onClickWorkTimeFree}
                                        ></InfoDoctorAndUpdateBooking>
                                    );
                                })}
                        </div>
                    )}
                </div>
            </div>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className={isSuccess ? cx('wrapper-dialog', 'plus') : cx('wrapper-dialog')}
            >
                <Dialog.Panel>
                    <div className={cx('dialog-header')}>
                        <Dialog.Title className={cx('dialog-title')}>{'Thông báo'}</Dialog.Title>
                    </div>
                    <div className={cx('dialog-desc')}>
                        <Dialog.Description className={cx('dialog-desc-content')}>
                            {'Mong quý khách thông cảm vì sự bất tiện này'}
                        </Dialog.Description>
                    </div>

                    <div className={cx('dialog-content')}>
                        <p>
                            {
                                'Ca khám đã được đặt lịch. Quý khách vui lòng chọn ca khám khác hoặc chuyển sang bác sĩ cùng chuyên khoa'
                            }
                        </p>
                    </div>
                    {!!isSuccess ? (
                        <div className={cx('dialog-workTime')}>
                            {!!allWorkTime ? (
                                allWorkTime.map((item) => {
                                    return (
                                        <BtnUpdateBooking
                                            workTimeId={item.id}
                                            key={item.id}
                                            title={item.name + '(' + item.time + ')'}
                                            isFree={true}
                                            onClick={() => onClickSuccessDoctor(item.id)}
                                        ></BtnUpdateBooking>
                                    );
                                })
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}

                    <div className={cx('dialog-action')}>
                        <button
                            className={cx('dialog-btn')}
                            onClick={() => {
                                setIsSuccess(true);
                                // setIsOpen(false);
                            }}
                        >
                            {'Gợi ý bác sĩ khác'}
                        </button>
                        <button
                            className={cx('dialog-btn', 'btn-cancel')}
                            onClick={() => {
                                setIsSuccess(false);
                                setIsOpen(false);
                            }}
                        >
                            {'Đóng'}
                        </button>
                    </div>
                </Dialog.Panel>
            </Dialog>

            <Dialog
                open={isOpenDialogConfirm}
                onClose={() => setIsOpenDialogConfirm(false)}
                className={cx('wrapper-dialog')}
            >
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
                                'Chúng tôi nhận thấy rằng bạn đang muốn thay đổi lịch khám, bạn có chắc chắn với thay đổi mới này chứ'
                            }
                        </p>
                    </div>

                    <div className={cx('dialog-action')}>
                        <button
                            className={cx('dialog-btn')}
                            onClick={() => {
                                setIsOpenDialogConfirm(false);
                                eventUpdate();
                            }}
                        >
                            {'Xác nhận'}
                        </button>
                        <button
                            className={cx('dialog-btn', 'btn-cancel')}
                            onClick={() => {
                                setIsOpenDialogConfirm(false);
                                setBodyUpdate({});
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

export default UpdateTimeBooking;
