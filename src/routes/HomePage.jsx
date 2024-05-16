import { useEffect, useState } from "react";
import axios from "axios";
import Repo from "../Components/Repo";
import Pagination from "../Components/Pagination";
import Search from "../Components/Search";

export default function HomePage() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(6);

    useEffect(() => {
        (() => {
            setLoading(true);
            axios
                .get("https://api.github.com/users/godswillnwabu/repos", {
                    headers: {
                        Authorization:
                            "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",
                    },
                })
                .then((response) => {
                    setRepos(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    alert("error fetching data:" + error);
                });
        })();
    }, []);

    //Get Current Repos
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <Search />
            <Repo repos={currentRepos} loading={loading} />
            <Pagination
                reposPerPage={reposPerPage}
                totalRepos={repos.length}
                paginate={paginate}
            />
        </div>
    )
}
