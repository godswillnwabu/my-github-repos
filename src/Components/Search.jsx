import { useState } from "react";
import { useNavigate } from "react-router";
import "../App.css";

export default function Search() {

    const [repo, setRepo] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault(repo);
        navigate(repo)
    };

    return (
        <div>
            <form
                id="form"
                onSubmit={(e) => handleSearch(e)}
            >
                <input
                    className="searchInput"
                    type="search"
                    id="SearchRepo"
                    name="search"
                    placeholder="Search for a repository"
                    onChange={(e) => setRepo(e.target.value)}
                    value={repo}
                />
                <button className="searchBtn">
                    Search
                </button>
            </form>
        </div>
    )
}

// .filter((repo) => {
//   return search.toLowerCase() === "" ? repo : repo.name.toLowerCase().includes(search)
// })