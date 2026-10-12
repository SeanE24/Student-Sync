import { useState } from "react";
import { MapPin, Building2, Droplet, AlertCircle, Bus } from "lucide-react";
import { C, css } from "./Theme";
import Header from "./header.jsx"

const USER = { name: "Nick", username: "@nickyoung", avatarUrl: "" }; // set avatarUrl to a photo URL

const RIDES = [
  { id: 1, route: "Loakan → UP Baguio Campus", time: "8:00 AM", seats: 3 },
  { id: 2, route: "Bakakeng → UP Baguio Campus", time: "8:00 AM", seats: 2 },
  { id: 3, route: "Cabinet Hill → SLU Main Campus", time: "9:00 AM", seats: 3 },
];



export default function HomeScreen() {
  const [joined, setJoined] = useState({});
  const [dest, setDest] = useState("");

  return (
    <>
      <Header p = "Good Morning," user = {USER} />

      <section className="ss-section" style={{ marginTop: 40 }}>
        <h2>Book a Ride</h2>
        <p className="sub">Leave now or schedule a ride for later</p>
        <label className="ss-search">
          <MapPin size={20} />
          <input
            value={dest}
            onChange={(e) => setDest(e.target.value)}
            placeholder="Where to?"
          />
        </label>
        <div className="ss-chips">
          <button className="ss-chip"><Building2 size={18} /> City Updates</button>
          <button className="ss-chip"><Droplet size={18} /> Utility Updates</button>
        </div>
      </section>

      <section className="ss-section">
        <h2>Today</h2>
        <div className="ss-warn">
          <AlertCircle size={44} color={C.warn} strokeWidth={1.8} />
          <div>
            <b>No class suspensions as of today</b>
            <a>View all updates &gt;</a>
          </div>
        </div>
      </section>

      <section className="ss-section">
        <h2>Upcoming Rides</h2>
        <p className="sub">Carpools near you leaving soon</p>
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
      </section>
    </>
  );
}