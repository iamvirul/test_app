import { List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


export default function Navbar() {
const name = "<virul.n/>";
    return (
      <div className="row">
        <div className=" col-12 d-flex">
          <span className=" col-lg-5 p-5 imagelogo">{name}</span>
          <Link
            to={"/More"}
            className=" col-lg-6 text-end d-flex align-items-center justify-content-end ms-5 ps-5"
          >
            <List size={35} color={"royalblue"} className=" menu" />
          </Link>
        </div>
      </div>
    );
  }