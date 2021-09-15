import React, { Component } from "react";
import { connect } from "react-redux";
import Service from "../services";
import { login } from "../store/reducers/user";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            isSuccess: false,
            username: null,
            password: null,
            password_confirmation: null,
            email: null,
            name: null,
        };
    }

    inputHandler = (input, event) => {
        this.setState({ [input]: event.target.value });
    };

    registerHandler = async () => {
        this.setState({ isError: false, isSuccess: false });
        let response;
        try {
            response = await Service.api.register(this.state);
        } catch (error) {
            if (error.status === 422) {
                console.log(error.data);
                this.setState({ isError: true });
            }
        }
        if (response) {
            this.props.saveResponse(response.data);
            this.setState({ isSuccess: true });
            this.props.history.push("/");
        }
    };

    render() {
        return (
            <>
                <div className="bg-blue-600 w-full my-6 text-white px-2 py-3">
                    ลงทะเบียน
                </div>
                <div className="max-w-md flex flex-col justify-center w-full items-center mx-auto">
                    <div className="w-full flex flex-col space-y-4">
                        <div className="flex flex-col">
                            <span className="my-1 font-bold">ชื่อ</span>
                            <input
                                className="py-3 px-6 rounded-full border border-gray-400 outline-none hover:border-blue-800"
                                placeholder="Name"
                                value={this.state.name ? this.state.name : ""}
                                onChange={(event) =>
                                    this.inputHandler("name", event)
                                }
                            ></input>
                        </div>

                        <div className="flex flex-col">
                            <span className="my-1 font-bold">อีเมล</span>
                            <input
                                className="py-3 px-6 rounded-full border border-gray-400 outline-none hover:border-blue-800"
                                placeholder="example@mail.com"
                                value={this.state.email ? this.state.email : ""}
                                onChange={(event) =>
                                    this.inputHandler("email", event)
                                }
                            ></input>
                        </div>

                        <div className="flex flex-col">
                            <span className="my-1 font-bold">
                                ชื่อผู้ใช้งาน
                            </span>
                            <input
                                className="py-3 px-6 rounded-full border border-gray-400 outline-none hover:border-blue-800"
                                placeholder="Username"
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

                        <div className="flex flex-col">
                            <span className="my-1 font-bold">
                                ยืนยันรหัสผ่าน
                            </span>
                            <input
                                className="py-3 px-6 rounded-full border border-gray-400 outline-none hover:border-blue-800"
                                value={
                                    this.state.password_confirmation
                                        ? this.state.password_confirmation
                                        : ""
                                }
                                type="password"
                                placeholder="Password"
                                onChange={(event) =>
                                    this.inputHandler(
                                        "password_confirmation",
                                        event
                                    )
                                }
                            ></input>
                        </div>
                    </div>
                    {this.state.isError ? (
                        <div className="bg-red-300 text-white px-6 py-2 rounded-full my-6 w-full">
                            ชื่อผู้ใช้งานหรืออีเมลนี้มีการใช้งานแล้ว
                        </div>
                    ) : (
                        <></>
                    )}

                    {this.state.isSuccess ? (
                        <div className="bg-green-300 text-white px-6 py-2 rounded-full my-6 w-full">
                            ลงทะเบียนสำเร็จ
                        </div>
                    ) : (
                        <></>
                    )}
                    <div className="mt-6 w-full flex">
                        <button
                            className="bg-blue-600 rounded-full px-6 py-3 text-white hover:bg-blue-800 w-full"
                            onClick={this.registerHandler}
                        >
                            ลงทะเบียน
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

export default connect(null, mapDispatchToProps)(Register);
