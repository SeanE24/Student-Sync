import { useState } from "react";
import CityRideMap from "./map";
import { C, css} from "./Theme";
import { MapPin, ChevronLeft, CalendarDays, CarFront, House, Megaphone, User, Bus } from "lucide-react";
const RIDES = [
  { id: 1, route: "Loakan → UP Baguio Campus", time: "8:00 AM", seats: 3 },
  { id: 2, route: "Bakakeng → UP Baguio Campus", time: "8:00 AM", seats: 2 },
  { id: 3, route: "Cabinet Hill → SLU Main Campus", time: "9:00 AM", seats: 3 },
];


const NAV = [
  { name: "Home", Icon: House },
  { name: "Carpool", Icon: CarFront },
  { name: "Updates", Icon: Megaphone },
  { name: "Profile", Icon: User },
];

const TIMES = ["Tue - 8:00 AM", "Tue - 5:00 PM", "Wed - 8:00 AM", "Wed - 5:00 PM"];

export default function BookRide({ onBack = () => {}, onBook = (ride) => console.log("Book ride", ride) }) {
  const [to, setTo] = useState("");
  const [when, setWhen] = useState(TIMES[0]);
  const [joined, setJoined] = useState({});
  const [tab, setTab] = useState("Carpool");

  return (
    <div className="br-frame">
      <style>{css}</style>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div className="br-map">
        <CityRideMap />
        <button className="br-back" onClick={onBack} aria-label="Go back">
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="br-sheet">
        <h2 className="br-h">Book a Ride</h2>

        <div className="br-field">
          <span className="br-pin" style={{ background: C.navy }}><MapPin size={16} aria-hidden="true" /></span>
          <div><small>From</small>Current location</div>
        </div>

        <label className="br-field">
          <span className="br-pin" style={{ background: C.red }}><MapPin size={16} aria-hidden="true" /></span>
          <div style={{ flex: 1 }}>
            <small>To</small>
            <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="Where to?" />
          </div>
        </label>

        <label className="br-field when">
          <CalendarDays size={22} aria-hidden="true" />
          <div style={{ flex: 1 }}>
            <small>Leave now or later</small>
            <select value={when} onChange={(e) => setWhen(e.target.value)}>
              {TIMES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </label>

        <button className="br-btn" disabled={!to.trim()} onClick={() => onBook({ from: "Current location", to, when })}>
          Book Ride
        </button>

        <h2 className="br-h">Rides Near You</h2>
        {RIDES.map((r) => (
          <div className="ss-ride" key={r.id}>
            <div className="ss-ride-ic"><Bus size={20} /></div>
            <div className="ss-ride-info">
              <b>{r.route}</b>
              <span>{r.time} • {r.seats} seats</span>
            </div>
            <button
              className={`ss-join ${joined[r.id] ? "joined" : ""}`}
              onClick={() => setJoined((j) => ({ ...j, [r.id]: !j[r.id] }))}
            >
              {joined[r.id] ? "Joined" : "Join"}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}