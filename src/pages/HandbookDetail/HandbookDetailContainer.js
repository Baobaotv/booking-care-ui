import HandbookDetail from './HandbookDetail';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import hanbookService from '~/service/HandbookService';
import commentService from '~/service/CommentService';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import config from '~/config';
let stompClient = null;

function connectSockJs(comments, setComments) {
    let receiveMessages = (message) => {
        console.log('Nhan comment');
        console.log(JSON.parse(message.body));
        let newComments = [JSON.parse(message.body), ...comments];
        setComments(newComments);
    };

    const connect = () => {
        let socket = new SockJS(config.hostBe + '/ws');
        stompClient = over(socket);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        stompClient.subscribe('/topic/comment', receiveMessages);
    };

    function onError() {
        console.log('Connect socket to receive comment is fail');
    }
    connect();
}

function HandbookDetailContainer() {
    const [searchParams] = useSearchParams();
    const [handbook, setHandBook] = useState();
    const [comments, setComments] = useState([]);

    const userInfo = JSON.parse(localStorage.getItem('token'));
    useEffect(() => {
        connectSockJs(comments, setComments);
    }, [comments]);

    function sendComment(content) {
        if (content === '' || content.trim().length === 0) {
            return;
        }
        let comment = {
            idUser: userInfo.id,
            idHandbook: searchParams.get('id'),
            content: content,
        };
        stompClient.send('/app/sendComment', {}, JSON.stringify(comment));
    }

    const deleteComment = async (id) => {
        let result = await commentService.deleteById(id).then((response) => response);
        let commentsAfterRemove = comments.filter((item) => item.id !== id);
        setComments(commentsAfterRemove);
    };

    useEffect(() => {
        connectSockJs(comments, setComments);
        const getOneHandbook = async (id) => {
            const result = await hanbookService.getOneHandbook(id).then((response) => response);
            setHandBook(result);
        };

        const getCommentByHandbookId = async (id) => {
            const result = await commentService.getAllByHandbookId(id).then((response) => response);
            setComments(result);
        };

        getOneHandbook(searchParams.get('id'));
        getCommentByHandbookId(searchParams.get('id'));
    }, []);
    return (
        <HandbookDetail
            handbook={handbook}
            comments={comments}
            sendComment={sendComment}
            userInfo={userInfo}
            deleteComment={deleteComment}
        ></HandbookDetail>
    );
}

export default HandbookDetailContainer;
