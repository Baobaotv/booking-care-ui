import { faCircleXmark, faSearch, faSpider } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import searchAllService from '~/service/SearchAllService';
import { useEffect, useRef, useState } from 'react';
import config from '~/config';
import { useDebounce } from '~/hooks';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Slider.module.scss';
import ServiceItem from './ServiceItem';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Slider() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(true);
    const debounce = useDebounce(searchValue, 500);
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValueInput = e.target.value;
        if (searchValueInput.startsWith(' ')) return;
        setSearchValue(searchValueInput);
    };

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            const result = await searchAllService.searchAllByFullText(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]);

    const renderItems = (attrs) => {
        return (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <h3>Tìm kiếm</h3>
                {searchResult.map((item, index) => {
                    let url =
                        item.tableName === 'HANDBOOK'
                            ? config.routes.handbookDetail + '?id=' + item.id
                            : item.tableName === 'HOSPITAl'
                            ? config.routes.hospitalDetail + '?id=' + item.id
                            : item.tableName === 'USER'
                            ? config.routes.doctorDetail + '?id=' + item.id
                            : config.routes.specialtyDetail + '?id=' + item.id;
                    return (
                        <Link key={index} to={url} className={cx('search-element')}>
                            <div className={cx('search-element-content')}>
                                <div className={cx('img-item')}>
                                    <img
                                        src={!!item ? item.img : images.avatarDefault}
                                        alt=""
                                        className={cx('avatar')}
                                    />
                                </div>
                                <div className={cx('content')}>
                                    <p className={cx('title')}>{item.title}</p>
                                    <span
                                        className={cx('desc')}
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    ></span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cx('slider')} id={'sliderId'}>
            <div className={cx('wrapper-result-tippy')}>
                <div className={cx('show-tippy')} id={'show-tippy'}></div>
            </div>
            <div className={cx('slider-content')}>
                <h1 className={cx('slider_content-heading')}>
                    Nền Tảng Y Tế
                    <br></br>
                    <b>Chăm Sóc Sức Khỏe Toàn Diện </b>
                </h1>

                <Tippy
                    placement="bottom-start"
                    visible={showResult && searchResult.length > 0}
                    interactive
                    render={(attrs) => renderItems(attrs)}
                    onClickOutside={handleHideResult}
                    popperOptions={{ strategy: 'fixed' }}
                    appendTo={() => document.getElementById('show-tippy')}
                    zIndex={99999}
                >
                    <div className={cx('slider-search')}>
                        <FontAwesomeIcon icon={faSearch} className={cx('header__search-btn-icon')}></FontAwesomeIcon>
                        <input
                            type="text"
                            ref={inputRef}
                            value={searchValue}
                            className={cx('slider-input')}
                            placeholder="Search here..."
                            onChange={handleChange}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && !loading && (
                            <button
                                className={cx('clear')}
                                onClick={() => {
                                    setSearchValue('');
                                    inputRef.current.focus();
                                }}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpider} />}
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
