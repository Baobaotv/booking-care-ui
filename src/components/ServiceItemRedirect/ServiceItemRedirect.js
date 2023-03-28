import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ServiceItemRedirect.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faVideo } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

const cx = classNames.bind(styles);

function ServiceItemRedirect({ online = false, type, data, _slider }) {
    const content = {};
    const _class = !!_slider ? cx('wrapper', 'wrapper_slider') : cx('wrapper');
    switch (type) {
        case 'handbook': {
            content.to = config.routes.handbookDetail + '?id=' + data.id;
            content.title = data.title;
            content.img = data.img;
            content.desc = data.description;
            break;
        }
        case 'doctor': {
            content.to = config.routes.doctorDetail + '?id=' + data.id;
            content.title = data.name;
            content.img = data.img;
            content.desc = data.shortDescription;
            break;
        }
        case 'hospital': {
            content.to = config.routes.hospitalDetail + '?id=' + data.id;
            content.title = data.name;
            content.img = data.img;
            content.desc = data.location;
            break;
        }
        case 'specialty': {
            content.to = config.routes.specialtyDetail + '?id=' + data.id;
            content.title = data.name;
            content.img = data.img;
            content.desc = data.description;
            break;
        }
        default: {
            content.to = '/';
            content.title = 'Ưu đãi 50% phí khám với bác sĩ tại Phòng khám Mediplus';
            content.img = images.serviceItemRedirect;
            content.desc = 'Giảm 50% phí khám ban đầu với các chuyên khoa Cơ xương khớp, Tim mạch và Tiêu hóa';
            break;
        }
    }
    return (
        <div className={_class}>
            <Link to={content.to} className={cx('service-item-link')}>
                {online && (
                    <div className={cx('icon-online')}>
                        <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                    </div>
                )}
                <div className={cx('service-item-background')} style={{ backgroundImage: `url(${content.img})` }}>
                    {/* <label>Ưu đãi</label> */}
                </div>
                <div className={cx('content')}>
                    <h3>{content.title}</h3>
                    <div className={cx('description')}>
                        <span dangerouslySetInnerHTML={{ __html: content.desc }}></span>
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
