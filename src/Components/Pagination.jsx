import { useState } from "react";
import { Link } from "react-router-dom";

export default function Pagination({ reposPerPage, totalRepos, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
        pageNumbers.push(i);
    }

    const [activePage, setActivePage] = useState(1);

    const handlePageClick = (number) => {
        setActivePage(number);
        paginate(number);
    };

    return (
        <>
            <div className="pagination">
                {pageNumbers.map((number) => (
                    <p key={number} className={`page-item ${activePage === number ? "active" : ""}`}>
                        <Link
                            href="/"
                            className="page-link"
                            onClick={() => {
                                handlePageClick(number);
                                paginate(number);
                            }}
                        >{number}
                        </Link>
                    </p>
                ))}
            </div>
        </>
    )
}