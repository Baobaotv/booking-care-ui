import classNames from 'classnames/bind';
import images from '~/assets/images';
import LinkToPage from '~/components/helper/LinkToPage';
import Pagination from '~/components/helper/Pagination';
import InfoDoctorAndBooking from '~/components/InfoDoctorAndBooking';
import styles from './SpecialtyDetail.module.scss';

const cx = classNames.bind(styles);

function SpecialtyDetail({ specialDetail, doctorOfSpecialties, onClickPage }) {
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('specialty-description')}
                style={{
                    backgroundImage: `url(${images.specialtyDetailBackground})`,
                }}
            >
                <div className={cx('specialty-wrapper-background')}>
                    <div className={cx('grid', 'wide')}>
                        <LinkToPage title={'Chuyên khoa/ Chi tiết'}></LinkToPage>
                        <div className={cx('specialty-title')}>
                            <p>{specialDetail && specialDetail.name}</p>
                        </div>
                        <div className={cx('specialty-des-content')}>
                            <p dangerouslySetInnerHTML={{ __html: !!specialDetail && specialDetail.description }}></p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
                            <button className={cx('btn-hide-away')}>Ẩn bớt</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('specialty-doctor-list')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('specialty-doctor-title')}>
                        <p>Danh sách bác sĩ thuộc chuyên khoa</p>
                    </div>
                    <hr></hr>
                    <div className={cx('specialty-doctor-content')}>
                        {!!doctorOfSpecialties &&
                            doctorOfSpecialties.content.map((item, index) => {
                                return <InfoDoctorAndBooking key={index} data={item}></InfoDoctorAndBooking>;
                            })}
                    </div>
                    {!!doctorOfSpecialties && (
                        <Pagination
                            totalPages={doctorOfSpecialties.totalPages}
                            pageSize={doctorOfSpecialties.size}
                            currentPage={doctorOfSpecialties.number}
                            onClickPage={onClickPage}
                        ></Pagination>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SpecialtyDetail;
