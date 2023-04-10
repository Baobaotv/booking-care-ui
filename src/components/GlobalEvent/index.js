import SockJS from 'sockjs-client';
import { over } from 'stompjs';
let stompClient = null;
function GlobalEvent({ children }) {
    // const userInfo = JSON.parse(localStorage.getItem('token'));

    // const connect = (userInfo) => {
    //     if (!!userInfo) {
    //         var socket = new SockJS('http://172.16.17.194:8080/ws');
    //         stompClient = over(socket);
    //         stompClient.connect({}, onConnected, onError);
    //     }
    // };

    // const onConnected = () => {
    //     console.log('onConnected');
    // };

    // function onError() {
    //     console.log('Conect socket is fail');
    // }

    // function onMessageReceived(payload) {
    //     console.log(payload);
    // }

    // connect(userInfo);

    // console.log('stompClient', stompClient);
    return children;
}
export default GlobalEvent;
export { stompClient };
