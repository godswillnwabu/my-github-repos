import { useNavigate } from "react-router";

export default function Repos({ repos, loading }) {
    const navigate = useNavigate();

    if (loading) {
        return <h2 style={{ display: "grid", placeItems: "center", color: "black" }}>Loading...</h2>
    }

    const handleClick = (name) => {
        navigate(name);
    };

    return (
        <div
            className="posts">
            {repos.map((repo) => (
                <div className="post" key={repo.id} onClick={() => handleClick(repo.name)}>
                    <h1 className="post-title" style={{ overflow: "hidden" }}>{repo.name}</h1>
                    <p className="post-body">Author: {repo.owner.login}</p>
                </div>
            ))}
        </div>
    );
}