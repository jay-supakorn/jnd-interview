import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="max-w-md flex flex-col justify-center w-full items-center mx-auto">
                <form className="w-full">
                    <input
                        type="text"
                        className="py-3 px-4 border w-full rounded-full hover:border-none outline-none"
                        placeholder="Username and Email"
                        value=""
                    />
                </form>
            </div>
        );
    }
}

export default connect(null, null)(Login);
