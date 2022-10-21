import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component/bar.css";

const Bar = (props) => {
  const { modalClicked, deleteClicked } = props;

  return (
    <nav>
      <div className="left-side-nav">
        <Link to={`/home`}>
          <button>
            <i className="fa fa-arrow-left"></i>
          </button>
        </Link>
      </div>
      <div className="right-side-nav">
        <div className="edit">
          <button onClick={modalClicked} id="edit">
            Edit
          </button>
        </div>
        <div className="delete">
          <button onClick={deleteClicked} id="delete">
            Delete
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Bar;
