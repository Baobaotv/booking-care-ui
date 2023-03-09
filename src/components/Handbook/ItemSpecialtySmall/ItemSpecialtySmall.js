import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ItemSpecialtySmall.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ItemSpecialtySmall({ to }) {
    return (
        <Link className={cx('wrapper')} to={to}>
            <div className={cx('specialty-avatar')}>
                <img src={images.serviceItemRedirect} alt="specialty-avatar"></img>
            </div>
            <span className={cx('specialty-name')}>Cơ xương khớp</span>
        </Link>
    );
}

export default ItemSpecialtySmall;
