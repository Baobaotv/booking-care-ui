import classNames from 'classnames/bind';
import ServiceItemRedirect from '~/components/ServiceItemRedirect';
import SlickButton from '~/components/SlickButton/SlickButton';
import ServiceItemHandbook from '../ServiceItemHandbook';

import styles from './ContentWithBackground.module.scss';

const cx = classNames.bind(styles);
function ContentWithBackground({ listDataItem, online, title, type }) {
    const ServiceItem = type === 'handbook' ? ServiceItemHandbook : ServiceItemRedirect;
    const classContent = type === 'handbook' ? cx('content__list-handbook') : cx('content__list-video');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <SlickButton type="prev"></SlickButton>
                <div className={cx('content__heading')}>
                    <h2 className={cx('heading')}>{title}</h2>
                    <div className={cx('content-btn')}>
                        <a href="/chuyen-khoa" className={cx('heading__search')}>
                            Xem Thêm{' '}
                        </a>
                    </div>
                </div>

                <div className={classContent}>
                    {listDataItem.map((item, index) => {
                        return <ServiceItem key={index} online={online}></ServiceItem>;
                    })}
                </div>
                <SlickButton type="next"></SlickButton>
            </div>
        </div>
    );
}

export default ContentWithBackground;
