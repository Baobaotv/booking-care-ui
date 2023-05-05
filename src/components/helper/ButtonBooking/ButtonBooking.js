import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './ButtonBooking.module.scss';
import util from '~/Util';

const cx = classNames.bind(styles);

function ButtonBooking({ title, date, doctorId, workTimeId, isFree = false }) {
    const to =
        config.routes.booking +
        '?doctor-id=' +
        doctorId +
        '&date=' +
        util.formatDate(date) +
        '&work-time-id=' +
        workTimeId;
    const cls = !!isFree ? cx('btn-booking') : cx('btn-booking', 'not-free');
    return (
        <Link to={to} className={cls}>
            {title}
        </Link>
    );
}

export default ButtonBooking;
