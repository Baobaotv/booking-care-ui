import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Slider.module.scss';
import config from '~/config/config';
import ServiceItem from './ServiceItem';
const cx = classNames.bind(styles);

const searchResults = [
    {
        to: '/chuyen-khoa',
        title: 'Bác sĩ Nguyễn Văn A',
    },
    {
        to: '/cam-nang',
        title: 'Triệu chứng thường gặp của bệnh tiểu đường',
    },
    {
        to: '/benh-vien',
        title: 'Bệnh viện đã khoa Việt Đức',
    },
];

function Slider() {
    const renderItems = () => {
        return (
            <div className={cx('search-result')}>
                <h3>Tìm kiếm</h3>
                {searchResults.map((item, index) => {
                    return (
                        <Link key={index} to={item.to}>
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cx('slider')}>
            <div className={cx('slider-content')}>
                <h1 className={cx('slider_content-heading')}>
                    Nền Tảng Y Tế
                    <br></br>
                    <b>Chăm Sóc Sức Khỏe Toàn Diện </b>
                </h1>
                <Tippy interactive placement="bottom-start" render={renderItems}>
                    <div className={cx('slider-search')}>
                        <FontAwesomeIcon icon={faSearch} className={cx('header__search-btn-icon')}></FontAwesomeIcon>
                        <input type="text" className={cx('slider-input')} placeholder="Search here..." />
                    </div>
                </Tippy>
            </div>
            <div className={cx('slider-selector')}>
                <ul className={cx('slider-selector-list')}>
                    {config.services.map((serviceItem, index) => {
                        return (
                            <li key={index} className={cx('slider-selector-item')}>
                                <ServiceItem serviceItem={serviceItem}></ServiceItem>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Slider;
