import classNames from 'classnames/bind';
import styles from './SearchHandbook.module.scss';

const cx = classNames.bind(styles);

function SearchHandbook() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('search-title')}>Tìm kiếm</h3>
            <div className={cx('search-content')}>
                <div className={cx('search-by-name')}>
                    <label>Tìm kiếm bài viết</label>
                    <div>
                        <input placeholder="Tìm kiếm bài viết" className={cx('search-input-name')}></input>
                    </div>
                </div>
                <div className={cx('search-by-location')}>
                    <label>Danh sách chuyên khoa </label>
                    <div className={cx('search-by-specialty')}>
                        <select className={cx('specialty-list')}>
                            <option>Răng hàm mặt</option>
                            <option>Thần kinh</option>
                            <option>Tim mạch</option>
                            <option>Đông y cổ truyền</option>
                            <option>Xương khớp</option>
                        </select>
                        <button className={cx('btn-search')}>Tìm kiếm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchHandbook;
