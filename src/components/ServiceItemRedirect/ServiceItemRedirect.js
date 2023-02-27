import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ServiceItemRedirect.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ServiceItemRedirect({ online = false }) {
    return (
        <div className={cx('wrapper')}>
            <Link
                to={'https://bookingcare.vn/cam-nang/uu-dai-50-phi-kham-voi-bac-si-tai-phong-kham-mediplus-p2722.html'}
                className={cx('service-item-link')}
            >
                {online && (
                    <div className={cx('icon-online')}>
                        <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                    </div>
                )}
                <div
                    className={cx('service-item-background')}
                    style={{ backgroundImage: `url(${images.serviceItemRedirect})` }}
                >
                    <label>Ưu đãi</label>
                </div>
                <div className={cx('content')}>
                    <h3>Ưu đãi 50% phí khám với bác sĩ tại Phòng khám Mediplus</h3>
                    <div className={cx('description')}>
                        <ul>
                            <li>Giảm 50% phí khám ban đầu với các chuyên khoa Cơ xương khớp, Tim mạch và Tiêu hóa</li>
                        </ul>
                    </div>
                    <button className={cx('content-btn')}>
                        XEM CHI TIẾT
                        <FontAwesomeIcon icon={faAngleRight} className={cx('content-icon')}></FontAwesomeIcon>
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default ServiceItemRedirect;
