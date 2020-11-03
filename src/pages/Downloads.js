import React from "react";
import { Link } from "react-router-dom";

export default function Downloads() {
  const [days, setDays] = React.useState("00");
  const [hours, setHours] = React.useState("00");
  const [mins, setMins] = React.useState("00");
  const [sec, setSec] = React.useState("00");

  // let interval = React.useRef();

  const startTime = () => {
    setInterval(() => {
      const countdownDate = new Date("December 31,2020 00:00:00").getTime();
      const now = new Date().getTime();
      const difference = countdownDate - now;
      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;
      let tage = Math.floor(difference / oneDay);
      let stunden = Math.floor((difference % oneDay) / oneHour);
      let minuten = Math.floor((difference % oneHour) / oneMinute);
      let sekunden = Math.floor((difference % oneMinute) / 1000);

      if (difference < 0) {
        clearInterval();
      } else {
        setDays(format(tage));
        setHours(format(stunden));
        setMins(format(minuten));
        setSec(format(sekunden));
      }
    }, 1000);
  };

  const format = (number) => {
    if (number < 10) {
      return (number = `0${number}`);
    }
    return number;
  };

  React.useEffect(() => {
    let interval = startTime();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="w-11/12 mx-auto grid h-screen content-center justify-items-center">
      <h1 className="text-5xl text-teal-500 font-mono text-center">
        Diese App erscheint Ende dieses Jahres
      </h1>
      <article className="grid grid-cols-4 gap-6">
        {/* days,hour,min,sec */}
        <div className="bg-teal-400 text-center text-teal-100">
          <h1 className="text-4xl">Days</h1>
          <h2 className="text-6xl">{days}</h2>
        </div>

        <div className="bg-teal-400 text-center text-teal-100">
          <h1 className="text-4xl">Hours</h1>
          <h2 className="text-6xl">{hours}</h2>
        </div>

        <div className="bg-teal-400 text-center text-teal-100">
          <h1 className="text-4xl">Min</h1>
          <h2 className="text-6xl">{mins}</h2>
        </div>

        <div className="bg-teal-400 text-center text-teal-100">
          <h1 className="text-4xl">Sec</h1>
          <h2 className="text-6xl">{sec}</h2>
        </div>
      </article>
      <button className="border-teal-500 border-4 rounded-full px-3 py-1 mt-4 hover:bg-teal-500 hover:text-teal-100 transition transition-all duration-700 ease-in-out">
        <Link to="/">Zurück zur Homepage</Link>
      </button>
    </div>
  );
}
