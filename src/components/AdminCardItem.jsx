import React from "react";
import { Link } from "react-router-dom";

export default function AdminCardItem(props) {
  return (
    <>
      <li className="admin-cards__item">
        <Link className="admin-cards__item__link" to={props.path}>
          <figure className="admin-cards__item__pic-wrap" data-category={props.label}>
             <img src={props.src} alt="" className="admin-cards__item__img" />
          </figure>
          <div className="admin-cards__item__info">
            <h5 className="admin-cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}