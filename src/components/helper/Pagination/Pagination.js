import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ link, total, limit }) {
    return (
        <ul className={cx('pagination')}>
            <li className={cx('pagination-item ')}>
                <Link to={'/'} className={cx('pagination-item__link')}>
                    <FontAwesomeIcon icon={faAngleLeft} className={cx('pagination-item__icon')}></FontAwesomeIcon>
                </Link>
            </li>

            <li className={cx('pagination-item', 'pagination-item__active')}>
                <Link to={'/'} className={cx('pagination-item__link')}>
                    1
                </Link>
            </li>
            <li className={cx('pagination-item')}>
                <Link to={'/'} className={cx('pagination-item__link')}>
                    2
                </Link>
            </li>
            <li className={cx('pagination-item')}>
                <Link to={'/'} className={cx('pagination-item__link')}>
                    3
                </Link>
            </li>
            <li className={cx('pagination-item')}>
                <Link to={'/'} className={cx('pagination-item__link')}>
                    4
                </Link>
            </li>

            <li className={cx('pagination-item')}>
                <Link to={'/'} className={cx('pagination-item__link')}>
                    5
                </Link>
            </li>

            <li className={cx('pagination-item')}>
                <Link to={'/'} className={cx('pagination-item__link')}>
                    ...
                </Link>
            </li>

            <li className={cx('pagination-item')}>
                <Link to={'/'} className={cx('pagination-item__link')}>
                    14
                </Link>
            </li>

            <li className={cx('pagination-item')}>
                <Link to={'/'} className={cx('pagination-item__link')}>
                    <FontAwesomeIcon icon={faAngleRight} className={cx('pagination-item__icon')}></FontAwesomeIcon>
                </Link>
            </li>
        </ul>
    );
}

export default Pagination;
