import classNames from 'classnames/bind';
import ServiceItemRedirect from '~/components/ServiceItemRedirect';
import SlickButton from '~/components/SlickButton/SlickButton';
import ServiceItemHandbook from '../ServiceItemHandbook';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './ContentWithBackground.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
function ContentWithBackground({ listDataItem, online, title, type, slideNumber }) {
    const ServiceItem = type === 'handbook' ? ServiceItemHandbook : ServiceItemRedirect;
    const classContent = type === 'handbook' ? cx('content__list-handbook') : cx('content__list-video');
    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: !!slideNumber ? slideNumber : 4,
        slidesToScroll: 1,
        prevArrow: <SlickButton type="prev"></SlickButton>,
        nextArrow: <SlickButton type="next"></SlickButton>,
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('content__heading')}>
                    <h2 className={cx('heading')}>{title}</h2>
                    <div className={cx('content-btn')}>
                        <Link
                            to={
                                type === 'doctor'
                                    ? config.routes.doctor
                                    : type === 'handbook'
                                    ? config.routes.handbook
                                    : config.routes.hospital
                            }
                            className={cx('heading__search')}
                        >
                            Xem Thêm{' '}
                        </Link>
                    </div>
                </div>

                <div className={classContent}>
                    <Slider {...settings}>
                        {listDataItem.map((item, index) => {
                            return (
                                <ServiceItem
                                    key={index}
                                    online={online}
                                    data={item}
                                    type={type}
                                    _slider={true}
                                ></ServiceItem>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ContentWithBackground;
