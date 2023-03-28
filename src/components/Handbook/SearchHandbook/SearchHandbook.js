import classNames from 'classnames/bind';
import styles from './SearchHandbook.module.scss';

const cx = classNames.bind(styles);

function SearchHandbook({ specialties, specialtyId, title, onChangeTitle, onChangeSpecialty, onClickSearch }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('search-title')}>Tìm kiếm</h3>
            <div className={cx('search-content')}>
                <div className={cx('search-by-name')}>
                    <label>Tìm kiếm bài viết</label>
                    <div>
                        <input
                            placeholder="Tìm kiếm bài viết"
                            className={cx('search-input-name')}
                            value={title}
                            onChange={(e) => {
                                onChangeTitle(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <div className={cx('search-by-location')}>
                    <label>Danh sách chuyên khoa </label>
                    <div className={cx('search-by-specialty')}>
                        <select
                            defaultValue={!!specialtyId ? Number(specialtyId) : 0}
                            className={cx('specialty-list')}
                            onChange={(e) => {
                                onChangeSpecialty(e.target.value);
                            }}
                        >
                            <option value={0}>{'---Chọn chuyên khoa---'}</option>
                            {!!specialties.content &&
                                specialties.content.map((item, index) => {
                                    return Number(specialtyId) === item.id ? (
                                        <option key={index} value={item.id} selected>
                                            {item.name}
                                        </option>
                                    ) : (
                                        <option key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                        </select>
                        <button className={cx('btn-search')} onClick={() => onClickSearch()}>
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchHandbook;
