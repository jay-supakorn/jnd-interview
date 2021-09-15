import { cloneElement, Component } from "react";
import { connect } from "react-redux";

class AuthLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = async () => {
        console.log("welcome to jowit");
    };

    pageState = () => {
        return cloneElement(this.props.children, {
            ...this.props,
        });
    };

    render() {
        return <>{this.pageState()}</>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        //   loading: (isLoading) => dispatch(loading(isLoading)),
    };
};

function mapStateToProps(state) {
    const { user } = state;
    return {
        accessToken: user.accessToken,
        user: user.user,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
