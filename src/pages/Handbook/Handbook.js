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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function Handbook({ recentHandbooks, featuredHandbooks, specialties }) {
    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <SlickButton type="prev"></SlickButton>,
        nextArrow: <SlickButton type="next"></SlickButton>,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Cẩm nang'}></LinkToPage>
                <div className={cx('handbook-title')}>
                    <h2>Bài viết mới nhất</h2>
                    <div className={cx('handbook-title-search')}>
                        <input
                            placeholder="Tìm kiếm bài viết"
                            onKeyUp={(e) => {
                                if (e.key === 'Enter' || e.keyCode === 13) {
                                    let title = e.target.value;
                                    window.location.replace(
                                        config.routes.handbookList + '?title=' + encodeURIComponent(title),
                                    );
                                }
                            }}
                        ></input>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </div>
                </div>
                <div className={cx('hand-book-latest-posts')}>
                    {recentHandbooks.map((item, index) => {
                        return <ItemHandbookNormal key={index} data={item}></ItemHandbookNormal>;
                    })}
                </div>
                <div className={cx('handbook-title')}>
                    <h2>Bài viết nổi bật</h2>
                </div>
                <div className={cx('hand-book-show-posts')}>
                    <Slider {...settings}>
                        {!!featuredHandbooks &&
                            featuredHandbooks.map((item, index) => {
                                return (
                                    <ServiceItemHandbook
                                        key={index}
                                        data={item}
                                        layout={'handbook'}
                                    ></ServiceItemHandbook>
                                );
                            })}
                    </Slider>
                    {/* {!!featuredHandbooks &&
                        featuredHandbooks.map((item, index) => {
                            return (
                                <ServiceItemHandbook key={index} data={item} layout={'handbook'}></ServiceItemHandbook>
                            );
                        })}
                    <SlickButton type="next"></SlickButton> */}
                </div>
                <div className={cx('handbook-title')}>
                    <h2>Danh mục cẩm nang</h2>
                </div>
                <div className={cx('hand-book-latest-posts')}>
                    {!!specialties.content &&
                        specialties.content.map((item, index) => {
                            return <ItemSpecialtySmall key={index} data={item}></ItemSpecialtySmall>;
                        })}
                    {!!specialties.content && specialties.content.length > 6 && <SlickButton type="next"></SlickButton>}
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
