import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import ItemHandbookNormal from '~/components/Handbook/ItemHandbookNormal';
import ItemProcessContent from '~/components/Handbook/ItemProcessContent/ItemProcessContent';
import ItemSpecialtySmall from '~/components/Handbook/ItemSpecialtySmall';
import LinkToPage from '~/components/helper/LinkToPage';
import ServiceItemHandbook from '~/components/ServiceItemHandbook';
import SlickButton from '~/components/SlickButton/SlickButton';
import config from '~/config';
import styles from './Handbook.module.scss';

const cx = classNames.bind(styles);

function Handbook() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Cẩm nang'}></LinkToPage>
                <div className={cx('handbook-title')}>
                    <h2>Bài viết mới nhất</h2>
                    <div className={cx('handbook-title-search')}>
                        <input placeholder="Tìm kiếm bài viết"></input>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </div>
                </div>
                <div className={cx('hand-book-latest-posts')}>
                    <ItemHandbookNormal></ItemHandbookNormal>
                    <ItemHandbookNormal></ItemHandbookNormal>
                    <ItemHandbookNormal></ItemHandbookNormal>
                    <ItemHandbookNormal></ItemHandbookNormal>
                    <SlickButton type="next"></SlickButton>
                </div>
                <div className={cx('handbook-title')}>
                    <h2>Bài viết nổi bật</h2>
                </div>
                <div className={cx('hand-book-latest-posts')}>
                    <ServiceItemHandbook></ServiceItemHandbook>
                    <ServiceItemHandbook></ServiceItemHandbook>
                    <SlickButton type="next"></SlickButton>
                </div>
                <div className={cx('handbook-title')}>
                    <h2>Danh mục cẩm nang</h2>
                </div>
                <div className={cx('hand-book-latest-posts')}>
                    <ItemSpecialtySmall to={config.routes.handbookList}></ItemSpecialtySmall>
                    <ItemSpecialtySmall to={config.routes.handbookList}></ItemSpecialtySmall>
                    <ItemSpecialtySmall to={config.routes.handbookList}></ItemSpecialtySmall>
                    <ItemSpecialtySmall to={config.routes.handbookList}></ItemSpecialtySmall>
                    <ItemSpecialtySmall to={config.routes.handbookList}></ItemSpecialtySmall>
                    <ItemSpecialtySmall to={config.routes.handbookList}></ItemSpecialtySmall>
                    <SlickButton type="next"></SlickButton>
                </div>
                <div className={cx('hand-book-production-process')}>
                    <div className={cx('hand-book-process-title')}>
                        <h2>BookingCare tạo ra nội dung như thế nào?</h2>
                        <Link to={'/cam-nang/bai-viet/id'}>Quy trình sáng tạo nội dung</Link>
                    </div>
                    <div className={cx('hand-book-process-content')}>
                        <ItemProcessContent
                            avatar={images.handbookProcessDoctor}
                            content="Tham vấn y khoa với bác sĩ chuyên môn"
                        ></ItemProcessContent>
                        <ItemProcessContent
                            avatar={images.handbookProcessSearch}
                            content="Nội dung xác thực"
                        ></ItemProcessContent>
                        <ItemProcessContent
                            avatar={images.handbookProcessUpdate}
                            content="Cập nhật thường xuyên"
                        ></ItemProcessContent>
                        <ItemProcessContent
                            avatar={images.handbookProcessTeam}
                            content="Tham khảo nguồn tin cậy"
                        ></ItemProcessContent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Handbook;
