import React, { Component } from "react";
import { render } from "react-dom";
import Frame from "./Frame";
import "./style.scss";

class App extends Component {

  render() {
    return (
      <>
        <Frame type={"instagram"}>
          <img src="https://picsum.photos/143/165/"/>
        </Frame>
        <Frame type={"instagram"}>
          <img src="https://picsum.photos/142/166/"/>
        </Frame>
        <Frame type={"phone"}>
          <img src="https://picsum.photos/90/165"/>
        </Frame>
        <Frame type={"laptop"}>
          <img src="https://picsum.photos/142/166"/>
        </Frame>
        <Frame type={"invitation"}>
          <img src="https://picsum.photos/118/164"/>
        </Frame>
        <Frame type={"datacode"}>
          <img src="https://picsum.photos/118/164"/>
        </Frame>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
