import React from "react";
import {useSelector} from "react-redux";

const PostSummaryItem = ({post}) => {
    const profile = useSelector((state) => state.profile[0]);
    const profileUsername = profile.firstName + " " + profile.lastName;
    const updatedUsername = (profile.handle === post.handle) ? profileUsername : post.username;
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{updatedUsername} · {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;