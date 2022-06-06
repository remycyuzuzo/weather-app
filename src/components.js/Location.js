function LocationBox(props) {
  return (
    <div className="col-lg-3 mb-2 col-6 col-sm-6">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h4>{props.location}</h4>
            <button
              className="btn btn-light border btn-sm"
              onClick={props.onBtnClick}
            >
              view
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationBox;
