import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ServiceItemRedirect from '~/components/ServiceItemRedirect';
import SlickButton from '~/components/SlickButton/SlickButton';
import ServiceItemDoctor from '../ServiceItemDoctor';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './ContentNotBackground.module.scss';
import config from '~/config';
const cx = classNames.bind(styles);

function ContentNotBackground({ listDataItem, online, title, type, _slider }) {
    const ServiceRedirect = type === 'doctor' ? ServiceItemDoctor : ServiceItemRedirect;
    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <SlickButton type="prev"></SlickButton>,
        nextArrow: <SlickButton type="next"></SlickButton>,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('content__heading')}>
                    <p className={cx('heading')}>{title}</p>
                    <Link
                        to={type === 'doctor' ? config.routes.doctor : config.routes.specialty}
                        className={cx('heading__search')}
                    >
                        Xem thêm
                    </Link>
                </div>
                <div className={cx('content__list-video')}>
                    <Slider {...settings}>
                        {listDataItem.map((item, index) => {
                            return (
                                <ServiceRedirect
                                    key={index}
                                    online={online}
                                    type={type}
                                    data={item}
                                    _slider={true}
                                ></ServiceRedirect>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ContentNotBackground;
