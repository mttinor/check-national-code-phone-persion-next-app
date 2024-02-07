import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Text } from "../share/styles";


export default function navbar() {
  return (
    <Navbar
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 2px 18px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 2px 2px 2px",
      }}
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Text fontFamily="YekanBold" fontSize="25px">
            تکمیل اطلاعات
          </Text>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
