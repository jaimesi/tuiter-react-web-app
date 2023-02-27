import React from "react";

const HomePostItem = ({post}) => {

    let showThisThreadMsg;
    let isRetuited;
    let hasTitle;

    if (post.showThisThread) {
        showThisThreadMsg = <a className="mt-4 text-decoration-none">Show this thread</a>
    }

    if (post.retuited) {
        isRetuited = <small className="fw-bold text-secondary ms-4 mb-2">
            <i className="bi bi-arrow-repeat"></i> {post.retuited} Retuited
        </small>
    }

    if (post.postTitle) {
        hasTitle = <div className="card-body">
            <div className="card-title fw-bold">{post.postTitle}</div>
            <div className="card-text">{post.postContent}</div>
        </div>
    }

    return (

        <div className="border-bottom border-muted">
            <div className="row mt-3 mb-3 ms-1">
                {isRetuited}
                <div className="col-1">
                    <img src={`/images/${post.avatarIcon}`}  className="wd-avatar"/>
                </div>
                <div className="col-11 ps-3">
                    <div className="me-3">
                        <div className="d-inline fw-bold">{post.userName} </div>
                        <div className="d-inline text-primary"><i className="bi bi-check-circle-fill"></i></div>
                        <div className="d-inline"> @{post.userHandle} · {post.time}</div>
                        <div className="d-inline float-end">
                            <i className="bi bi-three-dots"></i>
                        </div>
                        <div>
                            {post.postSummary}
                            <a target="_blank" href={post.href} className="text-decoration-none">{post.hrefName}</a>
                        </div>
                        <div className="card mt-2 mb-2 border border-muted bg-transparent rounded-4">
                            <div className="border-bottom border-light">
                                <img className="card-img-top rounded-4" src={`/images/${post.postImage}`}/>
                            </div>
                            {hasTitle}
                        </div>
                        <div className="row text-muted">
                            <div className="col-3">
                                <a>
                                    <i className="bi bi-chat"></i>
                                    <div className="d-inline"> {post.numComments}</div>
                                </a>
                            </div>
                            <div className="col-3">
                                <a>
                                    <i className="bi bi-arrow-repeat"></i>
                                    <div className="d-inline"> {post.numRetuits}</div>
                                </a>
                            </div>
                            <div className="col-3">
                                <a>
                                    <i className="bi bi-heart"></i>
                                    <div className="d-inline"> {post.numLikes}</div>
                                </a>
                            </div>
                            <div className="col-3">
                                <a>
                                    <i className="bi bi-upload"></i>
                                </a>
                            </div>
                            {showThisThreadMsg}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePostItem;