import React, { Component } from "react";
import { connect } from "react-redux";
import Service from "../services";
import { actionShortenLink } from "../store/reducers/shorten";

class Shorten extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shortenName: null,
            isShowResult: false,
            result: {
                link_original: null,
                link_shorten: null,
            },
        };
    }

    shortenHandler = async () => {
        let response;
        try {
            response = await Service.api.shorten({ shortenName: value });
        } catch (error) {
            console.log(error.message);
        }
        if (response) {
            console.log(response.data);
            this.setState({ isShowResult: true });
        }
    };

    inputHandler = (input, event) => {
        this.setState({ [input]: event.target.value });
    };

    render() {
        return (
            <div className="flex flex-row w-full space-x-3 py-6 px-6">
                <input
                    className="py-3 px-6 rounded-full border border-gray-400 w-3/4 outline-none hover:border-blue-800"
                    placeholder="Shorten your link"
                    value={this.state.shortenName ? this.state.shortenName : ""}
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

                {this.state.isShowResult ? (
                    <div className="">{this.state.result}</div>
                ) : (
                    <></>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {} = state;
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shorten);
