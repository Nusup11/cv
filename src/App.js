import React from "react";
import { Carousel } from "react-bootstrap";
import "./App.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LeBronResume = () => {
  return (
    <div className="resume">
      <div className="header">
        <img
          className="header-image"
          src="https://i.pinimg.com/564x/50/cf/c0/50cfc0603fa27228e1112ef860a9bff3.jpg"
          alt=""
        />
        <h1 className="header-title">Леброн Джеймс</h1>
      </div>
      <p className="subtitle">
        Профессиональный баскетболист, один из самых известных и успешных
        игроков в истории NBA.
      </p>

      <div className="section">
        <h2>Опыт игры</h2>
        <p>
          <strong>Команда:</strong> Лос-Анджелес Лейкерс
        </p>
        <p>
          <strong>Позиция:</strong> Форвард
        </p>
        <p>
          <strong>Начало карьеры:</strong> 2003 год
        </p>
      </div>

      <div className="section">
        <h2>Достижения</h2>
        <ul>
          <li>4-кратный чемпион НБА (2012, 2013, 2016, 2020)</li>
          <li>4-кратный MVP НБА (2009, 2010, 2012, 2013)</li>
          <li>2-кратный MVP финалов НБА (2012, 2013)</li>
          <li>17-кратный участник Матча всех звезд НБА</li>
        </ul>
      </div>

      <div className="section">
        <h2>Статистика</h2>
        <p>
          <strong>Средние очки за игру:</strong> 27.0
        </p>
        <p>
          <strong>Средние подборы за игру:</strong> 7.4
        </p>
        <p>
          <strong>Средние передачи за игру:</strong> 7.4
        </p>
      </div>

      <div className="section">
        <h2>Фотографии</h2>
        <ResponsiveCarousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={4000}
        >
          <div>
            <img
              src="https://i.pinimg.com/564x/bc/7c/c0/bc7cc0a239e8ed8b441ce6b3a253bf53.jpg"
              alt="Фотография 1"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/80/8a/ca/808aca87d06839ba8de2cea16333413f.jpg"
              alt="Фотография 2"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/41/64/2e/41642e393b1d48d600bf2137544709df.jpg"
              alt="Фотография 3"
            />
          </div>
        </ResponsiveCarousel>
      </div>
    </div>
  );
};

export default LeBronResume;
