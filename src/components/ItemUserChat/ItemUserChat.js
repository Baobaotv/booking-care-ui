import classNames from "classnames/bind";
import styles from './ItemUserChat.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";
const cx = classNames.bind(styles);

function ItemUserChat({data, selectedId, onSelectUser}) {
    const cls = (selectedId === data.userId ) ? cx('wrapper', 'selected') : cx('wrapper');
    return <div className={cls} onClick={() => onSelectUser(data.userId)}>
        <img src = { !!data && !!data.img ? data.img : images.avatarDefault} alt="avater-user" className={cx('avatar-user')}></img>
        <div className={cx('info-user-chat')}> 
            <div className={cx('info-user-content')}>
                <p className={cx('user-name')}>{!!data ? data.fullName : 'Nguyen Van A'}</p>
                <span className={cx('message')}>{!!data ? data.lastMessage : 'Oki b'}</span>
            </div>
            {
                !!data && data.status === 0
                ? 
                <div className={cx('info-user-status')}>
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                </div>
                :
                <></>
            }
        </div>
    </div>
}

export default ItemUserChat;