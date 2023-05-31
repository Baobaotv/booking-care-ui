import classNames from 'classnames/bind';
import styles from './MyMessage.module.scss';
import ItemUserChat from '~/components/ItemUserChat/ItemUserChat';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faVideo } from '@fortawesome/free-solid-svg-icons';
import ItemMessageChat from '~/components/ItemMessageChat/ItemMessageChat';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function MyMessage({ interactives, messages, userInfo, onSelectUser, selectedId, sendMessage }) {
    const reciverInfo = !!messages ? messages[0] : null;
    const messageList = !!messages ? messages[1] : null;
    useEffect(() => {
        if (!!messageList) {
            var elem = document.getElementById('message-list');
            elem.scrollTop = elem.scrollHeight;
        }
    }, [messageList]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('list-user')}>
                <header className={cx('list-user-header')}>
                    <p>Chat</p>
                </header>
                <div className={cx('list-user-content')}>
                    <div className={cx('list-user-items')}>
                        {!!interactives ? (
                            interactives.map((item, index) => {
                                return (
                                    <ItemUserChat
                                        selectedId={selectedId}
                                        key={index}
                                        data={item}
                                        onSelectUser={onSelectUser}
                                    ></ItemUserChat>
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('message-content')}>
                <header className={cx('message-content-header')}>
                    <div className={cx('info-user')}>
                        <img src={!!reciverInfo ? reciverInfo.img : images.avatarDefault} alt={'avatar-user'}></img>
                        <p className={cx('info-user-name')}>{!!reciverInfo ? reciverInfo.name : 'User'}</p>
                    </div>
                    <div className={cx('message-content-icon')}>
                        <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                    </div>
                </header>
                <div className={cx('message-content-container')}>
                    <div className={cx('message-list')} id={'message-list'}>
                        {!!messageList ? (
                            messageList.map((item, index) => {
                                return (
                                    <ItemMessageChat
                                        img={reciverInfo.img}
                                        key={index}
                                        position={userInfo.id === item.senderId ? 'right' : 'left'}
                                        content={item.content}
                                    ></ItemMessageChat>
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className={cx('message-input')}>
                        <div className={cx('message-input-icon')}>
                            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        </div>
                        <input
                            className={cx('message-send')}
                            placeholder="Aa"
                            onKeyUp={(e) => {
                                if (e.key === 'Enter' || e.keyCode === 13) {
                                    sendMessage(e.target.value, selectedId);
                                    e.target.value = '';
                                }
                            }}
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyMessage;
