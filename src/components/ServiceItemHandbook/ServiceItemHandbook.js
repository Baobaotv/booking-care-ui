import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ServiceItemHandbook.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function ServiceItemHandbook() {
    return (
        <Link className={cx('content__handbook')}>
            <div className={cx('content__handbook-item')}>
                <img src={images.serviceItemRedirect} alt="" />
                <p className={cx('content__handbook-text')}>Top 6 địa chỉ khám Cơ xương khớp uy tín Hà Nội (Phần 4)</p>
            </div>
        </Link>
    );
}

export default ServiceItemHandbook;
