import classNames from 'classnames/bind';
import ItemHandbookHorizontal from '~/components/helper/ItemHorizontal/ItemHorizontal';
import LinkToPage from '~/components/helper/LinkToPage';
import Pagination from '~/components/helper/Pagination';
import config from '~/config';
import styles from './Specialty.module.scss';

const cx = classNames.bind(styles);

function Specialty({ data, onClickPage }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <LinkToPage title={'Chuyên khoa'}></LinkToPage>
                <div className={cx('specialty-title')}>
                    <p>Danh sách chuyên khoa</p>
                    <hr></hr>
                </div>
                <div className={cx('specialty-list')}>
                    {!!data.content &&
                        data.content.map((item, index) => {
                            return (
                                <ItemHandbookHorizontal
                                    key={index}
                                    data={item}
                                    type={'specialty'}
                                ></ItemHandbookHorizontal>
                            );
                        })}
                    {/* <ItemHandbookHorizontal></ItemHandbookHorizontal>
                    <ItemHandbookHorizontal></ItemHandbookHorizontal>
                    <ItemHandbookHorizontal></ItemHandbookHorizontal>
                    <ItemHandbookHorizontal></ItemHandbookHorizontal>
                    <ItemHandbookHorizontal></ItemHandbookHorizontal> */}
                </div>
            </div>
            <Pagination
                totalPages={data.totalPages}
                pageSize={data.size}
                currentPage={data.number}
                to={config.routes.specialty}
                onClickPage={onClickPage}
            ></Pagination>
        </div>
    );
}

export default Specialty;
