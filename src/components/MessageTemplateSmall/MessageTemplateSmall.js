import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MessageTemplateSmall.module.scss';
import classNames from 'classnames/bind';
import { faFile, faMinus, faWindowClose, faXmark } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function MessageTemplateSmall() {
    const userInfo = JSON.parse(localStorage.getItem('token'));
    // const connect = (userInfo) => {
    //     if (!!userInfo) {
    //       var socket = new SockJS("http://localhost:8080/ws");
    //       stompClient = Stomp.over(socket);
    
    //       stompClient.connect({}, this.onConnected, this.onError);
    //     }
    // }

    // const onConnected = () => {
    //     console.log("onConnected");
    //     // Subscribe to the Public Topic
    //     stompClient.subscribe("/topic/public", this.onMessageReceived);
    
    //     // Tell your username to the server
    //     stompClient.send(
    //       "/api/server",
    //       {},
    //       JSON.stringify({ content: "Ali", senderId: userInfo.id })
    //     );
    // }

    // const sendMessage = (msg) => {
    //     var messageContent = "test"
    //     if (messageContent && stompClient) {
    //       var chatMessage = {
    //         sender: this.state.username,
    //         content: "Heey there",
    //         type: "CHAT",
    //       };
    //       stompClient.send(
    //         "/api/chat/sendMessage/1",
    //         {name: "Ali"},
    //         JSON.stringify(chatMessage)
    //       );
    //     }
    //   };

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
            <div className={cx('answer', 'right')}>
                {/* <img className={cx('message-avatar')} src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name"/> */}
                <div className={cx('text')}>
                  It is a 
                </div>
            </div>
            <div className={cx('answer', 'left')}>
                <img className={cx('message-avatar')} src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name"/>
                <div className={cx('text')}>
                  Lorem ipsum dolor amet, consectetur adipisicing elit ng elit, consectetur adiping elit
                </div>
            </div>
            <div className={cx('answer', 'right')}>
                {/* <img className={cx('message-avatar')} src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name"/> */}
                <div className={cx('text')}>
                Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipit Lorem ipsum dolor amet,
                </div>
            </div>
            <div className={cx('answer', 'right')}>
                {/* <img className={cx('message-avatar')} src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name"/> */}
                <div className={cx('text')}>
                Lorem ipsum dolor amet, consecteturem ipsum dolor amet,
                </div>
            </div>
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