import React, { Component } from "react";
import { connect } from "react-redux";
import Service from "../services";
import { login } from "../store/reducers/user";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        };
    }

    inputHandler = (input, event) => {
        this.setState({ [input]: event.target.value });
    };

    loginHandler = async () => {
        let response;
        try {
            response = await Service.api.login({
                username: this.state.username,
                password: this.state.password,
            });
        } catch (error) {
            console.log(error.data);
        }
        if (response) {
            if (response.status === 200) {
                this.props.saveResponse(response.data);
                this.props.history.push("/");
            }
        }
    };

    render() {
        return (
            <>
                <div className="flex flex-row w-full space-x-4 my-4 justify-between px-6">
                    <div>
                        <a
                            href="/"
                            className="py-2 text-blue-800 text-center hover:underline"
                        >
                            หน้าหลัก
                        </a>
                    </div>
                    <div className="space-x-3">
                        <a
                            href="/register"
                            className="py-2 text-blue-800 text-center hover:underline"
                        >
                            ลงทะเบียน
                        </a>
                    </div>
                </div>
                <div className="bg-blue-600 w-full my-6 text-white px-2 py-3">
                    เข้าสู่ระบบ
                </div>
                <div className="max-w-md flex flex-col justify-center w-full items-center mx-auto">
                    <div className="w-full flex flex-col space-y-4">
                        <div className="flex flex-col">
                            <span className="my-1 font-bold">
                                ชื่ผู้ใช้งานหรืออีเมล
                            </span>
                            <input
                                className="py-3 px-6 rounded-full border border-gray-400 outline-none hover:border-blue-800"
                                placeholder="Username and Email"
                                value={
                                    this.state.username
                                        ? this.state.username
                                        : ""
                                }
                                onChange={(event) =>
                                    this.inputHandler("username", event)
                                }
                            ></input>
                        </div>

                        <div className="flex flex-col">
                            <span className="my-1 font-bold">รหัสผ่าน</span>
                            <input
                                className="py-3 px-6 rounded-full border border-gray-400 outline-none hover:border-blue-800"
                                value={
                                    this.state.password
                                        ? this.state.password
                                        : ""
                                }
                                type="password"
                                placeholder="Password"
                                onChange={(event) =>
                                    this.inputHandler("password", event)
                                }
                            ></input>
                        </div>

                        <button
                            className="bg-blue-600 rounded-full px-6 py-3 text-white hover:bg-blue-800"
                            onClick={this.loginHandler}
                        >
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveResponse: (data) => dispatch(login(data)),
    };
};

export default connect(null, mapDispatchToProps)(Login);
