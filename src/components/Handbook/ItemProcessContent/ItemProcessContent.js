import classNames from 'classnames/bind';
import styles from './ItemProcessContent.module.scss';

const cx = classNames.bind(styles);

function ItemProcessContent({ avatar, content }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item-process-avatar')}>
                <img src={avatar} alt="item-process-avatar"></img>
            </div>
            <div className={cx('item-process-content')}>{content}</div>
        </div>
    );
}

export default ItemProcessContent;
