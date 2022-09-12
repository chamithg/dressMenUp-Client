import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Featured.css";
import { useGlobalContext } from "../../Context";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Featured() {
  const { items, featured, getFeatured, setFeaturedFilter } =
    useGlobalContext();
  const [current, setCurrent] = useState(0);
  const length = featured.length;

  const navigate = useNavigate();

  useEffect(() => {
    getFeatured();
  }, []);

  const handleFeatured = () => {
    setFeaturedFilter(true);
    navigate("/products");
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(featured) || featured.length <= 0) {
    return null;
  }

  return (
    <div className="featured-main">
      <h1 className="title">Featured Products</h1>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {featured.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}>
              {index === current && (
                <div className="featured-container">
                  <img
                    src={slide.img1}
                    alt="travel image"
                    className="image img1"
                  />
                  <div className="featured-info">
                    <br />
                    <div className="info-body">
                      <div>
                        <h4>then</h4>
                        <h2 className="then">${slide.oldPrice}</h2>
                      </div>
                      <div>
                        <h4>Now</h4>

                        <h1>
                          <span className="now">${slide.price}</span>
                        </h1>
                      </div>
                      <div className="mt-3">
                        <h4>Save</h4>
                        <h2>
                          <span className="now">{slide.discount}%</span>
                        </h2>
                        <h4>today..</h4>
                      </div>
                    </div>
                    <button
                      className="button mt-2"
                      onClick={() => handleFeatured()}>
                      {" "}
                      shop featured...!
                    </button>
                  </div>
                  <img
                    src={slide.img2}
                    alt="travel image"
                    className="image img2"
                  />
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
