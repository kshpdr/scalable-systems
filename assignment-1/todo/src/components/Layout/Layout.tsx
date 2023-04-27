import { createEffect, createSignal } from "solid-js";
import { Show } from "solid-js/web";
import { Container, Header, Content } from "./Layout.styles";
import { JSX } from "solid-js";
import {A} from '@solidjs/router'


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
        <Header>
          {props.headerContent}
          <A href='/'>Home</A>
          <A href='/new'>New TODO</A> 
          <A href='/about'>Impressum</A> 
          <A href='/edit'>Edit TODO</A> 
        </Header>
      </Show>
      <Content>{props.children}</Content>
    </Container>
  );
};

export default Layout;
