import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './ItemHospitalLocation.module.scss';
const cx = classNames.bind(styles);

function ItemHospitalLocation({ data, type }) {
    const content = {};
    let userLocation = document.getElementById('your-location').value;
    let to = '';
    if (!!userLocation) {
        to = userLocation;
    } else {
        to =
            ' lat - ' +
            document.getElementById('your-lng').value +
            ' & lng - ' +
            document.getElementById('your-lat').value;
    }
    content.to = config.routes.hospitalDetail + '?id=' + data.id;
    content.title = data.name;
    content.desc = data.location;
    content.img = data.img;

    return (
        <Link className={cx('wrapper')} to={content.to}>
            <div className={cx('wrapper-img')}>
                <img className={cx('hospital-avatar')} src={content.img} alt="handbook-avatar"></img>
            </div>
            <div className={cx('handbook-information')}>
                <p className={cx('handbook-title')}>{content.title}</p>
                <div className={cx('handbook-content')}>
                    <span className={cx('handbook-description')}>{'Vị trí cơ sở y tế: ' + data.location}</span>
                    <p className={cx('handbook-description')}>{'Vị trí của bạn: ' + to}</p>
                    <p className={cx('handbook-description')}>
                        {'Khoảng cách di chuyển: '}
                        <b>{data.distance}</b>
                    </p>
                    <p className={cx('handbook-description')}>
                        {'Thời gian di chuyển dự kiến: '}
                        <b>{data.duration}</b>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default ItemHospitalLocation;
