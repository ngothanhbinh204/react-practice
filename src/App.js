import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <div className="my-3 flex justify-between items-center add-new">
            <span>List Users</span>
          </div>
          <TableUsers />
        </Container>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
