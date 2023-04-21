import { createEffect, createSignal } from "solid-js";
import { Show } from "solid-js/web";
import { Container, Header, Content } from "./Layout.styles";
import { JSX } from "solid-js";

interface LayoutProps {
  headerContent?: JSX.Element;
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  const [showHeader, setShowHeader] = createSignal(!!props.headerContent);

  createEffect(() => {
    setShowHeader(!!props.headerContent);
  });

  return (
    <Container>
      <Show when={showHeader()}>
        <Header>{props.headerContent}</Header>
      </Show>
      <Content>{props.children}</Content>
    </Container>
  );
};

export default Layout;
