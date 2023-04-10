import classNames from "classnames/bind";
import styles from './ItemMessageChat.module.scss'
const cx = classNames.bind(styles);

function ItemMessageChat({position, content, img}) {
    const cls = position ==  'left' ? cx('answer', 'left') : cx('answer', 'right')
    return <div className={cls}>
                {
                    position ==  'left' 
                    ?
                        <img className={cx('message-avatar')} src={!!img ? img : "https://bootdey.com/img/Content/avatar/avatar2.png"} alt="User name"/>
                    :
                    <></>
                }
                <div className={cx('text')}>
                    {content}
                </div>
            </div>
}

export default ItemMessageChat;