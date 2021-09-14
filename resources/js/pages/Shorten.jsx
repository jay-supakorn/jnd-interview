import React, { Component } from "react";
import { connect } from "react-redux";

class Shorten extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>Welcome back Shorten</h1>
            </div>
        );
    }
}

export default connect(null, null)(Shorten);
