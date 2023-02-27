import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ServiceItem.module.scss';

const cx = classNames.bind(styles);

function ServiceItem({ serviceItem }) {
    return (
        <Link to={serviceItem.to} className={cx('service-redirect')}>
            <div className={cx('service-icon')}>
                <img src={serviceItem.img} alt={'img-service'} className={cx('img-service')} />
            </div>
            <p>{serviceItem.title}</p>
        </Link>
    );
}

export default ServiceItem;
