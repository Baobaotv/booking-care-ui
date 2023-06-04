import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ItemComment from '~/components/helper/ItemComment';
import ItemCommentWrite from '~/components/helper/ItemCommentWrite';
import LinkToPage from '~/components/helper/LinkToPage';
import config from '~/config';
import styles from './HandbookDetail.module.scss';

const cx = classNames.bind(styles);

function HandbookDetail({ handbook, comments, sendComment, userInfo, deleteComment }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Cẩm nang/ Chi tiết bài viết'}></LinkToPage>
                <div className={cx('handbook-content')}>
                    <h3 className={cx('handbook-content-title')}>{!!handbook ? handbook.title : ''}</h3>
                    <hr></hr>
                    <div className={cx('handbook-content-info-create')}>
                        <p>
                            Sản phầm của:{' '}
                            <Link to={config.routes.home} className={cx('link-to-home')}>
                                BookingCare
                            </Link>
                        </p>
                        <div className={cx('handbook-info-user-create')}>
                            <span>Nhóm tác giả: {!!handbook ? handbook.createdBy : 'BookingCare'} </span>
                        </div>
                        <div className={cx('handbook-info-user-create')}>
                            <span>Xuất bản ngày: {!!handbook ? handbook.createdDate : ''}</span>
                            <span>Cập nhập lần cuối ngày: {!!handbook ? handbook.modifiedDate : ''}</span>
                        </div>
                        <p>
                            Người kiểm duyệt:{' '}
                            <Link to={config.routes.home} className={cx('link-to-home')}>
                                BookingCare
                            </Link>
                        </p>
                    </div>
                    <div className={cx('handbook-description')}>
                        <span dangerouslySetInnerHTML={{ __html: !!handbook ? handbook.description : '' }}></span>
                    </div>
                    <div className={cx('handbook-introduce')}>
                        <FontAwesomeIcon icon={faLightbulb} className={cx('handbook-introduce-icon')}></FontAwesomeIcon>
                        <p>
                            BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người
                            dùng với trên 150 bệnh viện - phòng khám uy tín, hơn 1,000 bác sĩ chuyên khoa giỏi và hàng
                            nghìn dịch vụ, sản phẩm y tế chất lượng cao.
                        </p>
                    </div>
                    <div className={cx('content')}>
                        <span dangerouslySetInnerHTML={{ __html: !!handbook ? handbook.content : '' }}></span>
                    </div>
                </div>
                <hr></hr>
                <div className={cx('handbook-comment')}>
                    <p className={cx('handbook-comment-title')}>Bình luận:</p>
                    {!!userInfo ? <ItemCommentWrite sendComment={sendComment}></ItemCommentWrite> : <></>}
                    {!!comments && comments.length > 0 ? (
                        comments.map((item) => {
                            let isSelfComment = userInfo.id === item.idUser;
                            let isDoctor = userInfo.id === item.createdById;
                            let isAdmin = userInfo.roles.includes('ROLE_ADMIN');
                            return (
                                <ItemComment
                                    key={item.id}
                                    data={item}
                                    isSelfComment={isSelfComment || isDoctor || isAdmin}
                                    deleteComment={deleteComment}
                                ></ItemComment>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HandbookDetail;
