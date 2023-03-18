import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ServiceItemRedirect from '~/components/ServiceItemRedirect';
import SlickButton from '~/components/SlickButton/SlickButton';
import ServiceItemDoctor from '../ServiceItemDoctor';

import styles from './ContentNotBackground.module.scss';
const cx = classNames.bind(styles);

function ContentNotBackground({ listDataItem, online, title, type }) {
    const ServiceRedirect = type === 'doctor' ? ServiceItemDoctor : ServiceItemRedirect;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <SlickButton type="prev"></SlickButton>
                <div className={cx('content__heading')}>
                    <p className={cx('heading')}>{title}</p>
                    <Link to={'/bac-si'} className={cx('heading__search')}>
                        Xem thêm
                    </Link>
                </div>
                <div className={cx('content__list-video')}>
                    {listDataItem.map((item, index) => {
                        return <ServiceRedirect key={index} online={online} type={type} data={item}></ServiceRedirect>;
                    })}
                </div>
                <SlickButton type="next"></SlickButton>
            </div>
        </div>
    );
}

export default ContentNotBackground;
