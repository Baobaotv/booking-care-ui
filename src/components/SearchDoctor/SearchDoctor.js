import classNames from 'classnames/bind';
import styles from './SearchDoctor.module.scss';
const cx = classNames.bind(styles);

function SearchDoctor({
    hospitals,
    specialtys,
    doctorName,
    setDoctorName,
    hospitalId,
    setHospitalId,
    specialtyId,
    setSpecialtyId,
    searchDoctor,
}) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('search-title')}>Tìm kiếm bác sĩ</h3>
            <div className={cx('search-content')}>
                <div className={cx('search-by-name')}>
                    <label>Tìm kiếm tên bác sĩ</label>
                    <div>
                        <input
                            placeholder="Tên bệnh viện"
                            className={cx('search-input-name')}
                            value={doctorName}
                            onChange={(e) => setDoctorName(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className={cx('search-by-selection')}>
                    <div>
                        <select onChange={(e) => setHospitalId(e.target.value)} value={!hospitalId ? 0 : hospitalId}>
                            <option value={0}>--Chọn bệnh viện--</option>
                            {!!hospitals &&
                                hospitals.content &&
                                hospitals.content.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                        </select>
                        <select onChange={(e) => setSpecialtyId(e.target.value)} value={!specialtyId ? 0 : specialtyId}>
                            <option value={0}>--Chọn chuyên khoa--</option>
                            {!!specialtys &&
                                specialtys.content &&
                                specialtys.content.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                        </select>
                        <button className={cx('btn-search')} onClick={searchDoctor}>
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchDoctor;
