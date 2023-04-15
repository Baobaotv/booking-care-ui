import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MessageTemplateSmall.module.scss';
import classNames from 'classnames/bind';
import { faFile, faMinus } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import ItemMessageChat from '../ItemMessageChat/ItemMessageChat';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function MessageTemplateSmall({ isShow, onShowMessage, messages, sendMessage }) {
    const clsWrapper = !!isShow ? cx('form-chat', 'show') : cx('form-chat');
    const isLogin = !!JSON.parse(localStorage.getItem('token'));
    const messageList = !!messages ? messages[1] : null;
    useEffect(() => {
        if (!!messageList) {
            var elem = document.getElementById('message-list');
            elem.scrollTop = elem.scrollHeight;
        }
    }, [messageList]);
    return (
        <div className={clsWrapper}>
            <header>
                <div className={cx('header-chat')}>
                    <img src={images.avatarDefault} alt={'avatar-user'} className={cx('header-avatar')}></img>
                    <p id="fullName" className={cx('fullName')}>
                        {'Tư vấn online'}
                    </p>
                </div>
                <div className={cx('form-chat-header')}>
                    <FontAwesomeIcon
                        className={cx('form-chat-icon')}
                        icon={faMinus}
                        onClick={() => onShowMessage(false)}
                    ></FontAwesomeIcon>
                    {/* <FontAwesomeIcon className={cx('form-chat-icon')} icon={faXmark}></FontAwesomeIcon> */}
                </div>
            </header>
            {!!isLogin ? (
                <>
                    <div id="message-list" className={cx('message-content')}>
                        {!!messageList ? (
                            messageList.map((item, index) => {
                                return (
                                    <ItemMessageChat
                                        img={images.avatarDefault}
                                        key={index}
                                        position={0 === item.senderId ? 'left' : 'right'}
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
                                if (e.key === 'Enter') {
                                    sendMessage(e.target.value, 0);
                                    e.target.value = '';
                                }
                            }}
                        ></input>
                    </div>
                </>
            ) : (
                <>
                    <div id="showMessgae" className={cx('message-not-login', 'message-content')}>
                        <p className={cx('title-login')}>
                            Xin chào quý khách, quý khách vui lòng đăng nhập để sử dụng chức năng này
                        </p>
                        <Link className={cx('btn-login')} to={config.routes.login}>
                            {'Đăng nhập'}
                        </Link>
                    </div>
                    <div className={cx('message-input')}>
                        <div className={cx('message-input-icon')}>
                            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        </div>
                        <input readOnly className={cx('message-send', 'message-not-login')} placeholder="Aa"></input>
                    </div>
                </>
            )}
        </div>
    );
}

export default MessageTemplateSmall;
