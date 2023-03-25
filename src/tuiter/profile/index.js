import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile[0]);
    return (
        <>
            <div className="row">
                <Link to="/tuiter" className="col-1 d-inline-flex align-items-center link-dark">
                    <h4 className="bi bi-arrow-left link-dark"></h4>
                </Link>
                <div className="col-11">
                    <h4 className="fw-bold mb-0">{profile.firstName} {profile.lastName}</h4>
                    <div className="text-muted mb-2">6,114 Tuits</div>
                </div>
            </div>

            <div>
                <img src="/images/profile-banner.jpg" alt="profile banner" width="100%"/>
                <img src="/images/tuiter-profile-picture.jpg" alt="profile picture" width="100px" height="100px"
                     className="wd-cover rounded-circle position-relative translate-middle-y wd-nudge-right
                                border border-white border-4"/>
                <button className="btn btn-light rounded-pill border mt-2 float-end">
                    <Link to="/tuiter/edit-profile" className="link-dark text-decoration-none fw-bold">
                        <span>Edit profile</span>
                    </Link>
                </button>
            </div>

            <div className="position-relative wd-nudge-up me-4">
                <div>
                    <h4 className="fw-bold mb-0">{profile.firstName} {profile.lastName}</h4>
                </div>
                <div className="text-muted mb-3">
                    {profile.handle}
                </div>
                <div>
                    {profile.bio}
                </div>
                <div className="text-muted mt-2 mb-2">
                    <i className="bi bi-geo-alt d-inline "></i>
                    <div className="d-inline ms-2 me-4">{profile.location}</div>
                    <i className="bi bi-balloon d-inline"></i>
                    <div className="d-inline ms-2 me-4">Born {profile.dateOfBirth}</div>
                    <i className="bi bi-calendar3 d-inline"></i>
                    <div className="d-inline ms-2 me-4">Joined {profile.dateJoined}</div>
                </div>
                <div>
                    <div className="d-inline">
                        <span className="fw-bold">{profile.followingCount}</span>
                        <span className="text-muted"> Following</span>
                    </div>
                    <div className="ms-4 d-inline">
                        <span className="fw-bold">{profile.followersCount}</span>
                        <span className="text-muted"> Followers</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileComponent;