import { useEffect, useState } from "react";
import axios from "axios";
import Repo from "../Components/Repo";
import Pagination from "../Components/Pagination";
import Search from "../Components/Search";

export default function HomePage() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage, setReposPerPage] = useState(6);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (screenWidth < 578) {
            setReposPerPage(3);
        } else if (screenWidth < 769) {
            setReposPerPage(4);
        } else {
            setReposPerPage(6)
        }
    }, [screenWidth]);

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
