function Modal(props) {
  return (
    <div className="dialog">
      <div className="card dialogBox">
        <div className="card-head d-flex justify-content-between">
          <h4>{props.district}</h4>
          <span onClick={props.onModalClose}>&times;</span>
        </div>
        <div className="card-body">
          <h4 className="details">{props.district}</h4>
        </div>
      </div>
    </div>
  );
}

export default Modal;
