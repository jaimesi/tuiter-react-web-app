import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {saveProfile} from "../profile/profile-reducer";

const EditProfile = () => {
    let profile = useSelector((state) => state.profile[0]);
    let [firstName, setFirstName] = useState(profile.firstName);
    let [lastName, setLastName] = useState(profile.lastName);
    let [fullName, setFullName] = useState(firstName + " " + lastName)
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();
    const saveProfileClickHandler = () => {
        const fullNameSplit = fullName.split(/(\s+)/);
        firstName = (fullNameSplit[0]) ? fullNameSplit[0] : "";
        lastName = (fullNameSplit[2]) ? fullNameSplit[2] : "";
        profile = {
            ...profile,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth
        }
        dispatch(saveProfile(profile))
    }

    const nameChangeHandler = (event) => {
        const updatedName = event.target.value;
        setFullName(updatedName);
    }

    const bioChangeHandler = (event) => {
        const updatedBio = event.target.value;
        setBio(updatedBio);
    }

    const locationChangeHandler = (event) => {
        const updatedLocation = event.target.value;
        setLocation(updatedLocation);
    }

    const websiteChangeHandler = (event) => {
        const updatedWebsite = event.target.value;
        setWebsite(updatedWebsite);
    }

    const dateOfBirthChangeHandler = (event) => {
        const updatedDateOfBirth = event.target.value;
        setDateOfBirth(updatedDateOfBirth);
    }

    return(
        <>
            <div className="row">
                <Link to="/tuiter/profile" className="col-1 align-items-center link-dark">
                    <h5 className="bi bi-x-lg"></h5>
                </Link>
                <div className="col-11">
                    <h4 className="fw-bold d-inline">Edit Profile</h4>
                    <div className="d-inline float-end position-relative me-3">
                        <button className="btn btn-dark rounded-pill border wd-button-width" onClick={saveProfileClickHandler}>
                            <Link to="../profile" className="link-light text-decoration-none">
                                <span>Save</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className="position-relative mt-2">
                    <img src="/images/profile-banner.jpg" alt="profile banner" width="100%" className="opacity-50 wd-darkened-image"/>
                    <div className="position-absolute wd-center">
                        <button className="btn btn-dark rounded-circle me-3 opacity-80">
                            <i className="bi bi-camera"></i>
                        </button>
                        <button className="btn btn-dark rounded-circle opacity-80">
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className="position-absolute translate-middle-y ms-3">
                        <img src="/images/tuiter-profile-picture.jpg" alt="profile picture" width="100px" height="100px"
                             className="rounded-circle opacity-75 border border-white border-4"/>
                        <div className="position-absolute wd-center">
                            <button className="btn btn-dark rounded-circle opacity-80">
                                <i className="bi bi-camera text-info"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="position-relative ms-3 me-3 mt-5 pt-4">
                    <form className="form-floating mb-4">
                        <input type="text" className="form-control" id="nameInput"
                               value={fullName} onChange={nameChangeHandler}/>
                        <label htmlFor="nameInput">Name</label>
                    </form>
                    <form className="form-floating mb-4">
                        <input type="text" className="form-control" id="bioInput"
                               value={bio} onChange={bioChangeHandler}/>
                        <label htmlFor="bioInput">Bio</label>
                    </form>
                    <form className="form-floating mb-4">
                        <input type="text" className="form-control" id="locationInput"
                               value={location} onChange={locationChangeHandler}/>
                        <label htmlFor="locationInput">Location</label>
                    </form>
                    <form className="form-floating mb-4">
                        <input type="text" className="form-control" id="websiteInput"
                               value={website} onChange={websiteChangeHandler}/>
                        <label htmlFor="websiteInput">Website</label>
                    </form>
                    <form className="form-floating mb-4">
                        <input type="text" className="form-control" id="dateInput"
                               value={dateOfBirth} onChange={dateOfBirthChangeHandler}/>
                        <label htmlFor="dateInput">Birth date</label>
                    </form>
                    <div>
                        <span className="d-inline">Switch to professional</span>
                        <a className="bi bi-chevron-right d-inline float-end text-black"></a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EditProfile;