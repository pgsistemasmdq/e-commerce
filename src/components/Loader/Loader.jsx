
import { CircularProgress } from "@mui/material";
import "./Loader.css";

const Loader = ({ loading }) => {
    if (!loading) return null;

    return (
        <div className="loader-container">
            <CircularProgress />
            <p>Loading...</p>
        </div>
    );
};

export default Loader;

