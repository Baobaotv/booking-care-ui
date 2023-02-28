import { faHome, faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './LinkToPage.module.scss';
const cx = classNames.bind(styles);

function LinkToPage({ title }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={'/'} className={cx('link-to-home')}>
                <FontAwesomeIcon icon={faHomeAlt}></FontAwesomeIcon>
            </Link>
            <div className={cx('name-page')}> / {title}</div>
        </div>
    );
}

export default LinkToPage;
