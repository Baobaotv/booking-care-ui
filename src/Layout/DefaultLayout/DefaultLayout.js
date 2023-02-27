import classNames from 'classnames/bind';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')} id="app">
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
