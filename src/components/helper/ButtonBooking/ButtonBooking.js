import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ButtonBooking.module.scss';

const cx = classNames.bind(styles);

function ButtonBooking({ title }) {
    return <Link className={cx('btn-booking')}>{title}</Link>;
}

export default ButtonBooking;
