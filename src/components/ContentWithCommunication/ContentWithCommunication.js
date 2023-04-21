import classNames from 'classnames/bind';
import styles from './ContentWithCommunication.module.scss';
import config from '~/config/config';
import CommunicationItem from '../CommunicationItem';

const cx = classNames.bind(styles);
function ContentWithCommunication({ title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('content__heading')}>
                    <h2 className={cx('heading')}>{title}</h2>
                </div>

                <div className={cx('content')}>
                    <iframe
                        width={'560'}
                        height={'315'}
                        src={'https://www.youtube.com/embed/FyDQljKtWnI'}
                        title={'YouTube video player'}
                    ></iframe>
                    <div className={cx('comunicate-content')}>
                        <ul>
                            {config.communicationContents.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <CommunicationItem content={item}></CommunicationItem>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentWithCommunication;
