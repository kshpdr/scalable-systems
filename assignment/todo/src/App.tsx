import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import About from "./pages/About";
import Edit from "./pages/Edit";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout/Layout";
import New from "./pages/New";
import { resultList } from "./api/todos"

const App: Component<{}> = () => {
  console.log(resultList)
  return (
    <Layout>
      <Routes>
        <Route path="/" component={Homepage} />
        <Route path="/new" component={New} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/about" component={About} />
      </Routes>
    </Layout>
  );
};

export default App;
