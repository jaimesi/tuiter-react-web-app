import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import profileReducer from "./profile/profile-reducer";
import EditProfile from "./edit-profile";

const store = configureStore(
    {reducer: {
            who: whoReducer,
            tuitsData: tuitsReducer,
            profile: profileReducer
            }});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-7 col-xxl-6"
                        style={{"position": "relative"}}>
                    <Routes>
                        <Route index    element={<HomeComponent />}/>
                        <Route path="home"    element={<HomeComponent />}/>
                        <Route path="explore" element={<ExploreComponent />}/>
                        <Route path="profile" element={<ProfileComponent />}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                    <Routes>
                        <Route index    element={<WhoToFollowList />}/>
                        <Route path="home"    element={<WhoToFollowList />}/>
                        <Route path="explore" element={<WhoToFollowList />}/>
                        <Route path="profile" element={<WhoToFollowList />}/>
                        <Route path="edit-profile" element={<WhoToFollowList/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter