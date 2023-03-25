import React from "react";

const TuitItem = ({tuit}) => {
    return (
        <div className="border-bottom border-muted">
            <div className="row mt-3 mb-3 ms-1">
                <div className="col-1">
                    <img src={`/images/${tuit.image}`}  className="wd-avatar"/>
                </div>
                <div className="col-11 ps-3">
                    <div className="me-3">
                        <div className="d-inline fw-bold">{tuit.userName} </div>
                        <div className="d-inline text-primary"><i className="bi bi-check-circle-fill"></i></div>
                        <div className="d-inline"> @{tuit.handle} · {tuit.time}</div>
                        <div>{tuit.tuit}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitItem;