import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import "../App.css";

export default function SingleRepo() {
    const [repo, setRepo] = useState([]);
    const [loading, setLoading] = useState(false);
    const { name } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        (() => {
            setLoading(true);
            axios
                .get(`https://api.github.com/repos/godswillnwabu/${name}`, {
                    headers: {
                        Authorization: "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",
                    },
                })
                .then((response) => {
                    setRepo(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    navigate('/ErrorRepo')
                })
        })();
    },);

    return (
        <div className="singleRepoPage">
            {loading}
            <div>
                <Link to={"/"}>
                    <button className="repoBackbutton">
                        Back
                    </button>
                </Link>
                <div className="singleRepoContainer">
                    <h1 className="repoName">{repo.name}</h1>
                    <div className="repoDetails">
                        <div className="repoTitle">
                            <img
                                src={repo.owner ? `${repo.owner.avatar_url}` : ""}
                                alt="author"
                                className="repoImage"
                            />
                            <h2 className="repoAuthor">
                                {repo.owner ? `${repo.owner.login}` : ""}
                            </h2>
                        </div>
                        <div className="repoDate">
                            <p>Date Created: {repo.created_at}</p>
                            <p>Default Branch: {repo.default_branch}</p>
                            <p>Last commit: {repo.pushed_at}</p>
                        </div>
                    </div>
                    <ul className="repoList">
                        <a
                            href={`https://github.com/godswillnwabu/${name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li className="repoItems">
                                Github Repository
                            </li>
                        </a>
                        <li>Language: {repo.language}</li>
                        {repo.description ? <li>{repo.description}</li> : ""}
                        <li>Visibility: {repo.visibility}</li>
                        <li>Forks: {repo.forks}</li>
                        <li>Open issues: {repo.open_issues}</li>
                        <li>Watchers: {repo.watchers}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}