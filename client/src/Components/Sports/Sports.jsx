import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import Slider from "react-slick";


export default function Sports() {
  const { gyms, userData } = useContext(DataContext);

  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handlefeedbackName = useCallback((event) => {
    setFeedbackName(event.target.value);
  },[]);

  const handlefeedbackMessage = useCallback ((event) => {
    setFeedbackMessage(event.target.value);
  },[]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setFeedbackName("");
    setFeedbackMessage("");
  },[]);

  const handleCall = useCallback ((number) => {
    window.location.href = `tel:${number}`;
  },[]);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <>
      <div className="container">
        <div className="row">
            <h1 className="text-center fw-bold mt-4">Gyms in El-Rehab City</h1>
          {gyms ? (
            gyms.map((res) => (
              <div
                className="row  mx-md-3  mx-0 shadow my-5 custom-style mb-5 p-2 p-md-4 w-10 rounded-4"
                key={res.id}
              >
                <div className="col-lg-6  col-12">
                  <div className="d-flex align-items-center flex-wrap">
                    <img
                      className="rounded-circle me-3 mb-3 mb-md-0 shadow"
                      style={{ maxWidth: "100px", height: "auto" }}
                      src={res.logo}
                      alt={res.name}
                    />

                    <div className="d-flex flex-column justify-content-center align-items-center offset-1">
                      <div className="fs-4 fw-bold mb-1">{res.name}</div>
                      {res.Rating >= 1 && res.Rating <= 5 && (
                        <div className="d-flex align-items-center">
                          {/* <span className="fw-bold me-2">Rating:</span> */}
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#f5e324" }}
                          ></i>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#f5e324" }}
                          ></i>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#f5e324" }}
                          ></i>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#f5e324" }}
                          ></i>
                          <i
                            className="fa-solid fa-star-half-stroke"
                            style={{ color: "#f5e324" }}
                          ></i>
                          <span className="fw-bold ms-2">{res.Rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row justify-content-center align-items-center ms-1 mb-3">
                    {/* <div className="fs-5 fw-bold">Overview</div>
                    <div className="fs-5 my-4">{res.overview}</div> */}
                    <div className="fs-5 fw-bold mt-3">Address</div>
                    <div className="fs-5 ">{res.address}</div>
                    <div className="d-flex align-items-center mt-5">
                      <div className="row align-items-center d-flex-column align-items-center">
                        <div className="d-flex flex-column align-items-center">
                          <i
                            className="fa-solid fa-phone fa-2xl mainColor"
                            onClick={() => handleCall(res.number)}
                          ></i>
                          {/* <button
                              className="fa-2x btn fs-6 fw-bold text-success"
                            //   onClick={() => handleCall(res.number)}
                            >
                              Call
                            </button> */}
                        </div>
                      </div>

                      <div className="d-flex justify-content-center ms-5">
                        <a href={res.location} className="">
                          <i className="fa-solid fa-location-dot fa-2xl mainColor"></i>
                          {/* <div className=" fs-6 fw-bold text-success">
                            Location
                          </div> */}
                        </a>
                      </div>

                      <div className="ms-5">
                        <button
                          className="btn fs-6 btn-success "
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                          //   style={{ borderRadius: "10px" ,backgroundColor:"green" }}
                          //   onClick={handleShowModal}
                          disabled={userData ? false : true}
                        >
                          Feedback
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6  col-12 mt-sm-3" style={{}}>
                  {/*Slider */}
                  {/* <div
                    id={`carouselExampleFade${res.id}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-touch="true"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={res.img1}
                          className="d-block w-100 rounded-4"
                          alt="img 1"
                          style={{ height: 250 }}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={res.img2}
                          className="d-block w-100 rounded-4"
                          alt="img 2"
                          style={{ height: 250 }}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={res.img3}
                          className="d-block w-100 rounded-4"
                          alt="img 3"
                          style={{ height: 250 }}
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carouselExampleFade${res.id}`}
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carouselExampleFade${res.id}`}
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div> */}
                  <Slider {...settings}>
              <div className="my-3 px-1">
                <img
                  height={230}
                  className="w-100 rounded-4"
                  src={res.img1}
                  alt="Photos galley"
                />
              </div>
              <div className="my-3 px-1">
                <img
                  height={230}
                  className="w-100 rounded-4"
                  src={res.img2}
                  alt="Photos galley"
                />
              </div>
              <div className="my-3 px-1">
                <img
                  height={230}
                  className="w-100 rounded-4"
                  src={res.img3}
                  alt="Photos galley"
                />
              </div>
            </Slider>
                </div>
              </div>
            ))
          ) : (
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
      {/*Feedback */}
          <div
            className="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Your feedback
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="Name" className="col-form-label">
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        value={feedbackName}
                        onChange={handlefeedbackName}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">
                        Message:
                      </label>
                      <textarea
                        className="form-control"
                        id="message-text"
                        value={feedbackMessage}
                        onChange={handlefeedbackMessage}
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-success w-50"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        disabled={
                          feedbackName && feedbackMessage ? false : true
                        }
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  {/* <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1> */}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex flex-column align-items-center">
                  <i
                    className="fa-sharp fa-regular fa-circle-check text-center"
                    style={{ color: "#14992a", fontSize: 80 }}
                  ></i>
                  <p className="my-2 fs-4 fw-bolder">
                    We received your feedback, Thanks.
                  </p>
                </div>
                {/* <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
