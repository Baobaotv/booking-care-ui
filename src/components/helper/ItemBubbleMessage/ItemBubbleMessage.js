import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './ItemBubbleMessage.module.scss';

const cx = classNames.bind(styles);

function ItemBubbleMessage({ isShow, onShowMessage }) {
    const cls = !!isShow ? cx('wrapper', 'show') : cx('wrapper');
    return (
        <div
            className={cls}
            onClick={() => {
                onShowMessage(true);
            }}
        >
            <p className={cx('title')}>{'Trung tâm tư vấn online'}</p>
            <img className={cx('avatar')} alt={'avatar'} src={images.avatarDefault}></img>
        </div>
    );
}

export default ItemBubbleMessage;
