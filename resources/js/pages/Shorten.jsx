import React, { Component } from "react";
import { connect } from "react-redux";
import Service from "../services";
import { actionShortenLink } from "../store/reducers/shorten";

class Shorten extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shortenName: null,
            isError: false,
            isShowResult: false,
            result: {
                link_original: null,
                link_shorten: null,
            },
            user: this.props.user,
        };
    }

    componentDidMount = () => {};

    shortenHandler = async () => {
        this.setState({
            isShowResult: false,
        });
        if (this.state.shortenName == "" || this.state.shortenName == null) {
            this.setState({ isError: true });
        } else {
            this.setState({ isError: false });
            let response;
            try {
                response = await Service.api.shorten({
                    shortenName: this.state.shortenName,
                });
            } catch (error) {
                console.log(error.message);
            }
            if (response) {
                this.setState({
                    isShowResult: true,
                    result: response.data,
                    shortenName: null,
                });
            }
        }
    };

    inputHandler = (input, event) => {
        this.setState({ [input]: event.target.value });
    };

    render() {
        return (
            <>
                <div className="flex flex-row w-full space-x-4 my-4 justify-between px-6">
                    <div className="space-x-3 flex flex-row items-center">
                        <a
                            href="/"
                            className="py-2 text-blue-800 text-center hover:underline"
                        >
                            หน้าหลัก
                        </a>
                    </div>
                    <div className="space-x-3 flex flex-row items-center">
                        {this.state.user ? (
                            <div>
                                {this.state.user.is_admin === "admin" ? (
                                    <a
                                        href="/dashboard"
                                        className="py-2 text-blue-800 text-center hover:underline"
                                    >
                                        ผู้ดูแลระบบ
                                    </a>
                                ) : (
                                    <></>
                                )}
                            </div>
                        ) : (
                            <></>
                        )}

                        {this.state.user ? (
                            <div>{this.state.user.name}</div>
                        ) : (
                            <a
                                href="/login"
                                className="py-2 text-blue-800 text-center hover:underline"
                            >
                                เข้าสู่ระบบ
                            </a>
                        )}
                    </div>
                </div>
                <hr />

                <div className="flex flex-col w-full space-x-3 py-6 px-6">
                    <div className="flex flex-row w-full space-x-3">
                        <input
                            className="py-3 px-6 rounded-full border border-gray-400 w-3/4 outline-none hover:border-blue-800"
                            placeholder="Shorten your link"
                            value={
                                this.state.shortenName
                                    ? this.state.shortenName
                                    : ""
                            }
                            onChange={(event) =>
                                this.inputHandler("shortenName", event)
                            }
                        ></input>

                        <button
                            className="bg-blue-600 rounded-full px-6 text-white w-1/4 hover:bg-blue-800"
                            onClick={this.shortenHandler}
                        >
                            Shorten
                        </button>
                    </div>
                    {this.state.isError ? (
                        <div className="w-full text-center text-red-800 mx-auto py-2">
                            * กรุณากรอกข้อมูลที่ต้องการ
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                {this.state.isShowResult ? (
                    <div className="px-6">
                        <div className="flex flex-row justify-between w-full p-6 rounded-md bg-gray-100">
                            <div>{this.state.result.link_original}</div>
                            <div>
                                <a
                                    href={this.state.result.link_shorten}
                                    target="_blank"
                                    className="text-blue-600"
                                >
                                    {this.state.result.link_shorten}
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user: user.user,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shorten);
