import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "./tuits-reducer";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const toggleLike = () => {
        dispatch(likeTuit(tuit))
    };

    return(
        <div className="row text-muted mt-2 mb-2">
            <div className="col-3">
                <a className="text-decoration-none wd-black-text">
                    <i className="bi bi-chat"></i>
                    <div className="d-inline"> {tuit.replies}</div>
                </a>
            </div>
            <div className="col-3">
                <a className="text-decoration-none wd-black-text">
                    <i className="bi bi-arrow-repeat"></i>
                    <div className="d-inline"> {tuit.retuits}</div>
                </a>
            </div>
            <div className="col-3" onClick={toggleLike}>
                <a className="text-decoration-none wd-black-text">
                    <i className={`${tuit.liked === true ? 'text-danger bi bi-heart-fill':'bi bi-heart'}`}></i>
                    <div className="d-inline"> {tuit.likes}</div>
                </a>
            </div>
            <div className="col-3">
                <a className="text-decoration-none wd-black-text">
                    <i className="bi bi-share"></i>
                </a>
            </div>
        </div>
    );
};

export default TuitStats;