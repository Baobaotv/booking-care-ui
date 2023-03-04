import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './InputBooking.module.scss';

const cx = classNames.bind(styles);

function InputBooking({ placeholder, icon, type }) {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={icon} className={cx('input-icon')}></FontAwesomeIcon>
            {type === 'textarea' ? (
                <textarea placeholder={placeholder}></textarea>
            ) : (
                <input placeholder={placeholder}></input>
            )}
        </div>
    );
}

export default InputBooking;
