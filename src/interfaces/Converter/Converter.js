import { useEffect, useState } from "react";
import {
  BerlinToDigitalConverter,
  ClockBody,
  DigitalToBerlinConverter,
} from "../../components";
import {
  convertBerlinTimeToDigital,
  convertDigitalToBerlinTime,
} from "../../utils/helper";
import "./style.scss";

const Converter = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [time, setDate] = useState(new Date().toLocaleTimeString("fr-FR"));

  // const body = convertBerlinTimeToDigital(convertDigitalToBerlinTime(time));

  function refreshClock() {
    setDate(new Date().toLocaleTimeString("fr-FR"));
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";
  return (
    <div className="container">
      <ul className="tab-list">
        <li
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
          Live Clock
        </li>
        <li
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          Convert Berlin Time to Digital Time
        </li>
        <li
          className={`tabs ${getActiveClass(3, "active-tabs")}`}
          onClick={() => toggleTab(3)}
        >
          Convert Digital Time to Berlin Time
        </li>
        <li
          className={`tabs ${getActiveClass(4, "active-tabs")}`}
          onClick={() => toggleTab(4)}
        >
          Learn
        </li>
      </ul>
      <div className="content-container">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <h2>{new Date().toLocaleTimeString("fr-FR")}</h2>
          <ClockBody
            body={convertBerlinTimeToDigital(convertDigitalToBerlinTime(time))}
          />
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <BerlinToDigitalConverter
            body={convertBerlinTimeToDigital(
              convertDigitalToBerlinTime("00:00:01")
            )}
            time="00:00:01"
          />
        </div>
        <div className={`content ${getActiveClass(3, "active-content")}`}>
          <DigitalToBerlinConverter />
        </div>
        <div className={`content ${getActiveClass(4, "active-content")}`}>
          <h1>Learning</h1>
          <iframe
            height="560"
            src="https://www.youtube.com/embed/SgrjEpEWO7k?si=nXiykoVl-B6wVtNa"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Converter;
