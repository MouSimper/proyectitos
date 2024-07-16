import { useState } from "react";
export function TwitterFollowCard({ userName, name, initialisFollowing}) {
  const [isFollowing, SetisFollowing] = useState(initialisFollowing);


  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is--following"
    : "tw-followCard-button";
  const handelClick = () =>{
    SetisFollowing(!isFollowing)
  }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar de mou"
          src={`https://unavatar.io/x/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handelClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
