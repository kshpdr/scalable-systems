import { Container, Content, Brand } from "./Layout.styles";
import { JSX } from "solid-js";
import { Nav, Navbar } from "solid-bootstrap";


interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Brand>
          <Navbar.Brand href="/">Best todo app</Navbar.Brand>
        </Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav class="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Impressum</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Content>{props.children}</Content>
    </Container>
  );
};

export default Layout;
