import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './ButtonBooking.module.scss';
import util from '~/Util';

const cx = classNames.bind(styles);

function ButtonBooking({ title, date, doctorId, workTimeId }) {
    const to =
        config.routes.booking +
        '?doctor-id=' +
        doctorId +
        '&date=' +
        util.formatDate(date) +
        '&work-time-id=' +
        workTimeId;
    return (
        <Link to={to} className={cx('btn-booking')}>
            {title}
        </Link>
    );
}

export default ButtonBooking;
