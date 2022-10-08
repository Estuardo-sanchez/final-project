import React from "react";
import AdminCardItem from "./AdminCardItem";
import '../styles/AdminCards.css';
import { AdminCalender } from "../components/AdminCalender";

export default function AdminCards() {
  return (
    <div className="admin-cards">
      <AdminCalender />
      <h1 className="employee-title">The Team</h1>
      <div className="admin-cards__container">
        <div className="admin-cards__wrapper">
          <ul className="admin-cards__items">
            <AdminCardItem
              src='https://staticg.sportskeeda.com/editor/2022/05/601c7-16519585426515-1920.jpg'
              text="Luffy"
              label="Hamilton"
              path='Map'
            />
            <AdminCardItem
              src='https://sportshub.cbsistatic.com/i/2021/08/09/b9334c48-cc42-474f-ae5e-b2b3b0884cb0/one-piece-wano-zoro-1277439.jpg?width=1200'
              text="zoro"
              label="Toronto"
              path=''
            />
            <AdminCardItem
              src='https://images4.alphacoders.com/116/1164403.jpg'
              text="Local Mississauga shops"
              label="Mississauga"
              path=''
            />
          </ul>
          <ul className="admin-cards__items">
            
            <AdminCardItem
              src='https://www.wallpaperflare.com/static/933/5/80/one-piece-anime-usopp-one-wallpaper.jpg'
              text="Local Brampton shops"
              label="Brampton"
              path=''
            />
            <AdminCardItem
              src='https://i.pinimg.com/originals/22/10/8a/22108aa812b41ba9fb4f166d96fb0a52.jpg'
              text="Local Niagara shops"
              label="Niagara"
              path=''
            />
            <AdminCardItem
              src='https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/One-Piece-Nami-Climate-Baton-header.png'
              text="Local Mississauga shops"
              label="Mississauga"
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
    
    
    
    
    
    
    //2nd part
    // <div>


    // <ul className="admin-cards">
    
    // <li className="employee-card">
    //   <img className="employee-image" src="https://sportshub.cbsistatic.com/i/2021/08/09/b9334c48-cc42-474f-ae5e-b2b3b0884cb0/one-piece-wano-zoro-1277439.jpg?width=1200" alt="zoro" />
    //   <p className="employee-name">Zoro</p>
    // </li>
    // <li className="employee-card">
    //   <img className="employee-image" src="https://sportshub.cbsistatic.com/i/2021/08/09/b9334c48-cc42-474f-ae5e-b2b3b0884cb0/one-piece-wano-zoro-1277439.jpg?width=1200" alt="zoro" />
    //   <p className="employee-name">Zoro</p>
    // </li>
    // <li className="employee-card">
    //   <img className="employee-image" src="https://sportshub.cbsistatic.com/i/2021/08/09/b9334c48-cc42-474f-ae5e-b2b3b0884cb0/one-piece-wano-zoro-1277439.jpg?width=1200" alt="zoro" />
    //   <p className="employee-name">Zoro</p>
    // </li>

    // </ul>
    // <ul>
    
    // <li className="employee-card">
    //   <img className="employee-image" src="https://sportshub.cbsistatic.com/i/2021/08/09/b9334c48-cc42-474f-ae5e-b2b3b0884cb0/one-piece-wano-zoro-1277439.jpg?width=1200" alt="zoro" />
    //   <p className="employee-name">Zoro</p>
    // </li>
    // <li className="employee-card">
    //   <img className="employee-image" src="https://sportshub.cbsistatic.com/i/2021/08/09/b9334c48-cc42-474f-ae5e-b2b3b0884cb0/one-piece-wano-zoro-1277439.jpg?width=1200" alt="zoro" />
    //   <p className="employee-name">Zoro</p>
    // </li>
    // <li className="employee-card">
    //   <img className="employee-image" src="https://sportshub.cbsistatic.com/i/2021/08/09/b9334c48-cc42-474f-ae5e-b2b3b0884cb0/one-piece-wano-zoro-1277439.jpg?width=1200" alt="zoro" />
    //   <p className="employee-name">Zoro</p>
    // </li>

    // </ul>

    // </div>
  )
}