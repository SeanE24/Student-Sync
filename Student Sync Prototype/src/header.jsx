import { css } from "./Theme";

export default function Header({p, user}) {

    return (
        <>
          <style>{css}</style>
    
          <header className="ss-hero">
            <p> {p} </p>
            <h1>{user.name}</h1>
            {user.avatarUrl ? (
              <img className="ss-avatar" src={user.avatarUrl} alt={user.name} />
            ) : (
              <div className="ss-avatar" aria-label={user.name}>{user.name[0]}</div>
            )}
          </header>
        </>
    )

}