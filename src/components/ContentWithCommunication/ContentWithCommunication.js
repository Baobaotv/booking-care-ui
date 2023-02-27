import classNames from 'classnames/bind';
import styles from './ContentWithCommunication.module.scss';
import config from '~/config/config';
import CommunicationItem from '../CommunicationItem';

const cx = classNames.bind(styles);
function ContentWithCommunication({ title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('content__heading')}>
                    <h2 className={cx('heading')}>{title}</h2>
                </div>

                <div className={cx('content')}>
                    <iframe
                        width={'560'}
                        height={'315'}
                        src={'https://www.youtube.com/embed/FyDQljKtWnI'}
                        title={'YouTube video player'}
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                    <div className={cx('comunicate-content')}>
                        <ul>
                            {config.communicationContents.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <CommunicationItem content={item}></CommunicationItem>
                                    </li>
                                );
                            })}
                            {/* <li>
                                <a
                                    target="_blank"
                                    title="Báo sức khỏe đời sống nói về BookingCare"
                                    href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-n153232.html"
                                >
                                    <i
                                        className={cx('truyenthong-bt truyenthong-suckhoedoisong luoi-tai')}
                                        style='background-image: url("/assets/truyenthong/suckhoedoisong.png");'
                                        data-src="/assets/truyenthong/suckhoedoisong.png"
                                    ></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    title="VTV1 - Cà phê khởi nghiệp 14-11-2018"
                                    href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm"
                                >
                                    <i
                                        className={cx('truyenthong-bt truyenthong-vtv1 luoi-tai')}
                                        style='background-image: url("/assets/truyenthong/vtv1.png");'
                                        data-src="/assets/truyenthong/vtv1.png"
                                    ></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    title="Báo điện tử ictnews giới thiệu BookingCare"
                                    href="https://ictnews.vn/kinh-doanh/doanh-nghiep/startup-bookingcare-chinh-thuc-ra-mat-phien-ban-di-dong-cua-nen-tang-ho-tro-dat-lich-kham-online-173512.ict"
                                >
                                    <i
                                        className={cx('truyenthong-bt truyenthong-ictnews luoi-tai')}
                                        style='background-image: url("/assets/truyenthong/ictnews.png");'
                                        data-src="/assets/truyenthong/ictnews.png"
                                    ></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    title="VnExpress nói về BookingCare"
                                    href="https://video.vnexpress.net/tin-tuc/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
                                >
                                    <i
                                        className={cx('truyenthong-bt truyenthong-vnexpress luoi-tai')}
                                        style='background-image: url("/assets/truyenthong/vnexpress.png");'
                                        data-src="/assets/truyenthong/vnexpress.png"
                                    ></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    title="VTC News nói về BookingCare"
                                    href="https://vtc.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-d434101.html"
                                >
                                    <i
                                        className={cx('truyenthong-bt truyenthong-vtcnews luoi-tai')}
                                        style='background-image: url("/assets/truyenthong/vtcnews.png");'
                                        data-src="/assets/truyenthong/vtcnews.png"
                                    ></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    title="Cục công nghệ thông tin - Bộ Y tế nói về BookingCare"
                                    href="http://ehealth.gov.vn/?action=News&amp;newsId=46094"
                                >
                                    <i
                                        className={cx('truyenthong-bt truyenthong-cnntbyt luoi-tai')}
                                        style='background-image: url("/assets/truyenthong/cuc-cong-nghe-thong-tin-bo-y-te-2.png");'
                                        data-src="/assets/truyenthong/cuc-cong-nghe-thong-tin-bo-y-te-2.png"
                                    ></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    title="Báo điện tử infonet nói về BookingCare"
                                    href="https://infonet.vietnamnet.vn/khoe-dep/da-co-hon-20-000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html"
                                >
                                    <i
                                        className={cx('truyenthong-bt truyenthong-infonet luoi-tai')}
                                        style='background-image: url("/assets/truyenthong/infonet.png");'
                                        data-src="/assets/truyenthong/infonet.png"
                                    ></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    title="VTV1 - Cà phê khởi nghiệp 16-08-2018"
                                    href="https://vtv.vn/video/ca-phe-khoi-nghiep-16-8-2018-317687.htm"
                                >
                                    <i
                                        className={cx('truyenthong-bt truyenthong-vtv1 luoi-tai')}
                                        style='background-image: url("/assets/truyenthong/vtv1.png");'
                                        data-src="/assets/truyenthong/vtv1.png"
                                    ></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    title="VTC Go nói về BookingCare"
                                    href="https://www.youtube.com/watch?v=mstAc81lpMc"
                                >
                                    <i
                                        className={cx('truyenthong-bt truyenthong-vtcgo luoi-tai')}
                                        style='background-image: url("/assets/truyenthong/vtcgo.png");'
                                        data-src="/assets/truyenthong/vtcgo.png"
                                    ></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    title="VTV1 - Cà phê khởi nghiệp 21-02-2018"
                                    href="https://vtv.vn/video/ca-phe-khoi-nghiep-21-02-2018-282723.htm"
                                >
                                    <i
                                        className={cx('truyenthong-bt truyenthong-vtv1 luoi-tai')}
                                        style='background-image: url("/assets/truyenthong/vtv1.png");'
                                        data-src="/assets/truyenthong/vtv1.png"
                                    ></i>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentWithCommunication;
