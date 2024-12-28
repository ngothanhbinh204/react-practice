import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";

function App() {
  const [isShowModalAddnew, setIsShowModalAddNew] = useState(false);

  const handleClose = () => {
    setIsShowModalAddNew(false);
  };
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 flex justify-between items-center add-new">
          <span>List Users</span>
          <button
            className="btn btn-success"
            onClick={() => {
              setIsShowModalAddNew(true);
            }}
          >
            Add New User
          </button>
        </div>

        <TableUsers />
      </Container>

      <ModalAddNew
        show={isShowModalAddnew}
        handleClose={handleClose}
      ></ModalAddNew>
    </div>
  );
}

export default App;
