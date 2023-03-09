import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './ItemCommentWrite.module.scss';

const cx = classNames.bind(styles);

function ItemCommentWrite() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment-avatar')}>
                <img src={images.doctorAvatar} alt="avatar"></img>
            </div>
            <div className={cx('comment-info')}>
                <input placeholder="Viết bình luận..." className={cx('comment-input')}></input>
            </div>
        </div>
    );
}

export default ItemCommentWrite;
