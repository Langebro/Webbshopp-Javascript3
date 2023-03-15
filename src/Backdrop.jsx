import "./Backdrop.css";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.close}></div>;
}

export default Backdrop;
