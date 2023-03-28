import classNames from 'classnames/bind';
import ItemHorizontal from '~/components/helper/ItemHorizontal/ItemHorizontal';
import SearchHandbook from '~/components/Handbook/SearchHandbook';
import LinkToPage from '~/components/helper/LinkToPage';
import Pagination from '~/components/helper/Pagination';
import styles from './HandbookList.module.scss';

const cx = classNames.bind(styles);

function HandBookList({
    specialty,
    specialties,
    handbooks,
    onClickPage,
    specialtyId,
    title,
    onChangeTitle,
    onChangeSpecialty,
    onClickSearch,
}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Cẩm nang/ Danh sách bài viết'}></LinkToPage>
                {!!specialty ? (
                    <div className={cx('handbook-list-title')}>
                        <h2>Chuyên khoa: {specialty}</h2>
                    </div>
                ) : (
                    <SearchHandbook
                        specialties={specialties}
                        specialtyId={specialtyId}
                        onChangeTitle={onChangeTitle}
                        title={title}
                        onChangeSpecialty={onChangeSpecialty}
                        onClickSearch={onClickSearch}
                    ></SearchHandbook>
                )}
                <div className={cx('handbook-list')}>
                    {!!handbooks.content &&
                        handbooks.content.map((item, index) => {
                            return <ItemHorizontal key={index} type={'handbook'} data={item}></ItemHorizontal>;
                        })}
                </div>
            </div>
            <Pagination
                totalPages={handbooks.totalPages}
                pageSize={handbooks.size}
                currentPage={handbooks.number}
                onClickPage={onClickPage}
            ></Pagination>
        </div>
    );
}

export default HandBookList;
