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

function HandbookDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Cẩm nang/ Chi tiết bài viết'}></LinkToPage>
                <div className={cx('handbook-content')}>
                    <h3 className={cx('handbook-content-title')}>
                        8 bác sĩ khám chữa Tim mạch giỏi tại Hà Nội (Phần 1)
                    </h3>
                    <hr></hr>
                    <div className={cx('handbook-content-info-create')}>
                        <p>
                            Sản phầm của:{' '}
                            <Link to={config.routes.home} className={cx('link-to-home')}>
                                BookingCare
                            </Link>
                        </p>
                        <div className={cx('handbook-info-user-create')}>
                            <span>Nhóm tác giả: Thảo Hoàng </span>
                            <span>Xuất bản ngày: 2023/03/03</span>
                            <span>Cập nhập lần cuối ngày: 2023/03/03</span>
                        </div>
                        <p>
                            Người kiểm duyệt:{' '}
                            <Link to={config.routes.home} className={cx('link-to-home')}>
                                BookingCare
                            </Link>
                        </p>
                    </div>
                    <div className={cx('handbook-description')}>
                        Nội dung tổng hợp danh sách các bác sĩ chuyên khoa tim mạch giỏi, có nhiều kinh nghiệm thăm khám
                        tại Hà Nội, cùng với các thông tin về địa chỉ thăm khám hiện tại của các bác sĩ để bạn đọc thuận
                        tiện lựa chọn bác sĩ khám.
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
                        Nội dung tổng hợp danh sách các bác sĩ chuyên khoa tim mạch giỏi, có nhiều kinh nghiệm thăm khám
                        tại Hà Nội, cùng với các thông tin về địa chỉ thăm khám hiện tại của các bác sĩ để bạn đọc thuận
                        tiện lựa chọn bác sĩ khám.
                    </div>
                </div>
                <hr></hr>
                <div className={cx('handbook-comment')}>
                    <p className={cx('handbook-comment-title')}>Bình luận:</p>
                    <ItemComment></ItemComment>
                    <ItemComment></ItemComment>
                    <ItemComment></ItemComment>
                    <ItemCommentWrite></ItemCommentWrite>
                </div>
            </div>
        </div>
    );
}

export default HandbookDetail;
