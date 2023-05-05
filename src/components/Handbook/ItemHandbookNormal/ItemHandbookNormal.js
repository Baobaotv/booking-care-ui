import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import styles from './ItemHandbookNormal.module.scss';

const cx = classNames.bind(styles);

function ItemHandbookNormal({ data }) {
    return (
        <Link className={cx('wrapper')} to={config.routes.handbookDetail + '?id=' + data.id}>
            <div className={cx('handbook-avatar')}>
                <img src={!!data ? data.img : images.handbookAvatar} alt="Handbook avatar"></img>
            </div>
            <p className={cx('handbook-title')}>{!!data && data.title}</p>
            <p
                className={cx('handbook-short-description')}
                dangerouslySetInnerHTML={{ __html: !!data && data.description }}
            ></p>
        </Link>
    );
}

export default ItemHandbookNormal;
