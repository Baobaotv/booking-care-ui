import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './PageSwitchItem.module.scss';

const cx = classNames.bind(styles);

function PageSwitchItem({ to, title, description }) {
    return (
        <div className={cx('header_nav-item')}>
            <Link href={to} className={cx('header_nav-link')}>
                {title}
            </Link>
            <span>{description}</span>
        </div>
    );
}

export default PageSwitchItem;
