import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import About from "./pages/About";
import Edit from "./pages/Edit";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout/Layout";
import New from "./pages/New";

const App: Component<{}> = () => {
  return (
    <Layout>
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
