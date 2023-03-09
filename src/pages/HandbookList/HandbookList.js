import classNames from 'classnames/bind';
import ItemHandbookHorizontal from '~/components/Handbook/ItemHandbookHorizontal/ItemHandbookHorizontal';
import SearchHandbook from '~/components/Handbook/SearchHandbook';
import LinkToPage from '~/components/helper/LinkToPage';
import Pagination from '~/components/helper/Pagination';
import styles from './HandbookList.module.scss';

const cx = classNames.bind(styles);

function HandBookList({ specialty }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Cẩm nang/ Danh sách bài viết'}></LinkToPage>
                {!!specialty ? (
                    <div className={cx('handbook-list-title')}>
                        <h2>Chuyên khoa: {specialty}</h2>
                    </div>
                ) : (
                    <SearchHandbook></SearchHandbook>
                )}
                <div className={cx('handbook-list')}>
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

export default HandBookList;
