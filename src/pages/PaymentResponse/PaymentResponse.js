import classNames from 'classnames/bind';
import styles from './PaymentResponse.module.scss';

const cx = classNames.bind(styles);
function PaymentResponse() {
    return <div className={cx('wrapper')}></div>;
}

export default PaymentResponse;
