import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

import "./Copy.scss";

const Copy = () => {
  const [modal, toggleModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const openCopyModal = (e) => {
    e.preventDefault();
    if (modal === false) {
      toggleModal(true);
    } else {
      toggleModal(false);
    }
  };

  return (
    <>
      <nav className="copy">
        <button className="copy-button" onClick={openCopyModal}>
          Invite
        </button>
        <div
          className="copy-modal"
          style={{ display: modal === false ? "none" : "block" }}
        >
          <div className="copy-inner">
            <a href="#" className="copy-x" onClick={openCopyModal}>
              <FontAwesomeIcon icon={faTimes} />
            </a>
            <h2>Invite</h2>
            <p>To invite someone to your game, send them the following URL:</p>
            <p className="copy-link">{window.location.href}</p>
            <CopyToClipboard
              text={window.location.href}
              onCopy={() => setCopySuccess("Copied!")}
            >
              <button>
                <FontAwesomeIcon icon={faCopy} className="copy-icon" />
                Copy URL to Clipboard
              </button>
            </CopyToClipboard>
            <span className="copied">{copySuccess}</span>
          </div>
          <div className="modal-bg" onClick={openCopyModal}></div>
        </div>
      </nav>
    </>
  );
};

export default Copy;
