export const C = {
  navy: "#1B2A7A",
  bg: "#F3F7FF",
  chip: "#D5DDF0",
  green: "#17B890",
  warnBg: "#FDF4CE",
  warn: "#F2D96B",
  muted: "#6B7494",
};

export const css = 
//Homescreen
`
.ss-hero{background:${C.navy};height:110px;position:relative;padding:48px 24px 0;color:#fff}
.ss-hero p{margin:0;font-size:14px}
.ss-hero h1{margin:0;font-size:20px;font-weight:700}
.ss-avatar{position:absolute;right:20px;top:36px;width:84px;height:84px;border-radius:50%;border:3px solid #fff;object-fit:cover;background:#8da0d8;display:flex;align-items:center;justify-content:center;color:#fff;font-size:32px;font-weight:700}
.ss-section{padding:0 20px;margin-top:22px}
.ss-section h2{margin:0;font-size:18px;font-weight:700;color:${C.navy}}
.ss-section .sub{margin:2px 0 12px;font-size:11px;color:${C.navy}}
.ss-search{display:flex;align-items:center;gap:10px;background:#fff;border-radius:14px;padding:11px 14px;box-shadow:0 2px 8px rgba(27,42,122,.08);color:${C.navy}}
.ss-search input{border:0;outline:0;flex:1;font:inherit;font-size:14px;background:transparent;color:${C.navy}}
.ss-search input::placeholder{color:#8b93b3}
.ss-chips{display:flex;gap:10px;margin-top:12px}
.ss-chip{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;background:${C.chip};color:${C.navy};border:0;border-radius:12px;padding:11px 8px;font:inherit;font-size:13px;font-weight:600;cursor:pointer}
.ss-warn{background:${C.warnBg};border-radius:20px;padding:26px 22px;display:flex;align-items:center;gap:16px;margin-top:12px}
.ss-warn b{display:block;color:${C.warn};font-size:14px;font-weight:600}
.ss-warn a{color:${C.warn};font-size:11px;text-decoration:none;cursor:pointer}
.ss-ride{display:flex;align-items:center;gap:12px;background:#fff;border-radius:40px;padding:8px 10px;margin-bottom:10px;box-shadow:0 2px 8px rgba(27,42,122,.08)}
.ss-ride-ic{width:40px;height:40px;border-radius:50%;background:${C.navy};display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0}
.ss-ride-info{flex:1;min-width:0}
.ss-ride-info b{display:block;font-size:13px;color:${C.navy};font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ss-ride-info span{font-size:10px;color:${C.muted}}
.ss-join{background:${C.green};color:#fff;border:0;border-radius:8px;padding:6px 20px;font:inherit;font-size:13px;font-weight:600;cursor:pointer}
.ss-join.joined{background:#D9F3EB;color:${C.green}}
*{box-sizing:border-box}
body{margin:0}
.ss-root{font-family:'Poppins','Segoe UI',system-ui,sans-serif;background:#e9edf7;min-height:100dvh;display:flex;justify-content:center}
.ss-phone{width:100%;max-width:430px;height:100dvh;overflow:hidden;background:${C.bg};position:relative;display:flex;flex-direction:column}
.ss-scroll{flex:1;overflow-y:auto;padding-bottom:90px}
.ss-nav{position:absolute;bottom:0;left:0;width:100%;background:#fff;display:flex;justify-content:space-around;padding:10px 0 14px;border-top:1px solid #e3e8f5}
.ss-nav button{background:none;border:0;display:flex;flex-direction:column;align-items:center;gap:3px;font:inherit;font-size:10px;font-weight:600;color:#9aa1bd;cursor:pointer}
.ss-nav button.on{color:${C.navy}}
.ss-empty{padding:120px 30px;text-align:center;color:${C.muted};font-size:14px}
@media (min-width:500px){
  .ss-root{align-items:center;padding:20px 0}
  .ss-phone{width:390px;height:844px;border-radius:40px;border:8px solid #111}
}

//Profile

.pf-root {
  --pf-navy: #1f3180;
  --pf-bg: #f5f8ff;
  --pf-text: #1f3180;
  --pf-green: #1fb98a;
  --pf-red: #b3282d;
  --pf-border: #e6ebf7;
  background: var(--pf-bg);
  min-height: 100%;
  font-family: "DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--pf-text);
}
 
 
/* Menu */
.pf-list {
  list-style: none;
  margin: 0;
  padding: 36px 24px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pf-row {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  height: 40px;
  background: #fff;
  border: 1px solid var(--pf-border);
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(31, 49, 128, 0.06);
  font: inherit;
  font-size: 14px;
  color: var(--pf-text);
  cursor: pointer;
  text-align: left;
}
.pf-row:hover { background: #f0f4ff; }
.pf-row:focus-visible {
  outline: 2px solid var(--pf-green);
  outline-offset: 2px;
}
.pf-row-label { flex: 1; }

.pf-logout { flex: 1; color: #b3282d; }
 
.pf-logout-wrap {
  padding: 56px 24px 24px;
}
.pf-row.pf-danger { color: var(--pf-red); }
.pf-row.pf-danger:hover { background: #fff3f3; }
`
;