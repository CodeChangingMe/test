import "./styles.css";
import Loadable from "react-loadable";
// import Loading from './my-loading-component';
import React from "react";

const LoadableComponent = Loadable({
  loader: () => import("./my-component"),
  loading() {
    return <div>Loading...</div>;
  }
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
