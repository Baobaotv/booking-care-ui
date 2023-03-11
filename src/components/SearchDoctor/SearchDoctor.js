import classNames from 'classnames/bind';
import styles from './SearchDoctor.module.scss';
const cx = classNames.bind(styles);

function SearchDoctor() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('search-title')}>Tìm kiếm bác sĩ</h3>
            <div className={cx('search-content')}>
                <div className={cx('search-by-name')}>
                    <label>Tìm kiếm tên bác sĩ</label>
                    <div>
                        <input placeholder="Tên bệnh viện" className={cx('search-input-name')}></input>
                    </div>
                </div>
                <div className={cx('search-by-selection')}>
                    <div>
                        <select>
                            <option>--Chọn bệnh viện--</option>
                            <option>Bệnh viện bạch mai</option>
                            <option>Bệnh viện việt đức</option>
                            <option>Bệnh viện thận Hà Nôi</option>
                            <option>Bệnh viện K tân Triều</option>
                            <option>Bệnh viện quân đội 108</option>
                        </select>
                        <select>
                            <option>--Chọn chuyên khoa--</option>
                            <option>Rằng hàm mặt</option>
                            <option>Tim mạch</option>
                            <option>Cơ xương khớp</option>
                            <option>Nôị tiết</option>
                            <option>Bệnh viện quân đội 108</option>
                        </select>
                        <button className={cx('btn-search')}>Tìm kiếm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchDoctor;
