import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
import "./index.css";

const HomeComponent = () => {
    return(
        <>
            <h3 className="fw-bold">Home</h3>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;