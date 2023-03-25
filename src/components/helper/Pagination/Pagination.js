import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ totalPages, pageSize, currentPage, to, onClickPage }) {
    const classElementPrev =
        currentPage - 1 >= 0
            ? cx('pagination-item__btn')
            : cx('pagination-item__btn', 'pagination-item__btn-in-active');
    const classElementNext =
        currentPage + 1 < totalPages
            ? cx('pagination-item__btn')
            : cx('pagination-item__btn', 'pagination-item__btn-in-active');
    return (
        <ul className={cx('pagination')}>
            <li className={cx('pagination-item')}>
                <button
                    onClick={() => onClickPage(currentPage - 1 >= 0 ? currentPage - 1 : currentPage)}
                    className={classElementPrev}
                >
                    <FontAwesomeIcon icon={faAngleLeft} className={cx('pagination-item__icon')}></FontAwesomeIcon>
                </button>
            </li>

            {Array.from({ length: totalPages }).map((value, index) => {
                const classElement =
                    index === currentPage ? cx('pagination-item', 'pagination-item__active') : cx('pagination-item');
                return (
                    <li className={classElement} key={index}>
                        <button onClick={() => onClickPage(index)} className={cx('pagination-item__btn')}>
                            {Number(index) + 1}
                        </button>
                    </li>
                );
            })}

            <li className={cx('pagination-item')}>
                <button
                    onClick={() => onClickPage(currentPage + 1 < totalPages ? currentPage + 1 : currentPage)}
                    className={classElementNext}
                >
                    <FontAwesomeIcon icon={faAngleRight} className={cx('pagination-item__icon')}></FontAwesomeIcon>
                </button>
            </li>
        </ul>
    );
}

export default Pagination;
