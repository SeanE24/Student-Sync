import { useState } from "react";
import {Mail, Bell, HelpCircle, Info, ChevronRight, LogOut, Pencil,} from "lucide-react";
import { C, css } from "./Theme";
import Header from "./header.jsx"

const USER = { name: "Nick", avatarUrl: "" };

const onItemClick = (key) => console.log(key);
const onLogout = () => console.log("logout");

const MENU_ITEMS = [
  { key: "account", label: "Account Details", Icon: Mail },
  { key: "notifications", label: "Notifications", Icon: Bell },
  { key: "help", label: "Help & Support", Icon: HelpCircle },
  { key: "about", label: "About StudentSync", Icon: Info },
];

export default function Profile() {
    return(
        <>
            <Header p = "Profile Settings" user = {USER} />

            <ul className="pf-list">
                {MENU_ITEMS.map(({ key, label, Icon }) => (
                    <li key={key}>
                        <button type="button" className="pf-row" onClick={() => onItemClick(key)}>
                            <Icon size={20} />
                            <span className="pf-row-label">{label}</span>
                            <ChevronRight size={18} />
                        </button>
                    </li>
                ))}
            </ul>
 
            <div className="pf-logout-wrap">
                <button type="button" className="pf-row pf-danger" onClick={onLogout}>
                    <LogOut size={20} />
                    <span className="pf-logout">Log Out</span>
                </button>
            </div>

        </>
    )
}