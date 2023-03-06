import react from "react";
import "./Productinfo.css";

function Productinfo(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-Content">
        <div className="modal-Header">
          <h3>Product information</h3>
        </div>
        <div className="modal-body">{props.product.description}</div>
        <div className="modal-footer">
          <button className="closeBtn" onClick={() => props.close()}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productinfo;
