import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './ItemCommentWrite.module.scss';

const cx = classNames.bind(styles);

function ItemCommentWrite({ sendComment }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment-avatar')}>
                <img src={images.avatarDefault} alt="avatar"></img>
            </div>
            <div className={cx('comment-info')}>
                <input
                    placeholder="Viết bình luận..."
                    className={cx('comment-input')}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter' || e.keyCode === 13) {
                            sendComment(e.target.value);
                            e.target.value = '';
                        }
                    }}
                ></input>
            </div>
        </div>
    );
}

export default ItemCommentWrite;
