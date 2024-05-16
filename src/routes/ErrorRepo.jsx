import { Link } from "react-router-dom";
import "../App.css"

export default function ErrorRepo() {

    return (
        <div id="error-repo">
            <Link to={"/"}>
                <button className="backToHome">
                    Back to Home Page
                </button>
            </Link>
            <h1 style={{ color: "red" }}>
                Repository Does Not Exist
            </h1>
        </div>
    )
}