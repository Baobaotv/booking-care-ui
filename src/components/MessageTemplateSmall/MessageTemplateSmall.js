import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MessageTemplateSmall.module.scss';
import classNames from 'classnames/bind';
import { faFile, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import ItemMessageChat from '../ItemMessageChat/ItemMessageChat';

const cx = classNames.bind(styles);

function MessageTemplateSmall() {
    return<div className={cx('form-chat')}>
        <header>
            <div className={cx('header-chat')}>
                <img src={images.avatarDefault} alt={'avatar-user'} className={cx('header-avatar')}></img>
                <p id='fullName' className={cx('fullName')}>Nguyen Van A</p>
            </div>
            <div className={cx('form-chat-header')}>
                <FontAwesomeIcon className={cx('form-chat-icon')} icon = {faMinus}></FontAwesomeIcon>
                <FontAwesomeIcon className={cx('form-chat-icon')} icon = {faXmark}></FontAwesomeIcon>
            </div>
        </header>
        <div id="showMessgae" className={cx('chieucao-scroll', 'message-content')} >
            <ItemMessageChat position = 'left'
            content={'hello bạn'}></ItemMessageChat>
            <ItemMessageChat position = 'right'
            content={'hello cc'}></ItemMessageChat>
            <ItemMessageChat position = 'left'
            content={'hello bạn'}></ItemMessageChat>
            <ItemMessageChat position = 'right'
            content={'hello cc'}></ItemMessageChat>
            <div className={cx('answer', 'left')}>
                <img className={cx('message-avatar')} src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name"/>
                <div className={cx('text')}>
                  Lorem ipsum dolor amet,  elit
                </div>
            </div>
        </div>
        <div className={cx('message-input')}>
            <div className={cx('message-input-icon')}>
                <FontAwesomeIcon icon = {faFile}></FontAwesomeIcon>
            </div>
            <input className={cx('message-send')} placeholder='Aa'></input>
        </div>
    </div>

}

export default MessageTemplateSmall;