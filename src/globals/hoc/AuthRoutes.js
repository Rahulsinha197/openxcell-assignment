import React, { Component } from "react";
import Layout from "../layout";

export default function Protected(Children) {
  class AuthenticatedComponent extends Component {
    render() {
      return (
        <div className="authComponent">
          <Layout>
            <Children {...this.props} />
          </Layout>
        </div>
      );
    }
  }
  return AuthenticatedComponent;
}
