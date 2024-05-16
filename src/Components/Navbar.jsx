import { FaGithub } from "react-icons/fa";
import Toggle from "./ToggleButton";
import ModalButton from "./ModalButton";

export default function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-cta">
                    <ModalButton />
                </div>
                <div className="nav-header">
                    <FaGithub className="github-icon" />
                    <h1 className="github-title">Godswill&apos;s GitHub Repos</h1>
                </div>
                <div className="nav-toggler">
                    <Toggle />
                </div>
            </div>
        </nav>
    )
}