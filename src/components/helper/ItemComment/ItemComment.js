import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './ItemComment.module.scss';

const cx = classNames.bind(styles);

function ItemComment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment-avatar')}>
                <img src={images.doctorAvatar} alt="avatar"></img>
            </div>
            <div className={cx('comment-info')}>
                <p className={cx('comment-user-name')}>Bao Quoc</p>
                <span>Bài viết hay và ý nghĩa quá. Cảm ơn chia sẻ của bác sĩ ạ.</span>
                <div className={cx('comment-action-wrapper')}>
                    <span className={cx('comment-action')}>
                        ...
                        <div className={cx('comment-action-btns')}>
                            <p>Ẩn bình luận</p>
                            <p>Xoá bình luận</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ItemComment;
