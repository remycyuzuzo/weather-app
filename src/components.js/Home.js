const Home = () => {
  const key = "1e71670c756c53c7f48ea550e23963ce";
  const lat = 45;
  const lon = 52;
  const url = `
    https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}
  `;

  return (
    <div className="container">
      <h3>Check the current weather</h3>
      <div className="my-3 bg-light p-2 py-3">
        <div className="row">
          <div className="col-lg-3 mb-2 col-6 col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4>Musanze</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-2 col-6 col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4>Gakenke</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-2 col-6 col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4>Burera</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-2 col-6 col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4>Rubavu</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
