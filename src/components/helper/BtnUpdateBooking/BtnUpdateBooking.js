import classNames from 'classnames/bind';
import styles from './BtnUpdateBooking.module.scss';

const cx = classNames.bind(styles);

function BtnUpdateBooking({ title, isFree = false, onClick, isPayment = false }) {
    const cls = !!isFree ? cx('btn-booking') : cx('btn-booking', 'not-free');
    if (isPayment) {
        onClick = function () {
            alert('Ca khám không còn trống, xin vui lòng chuyển qua ca khám hoặc ngày khác.');
        };
    }
    return (
        <button className={cls} onClick={onClick}>
            {title}
        </button>
    );
}

export default BtnUpdateBooking;
