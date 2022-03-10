import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const customModal = {
    backgroundContainer: "rgba(146, 146, 146, 0.6)",
    backgroundColor: "#8ea719",
    verticalAlign: "50%",
    horizontalAlign: "50%",
    boxShadow: "5px 5px 15px 5px rgba(0, 0, 0, 0.43)",
    color: "white",
    //fontSize: "20px",
  };

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>Ouvrir la modal</button>

      {openModal && (
        <Modal style={customModal} setOpenModal={setOpenModal}>
          Inscription
        </Modal>
      )}
    </div>
  );
}

export default App;
