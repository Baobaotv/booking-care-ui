import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ServiceItemHandbook.module.scss';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);
function ServiceItemHandbook({ data }) {
    const temporaryDes =
        'BookingCare gợi ý 8 bác sĩ cơ xương khớp giỏi tại Hà Nội nhiều kinh nghiệm để bệnh nhân và người nhà tham khảo gồm các thông tin: Thế mạnh chuyên sâu, lịch khám, giá khám, cách đặt hẹn trước.';
    return (
        <Link className={cx('content__handbook')} to={config.routes.handbookDetail + '?id=' + (!!data ? data.to : '1')}>
            <div className={cx('content__handbook-item')}>
                <img src={!!data ? data.img : images.serviceItemRedirect} alt="" />
                <div className={cx('content__handbook-description')}>
                    <p className={cx('content__handbook-title')}>
                        {!!data ? data.title : 'Top 6 địa chỉ khám Cơ xương khớp uy tín Hà Nội (Phần 4)'}
                    </p>

                    <p className={cx('content__handbook-short-description')}>
                        <span dangerouslySetInnerHTML={{ __html: !!data ? data.description : temporaryDes }}></span>
                        {/* {!!data ? data.description : ''} */}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default ServiceItemHandbook;
