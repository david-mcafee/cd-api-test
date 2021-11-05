import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";

import Amplify from "aws-amplify";

Amplify.configure({
  aws_appsync_graphqlEndpoint: "https://cd1-test.iibup.com/graphql/",
  aws_appsync_region: "us-west-2",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-tqvyyobl7fbaxg76qo44sv4jwy",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
