import { useState } from "react";
import "./Modal.css";
import "../App.css";
import { RiCloseLine } from "react-icons/ri";

const ModalButton = () => {

    const Modal = ({ setIsOpen }) => {
        return (
            <>
                <div className="darkBG" onClick={() => setIsOpen(true)} />
                <div className="centered">
                    <div className="modal">
                        <div className="modalHeader">
                            <h5 className="heading">you may</h5>
                        </div>
                        <button className="closeBtn" onClick={() => setIsOpen(false)}>
                            <RiCloseLine style={{ marginBottom: "-3px" }} />
                        </button>
                        <div className="modalContent">
                            <ul>
                                <li className="gitRepoAction"><a target="_blank" rel="noreferrer" href="https://web.postman.co/">Create a Repo</a></li>
                                <li className="gitRepoAction"><a target="_blank" rel="noreferrer" href="https://web.postman.co/">Update a Repo</a></li>
                                <li className="gitRepoAction"><a target="_blank" rel="noreferrer" href="https://web.postman.co/">Delete a Repo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    };


    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="primaryBtn" onClick={() => setIsOpen(true)}>
                GitHub Action
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    )
};

export default ModalButton;