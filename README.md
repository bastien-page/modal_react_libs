# Modal React component

## Installation

You can install this component with npm or yarn :

    npm i modal_react_libs

or

    yarn add modal_react_libs

## Use in React project

Import the Modal component

    import {Modal} form modal_react_libs

## Example

### App.js

```js
function App() {
  const [openModal, setOpenModal] = useState(false);

  const customModal = {
    backgroundContainer: "rgba(146, 146, 146, 0.6)",
    backgroundColor: "#8ea719",
    topPosition: "50%",
    leftPosition: "50%",
    boxShadow: "5px 5px 15px 5px rgba(0, 0, 0, 0.43)",
    color: "white",
    //fontSize: "20px",
  };

  return (
    <div
      onKeyUp={(e) =>
        (e.code === "Escape" || e.code === "Enter") && setOpenModal(false)
      }
    >
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
```
