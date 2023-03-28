import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import styles from './InputBooking.module.scss';

const cx = classNames.bind(styles);

function InputBooking({ placeholder, icon, type, onChangeValue, value }, ref) {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={icon} className={cx('input-icon')}></FontAwesomeIcon>
            {type === 'textarea' ? (
                <textarea placeholder={placeholder} ref={ref}></textarea>
            ) : (
                <input ref={ref} placeholder={placeholder} onChange={(e) => onChangeValue()}></input>
            )}
        </div>
    );
}

export default forwardRef(InputBooking);
