// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";
// import {Card, Row, Col, Button} from "react-bootstrap";
import { Auth } from "aws-amplify";

function FederatedSignIn(props) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        In order to proceed please click to authenticate
      </div>
      <button
        block
        variant="success"
        onClick={() =>
          Auth.federatedSignIn({ provider: props.federatedIdName })
        }
      >
        Federated Sign In
      </button>
    </div>
  );
}

export default FederatedSignIn;
