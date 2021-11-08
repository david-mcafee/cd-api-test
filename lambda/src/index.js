import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";

import Amplify from "aws-amplify";

Amplify.configure({
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: "us-east-2:26d25740-75f5-46b0-b753-c7c1ee377fb2",

    // REQUIRED - Amazon Cognito Region
    region: "us-east-2",

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    identityPoolRegion: "us-east-2",

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "us-east-2_S8y3WX9S6",

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "56v9m70ptvt5p97i7auna1p3el",

    mandatorySignIn: false,

    // OPTIONAL - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    // cookieStorage: {
    //   // REQUIRED - Cookie domain (only required if cookieStorage is provided)
    //   domain: "localhost",
    //   // OPTIONAL - Cookie path
    //   path: "/",
    //   // OPTIONAL - Cookie expiration in days
    //   expires: 365,
    //   // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    //   sameSite: "lax",
    //   // OPTIONAL - Cookie secure flag
    //   // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
    //   secure: false,
    // },

    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: "USER_SRP_AUTH",
  },
  aws_appsync_graphqlEndpoint: "https://cd1-test.iibup.com/graphql",
  aws_appsync_region: "us-west-2",
  aws_appsync_authenticationType: "AWS_LAMBDA",
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
