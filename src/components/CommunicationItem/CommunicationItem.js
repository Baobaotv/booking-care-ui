import classNames from 'classnames/bind';
import styles from './CommunicationItem.module.scss';

const cx = classNames.bind(styles);
function CommunicationItem({ content }) {
    return (
        <a target={'_blank'} title={content.title} href={content.href}>
            <i
                className={cx('comunicate-icon')}
                style={{
                    backgroundImage: `url(${content.img})`,
                    backgroundColor: content.backgroundColor || 'transparent',
                }}
            ></i>
        </a>
    );
}

export default CommunicationItem;
