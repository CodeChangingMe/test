import React from "react";

class Test extends React.Component {
  componentDidMount() {
    window.onerror = () => {
      console.log("wulei");
    };

    "".replaceAll2();
  }

  render() {
    return <div>123456</div>;
  }
}

export default Test;
