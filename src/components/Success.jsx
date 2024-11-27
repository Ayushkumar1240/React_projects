/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success" />
          <h1>Thank You For your submittion</h1>
          <p>You will get an email for furthur procedure</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
