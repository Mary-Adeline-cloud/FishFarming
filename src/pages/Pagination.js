import React from "react"

const Pagination =({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for( let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++ ) {
     pageNumbers.push(i);

    }
    return(
    <div className="pagination" style={{position:'static'}}>
        {pageNumbers.map(number =>(
            <li key={number} className="page-item" >
            <a  onClick= {() =>paginate(number)} href="#" className="page-link" style={{position:'static'}}>
                {number}
            </a>
            </li>
        ))}

    </div>
    );
}

export default Pagination;
