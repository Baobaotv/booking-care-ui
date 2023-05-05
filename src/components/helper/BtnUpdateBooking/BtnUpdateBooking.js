import classNames from 'classnames/bind';
import styles from './BtnUpdateBooking.module.scss';

const cx = classNames.bind(styles);

function BtnUpdateBooking({ title, isFree = false, onClick }) {
    const cls = !!isFree ? cx('btn-booking') : cx('btn-booking', 'not-free');
    return (
        <button className={cls} onClick={onClick}>
            {title}
        </button>
    );
}

export default BtnUpdateBooking;
