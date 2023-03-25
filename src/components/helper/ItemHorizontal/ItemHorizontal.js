import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import styles from './ItemHorizontal.module.scss';
const cx = classNames.bind(styles);

function ItemHorizontal({ data, type }) {
    const content = {};
    if (type === 'specialty') {
        content.to = config.routes.specialtyDetail + '?id=' + data.id;
        content.title = data.name;
        content.desc = data.description;
        content.img = data.img;
    } else {
        content.to = config.routes.specialtyDetail + '?id=';
        content.title = '8 bác sĩ Thần kinh giỏi và nhiều kinh nghiệm ở Hà Nội (Phần 1)';
        content.desc =
            'BookingCare gợi ý 8 bác sĩ cơ xương khớp giỏi tại Hà Nội nhiều kinh nghiệm để bệnh nhân và người nhà tham khảo gồm các thông tin: Thế mạnh chuyên sâu, lịch khám, giá khám, cách đặt hẹn trước.';
        content.img = images.handbookAvatar;
    }
    return (
        <Link className={cx('wrapper')} to={content.to}>
            <img className={cx('hospital-avatar')} src={content.img} alt="handbook-avatar"></img>
            <div className={cx('handbook-information')}>
                <p className={cx('handbook-title')}>{content.title}</p>
                <span className={cx('handbook-description')} dangerouslySetInnerHTML={{ __html: content.desc }}></span>
            </div>
        </Link>
    );
}

export default ItemHorizontal;
