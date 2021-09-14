import React from "react";
import ReactDOM from "react-dom";

function Shorten() {
    function clickShortenSubmit() {
        console.log("123");
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Shorten Component</div>
                        <div className="card-body">
                            <input
                                className="form-control my-2"
                                placeholder="Shorten your link"
                            ></input>
                            <button
                                className="btn btn-primary"
                                onClick={clickShortenSubmit}
                            >
                                Shorten
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shorten;
