import { useState } from "react";
import { Home, Car, Megaphone, User } from "lucide-react";
import { C, css} from "./Theme";
import HomeScreen from "./Homescreen.jsx";
import Profile from "./profile.jsx";

const TABS = [
  { key: "home", label: "Home", Icon: Home, Screen: HomeScreen },
  { key: "carpool", label: "Carpool", Icon: Car },
  { key: "updates", label: "Updates", Icon: Megaphone },
  { key: "profile", label: "Profile", Icon: User, Screen: Profile },
];


export default function App() {
  const [tab, setTab] = useState("home");
  const active = TABS.find((t) => t.key === tab);

  return (
    <div className="ss-root">
      <style>{css}</style>
      <div className="ss-phone">
        <main className="ss-scroll">
          {active.Screen ? (
            <active.Screen />
          ) : (
            <div className="ss-empty">{active.label} screen coming soon</div>
          )}
        </main>
        <nav className="ss-nav">
          {TABS.map(({ key, label, Icon }) => (
            <button key={key} className={tab === key ? "on" : ""} onClick={() => setTab(key)}>
              <Icon size={24} />
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}