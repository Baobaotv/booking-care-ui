import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ItemSpecialtySmall.module.scss';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);

function ItemSpecialtySmall({ data }) {
    const to = !!data ? config.routes.handbookList + '?specialty-id=' + data.id : config.routes.handbookList;
    return (
        <Link className={cx('wrapper')} to={to}>
            <div className={cx('specialty-avatar')}>
                <img src={!!data ? data.img : images.serviceItemRedirect} alt="specialty-avatar"></img>
            </div>
            <span className={cx('specialty-name')}>{!!data && data.name}</span>
        </Link>
    );
}

export default ItemSpecialtySmall;
