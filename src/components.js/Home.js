import { useState, useEffect } from "react";
import LocationBox from "./Location";
import Modal from "./Modal";

const Home = () => {
  // const key = "1e71670c756c53c7f48ea550e23963ce";
  // const lat = 45;
  // const lon = 52;
  // const url = `
  //   https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}
  // `;

  // const axios = require("axios");

  // const options = {
  //   method: "GET",
  //   url: "https://rwanda.p.rapidapi.com/districts",
  //   params: { p: "east" },
  //   headers: {
  //     "X-RapidAPI-Host": "rwanda.p.rapidapi.com",
  //     "X-RapidAPI-Key": "c3de62757fmshd60c8e939fd8258p136f3fjsnd5749c01e84c",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  const [districts, setDistricts] = useState([]);
  const [isModalVisible, showHideModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, [districts]);

  const fetchData = async () => {
    const response = await fetch(`https://rwanda.p.rapidapi.com/districts`, {
      method: "GET",
      params: { p: "north" },
      headers: {
        "X-RapidAPI-Host": "rwanda.p.rapidapi.com",
        "X-RapidAPI-Key": "c3de62757fmshd60c8e939fd8258p136f3fjsnd5749c01e84c",
      },
    });
    const data = await response.json();
    setDistricts(data.data);
  };

  const showModal = () => {
    showHideModal(true);
    console.log("clicked");
  };

  const hideModal = () => {
    showHideModal(false);
  };

  return (
    <>
      <div className="container">
        <h3>Check the current weather</h3>
        <div className="my-3 bg-light p-2 py-3">
          <div className="row">
            {districts.map((district) => (
              <LocationBox
                key={district}
                onBtnClick={() => showModal}
                location={district}
              />
            ))}
          </div>
        </div>
      </div>
      {isModalVisible && <Modal onModalClose={() => hideModal} />}
    </>
  );
};

export default Home;
