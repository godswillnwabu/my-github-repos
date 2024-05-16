import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p style={{ fontFamily: "Poppins", fontWeight: "500" }}>Sorry, an unexpected error has occured.</p>
            <p style={{ fontSize: "4rem" }}>404</p>
            <div >
                <i style={{ color: "red" }}>{error.statusText || error.message}</i>
            </div>
            <p>Go to <Link to="/"><b style={{ fontSize: "20px", fontFamily: "Poppins", letterSpacing: "0px" }}>Home page</b></Link></p>
        </div>
    );
}