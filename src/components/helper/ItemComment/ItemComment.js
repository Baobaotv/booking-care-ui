import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './ItemComment.module.scss';

const cx = classNames.bind(styles);

function ItemComment({ data, isSelfComment, deleteComment }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment-avatar')}>
                <img src={!!data && !!data.img ? data.img : images.avatarDefault} alt="avatar"></img>
            </div>
            <div className={cx('comment-info')}>
                <p className={cx('comment-user-name')}>{!!data ? data.fullName : 'Người dùng'}</p>
                <span>{!!data ? data.content : 'Bài viết hay và ý nghĩa quá. Cảm ơn chia sẻ của bác sĩ ạ.'}</span>
                {!!isSelfComment ? (
                    <div className={cx('comment-action-wrapper')}>
                        <span className={cx('comment-action')}>
                            ...
                            <div className={cx('comment-action-btns')}>
                                {/* <p>Ẩn bình luận</p> */}
                                <p onClick={() => deleteComment(data.id)}>Xoá bình luận</p>
                            </div>
                        </span>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default ItemComment;
