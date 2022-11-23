import React from "react";
import _ from "lodash";

const Pagi = (props) => {

    const { itemCount, pageSize, onPageChange, currentPage } = props;


    const pageChange = Math.ceil(itemCount / pageSize);
    if (pageChange === 1) return null;
    const page = _.range(1, pageChange + 1)


    return (
        <nav >
            <ul className="pagi">
                {page.map(page =>
                    <li key={page} >
                        <p className={page === currentPage ? 'valuepagi active' : 'valuepagi'} onClick={() => onPageChange(page)}>{page}</p>
                    </li>)}
            </ul>
        </nav>

    );
}

export default Pagi; 