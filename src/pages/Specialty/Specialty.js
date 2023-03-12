import classNames from 'classnames/bind';
import ItemHandbookHorizontal from '~/components/helper/ItemHorizontal/ItemHorizontal';
import LinkToPage from '~/components/helper/LinkToPage';
import Pagination from '~/components/helper/Pagination';
import styles from './Specialty.module.scss';

const cx = classNames.bind(styles);

function Specialty() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Chuyên khoa'}></LinkToPage>
                <div className={cx('specialty-title')}>
                    <p>Danh sách chuyên khoa</p>
                    <hr></hr>
                </div>
                <div className={cx('specialty-list')}>
                    <ItemHandbookHorizontal></ItemHandbookHorizontal>
                    <ItemHandbookHorizontal></ItemHandbookHorizontal>
                    <ItemHandbookHorizontal></ItemHandbookHorizontal>
                    <ItemHandbookHorizontal></ItemHandbookHorizontal>
                    <ItemHandbookHorizontal></ItemHandbookHorizontal>
                </div>
            </div>
            <Pagination></Pagination>
        </div>
    );
}

export default Specialty;
