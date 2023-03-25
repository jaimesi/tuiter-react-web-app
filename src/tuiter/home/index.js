import TuitsList from "../tuits/tuits-list";
import "./index.css";

const HomeComponent = () => {
    return(
        <>
            <h3 className="fw-bold">Home</h3>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;