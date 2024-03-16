import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ width: "100%", textAlign: "center", marginBlock: "2rem" }}>
      An Error Occured <Link to="/">back to home</Link>
    </div>
  );
};

export default NotFound;
