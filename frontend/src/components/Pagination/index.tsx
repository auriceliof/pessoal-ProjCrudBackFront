import ReactPaginate from 'react-paginate';
import './styles.css';

type Props = {
    pageCount: number;
    range: number;
}

export default function Pagination( {pageCount, range} : Props ) {

    return (
        <ReactPaginate 
            pageCount={pageCount}
            pageRangeDisplayed={range}
            marginPagesDisplayed={1}
            containerClassName="proj-pagination-container"
            pageLinkClassName="proj-pagination-item"
            breakClassName="proj-pagination-item"  
            previousClassName="proj-pagination-previous"
            nextClassName="proj-pagination-next"
            activeLinkClassName="proj-pagination-link-active"
            disableInitialCallback
            disabledClassName="proj-pagination-inactive"
        />
    );
}
