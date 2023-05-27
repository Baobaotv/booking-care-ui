import classNames from 'classnames/bind';
import { useLoadScript } from '@react-google-maps/api';
import SearchByDirection from '../SearchByDirection';
import styles from './SearchHospital.module.scss';
const cx = classNames.bind(styles);

function SearchHospital({ searchAllByName, name, setName, setTypeSearch, setHospitals }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBKyKM9Ni3ph5yXc-bx7PJRJPbuwQXn928',
        region: 'VI',
        language: 'vi',
        libraries: ['places'],
    });
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('search-title')}>Tìm kiếm</h3>
            <div className={cx('search-content')}>
                <div className={cx('search-by-name')}>
                    <label>Tìm kiếm tên bệnh viện</label>
                    <div>
                        <input
                            placeholder="Tên bệnh viện"
                            className={cx('search-input-name')}
                            value={name}
                            onChange={(e) => {
                                setTypeSearch('NAME');
                                setName(e.target.value);
                            }}
                        ></input>
                        <button className={cx('btn-search')} onClick={searchAllByName}>
                            Tìm kiếm
                        </button>
                    </div>
                </div>
                {!!isLoaded && (
                    <div className={cx('search-by-location')}>
                        <label>Tìm kiếm theo vị trí hiện tại </label>
                        <SearchByDirection
                            setTypeSearch={setTypeSearch}
                            setHospitals={setHospitals}
                        ></SearchByDirection>
                        {/* <div className={cx('search-by-location-address')}>
                        <input placeholder="Tên bệnh viện" className={cx('search-input-address')}></input>
                    </div> */}
                        {/* <div>
                        <input placeholder="Kinh độ " className={cx('search-input-lat')}></input>
                        <input placeholder="Vĩ độ " className={cx('search-input-lon')}></input>
                        <button className={cx('btn-search')}>Tìm kiếm</button>
                    </div> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchHospital;
