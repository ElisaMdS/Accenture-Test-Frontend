import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Backdrop from "./components/Backdrop";
import Barchart from "./components/Barchart";
import Table from "./components/Table";
import fetchData from "./components/Barchart";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <>
      <Header openSidebar={toggleSidebar} />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />

      <main>
        <Container>
          <Row className="text-center py-2">
            <Barchart />
          </Row>

          <Row className="text-center py-4">
            <Table />
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
