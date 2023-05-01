import { Component } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Homepage from "./pages/Homepage";

const App: Component<{}> = () => {
  return (
    <Layout headerContent="Your best TODO app">
      <Routes>
        <Route path="/" component={Homepage} />
        <Route path="/new" component={New} />
        <Route path="/edit" component={Edit} />
        <Route path="/about" component={About} />
      </Routes>
    </Layout>
  );
};

export default App;
