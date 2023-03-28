import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './SlickButton.module.scss';

const cx = classNames.bind(styles);
function SlickButton({ type, onClick }) {
    const classBtn =
        type === 'prev' ? cx('slick-prev', 'pull-left', 'slick-arrow') : cx('slick-next', 'pull-right', 'slick-arrow');
    const icon = type === 'prev' ? faAngleLeft : faAngleRight;
    return (
        <button className={classBtn} aria-label="Previous" type="button" aria-disabled="false" onClick={onClick}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </button>
    );
}

export default SlickButton;
