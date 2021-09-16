import React, { Component } from "react";
import { connect } from "react-redux";
import Service from "../services";
import { actionShortenLink, getLists } from "../store/reducers/shorten";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        };
    }

    componentDidMount = async () => {
        let response;
        try {
            response = await this.props.getLists();
        } catch (error) {
            console.log(error);
            return;
        }
    };

    tableData = (data) =>
        data.map((value, index) => (
            <tr
                key={index}
                className={
                    index % 2 ? "bg-gray-100 border-b-2" : "bg-white border-b-2"
                }
            >
                <td className="py-3 text-center">{index + 1}</td>
                <td className="py-3 text-left">{value.link_original}</td>
                <td className="py-3 text-left">
                    <a
                        href={value.link_shorten}
                        target="_blank"
                        className="text-blue-600"
                    >
                        {value.link_shorten}
                    </a>
                </td>
            </tr>
        ));

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
                <div className="bg-blue-600 w-full my-6 mb-0 text-white px-2 py-3">
                    ภาพรวม
                </div>

                <div className="flex flex-col w-full py-3 space-x-3 px-6">
                    <table className="text-sm">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="w-20 py-2">ลำดับ</th>
                                <th className="text-left py-2">ลิงค์ต้นฉบับ</th>
                                <th className="text-left py-2">ลิงค์ย่อ</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {this.tableData(this.props.lists)}
                            {this.props.lists.length == 0 ? (
                                <tr className="border-b-2">
                                    <td
                                        colSpan="3"
                                        className="py-3 text-center"
                                    >
                                        ไม่พบข้อมูล
                                    </td>
                                </tr>
                            ) : (
                                <></>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { user, shorten } = state;
    return {
        lists: shorten.lists,
        user: user.user,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLists: () => dispatch(getLists()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
