import React, { Component } from "react";
import { connect } from "react-redux";
import { actionShortenLink } from "../store/reducers/shorten";

class Shorten extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shortenName: null,
        };
    }

    shortenHandler = async () => {
        console.log(this.state.shortenName);
        // shortenLink
        // shorten-action
        try {
            await this.props.shortenLink(this.state.shortenName);
        } catch (error) {
            // errorAlert({ message: error.message });
            // this.setState({
            //     loading: false,
            // });
            return;
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
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {} = state;
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        shortenLink: (link) => dispatch(actionShortenLink(link)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shorten);
