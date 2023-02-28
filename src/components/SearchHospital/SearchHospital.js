import classNames from 'classnames/bind';
import styles from './SearchHospital.module.scss';
const cx = classNames.bind(styles);

function SearchHospital() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('search-title')}>Tìm kiếm</h3>
            <div className={cx('search-content')}>
                <div className={cx('search-by-name')}>
                    <label>Tìm kiếm tên bệnh viện</label>
                    <div>
                        <input placeholder="Tên bệnh viện" className={cx('search-input-name')}></input>
                        <button className={cx('btn-search')}>Tìm kiếm</button>
                    </div>
                </div>
                <div className={cx('search-by-location')}>
                    <label>Tìm kiếm theo vị trí hiện tại </label>
                    <div className={cx('search-by-location-address')}>
                        <input placeholder="Tên bệnh viện" className={cx('search-input-address')}></input>
                    </div>
                    <div>
                        <input placeholder="Kinh độ " className={cx('search-input-lat')}></input>
                        <input placeholder="Vĩ độ " className={cx('search-input-lon')}></input>
                        <button className={cx('btn-search')}>Tìm kiếm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchHospital;
