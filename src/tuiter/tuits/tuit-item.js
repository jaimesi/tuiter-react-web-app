import React from "react";
import TuitStats from "./tuit-stats";

const TuitItem = ({tuit}) => {
    return (
        <div className="border border-muted">
            <div className="row mt-3 mb-3 ms-1">
                <div className="col-1">
                    <img src={`/images/${tuit.image}`}  className="wd-avatar"/>
                </div>
                <div className="col-11 ps-2">
                    <div className="me-3 ms-4">
                        <div className="d-inline fw-bold">{tuit.userName} </div>
                        <div className="d-inline text-primary"><i className="bi bi-check-circle-fill"></i></div>
                        <div className="d-inline ms-1"> {tuit.handle} · {tuit.time}</div>
                        <div>{tuit.tuit}</div>
                        <TuitStats
                            key={tuit._id}
                            tuit={tuit}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitItem;