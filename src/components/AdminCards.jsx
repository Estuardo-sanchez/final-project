import React from "react";
import AdminCardItem from "./AdminCardItem";
import '../styles/AdminCards.css';
import { AdminCalender } from "../components/AdminCalender";

export default function AdminCards() {
  return (
    <div className="admin-cards">
      <AdminCalender />
      <div className="admin-cards__container">
        <div className="admin-cards__wrapper">
          <ul className="admin-cards__items">
            <AdminCardItem
              src='https://i.pinimg.com/originals/89/90/e0/8990e0304c44794197af164ab0138011.jpg'
              text="Hours: 9:00 - 5:30"
              label="Matt"
            />
            <AdminCardItem
              src='https://user-images.githubusercontent.com/93356900/194973383-f50283af-b2d1-406c-8802-a73d7574f093.jpeg'
              text="Hours: 12:00 - 9:00"
              label="Skylar"
            />
            <AdminCardItem
              src='https://user-images.githubusercontent.com/93356900/194978653-d17b4b43-38de-4032-a66d-1299820dea34.jpeg'
              text="Hours: 12:00 - 9:00"
              label="Tony"
            />
          </ul>
          <ul className="admin-cards__items">
            
            <AdminCardItem
              src='https://user-images.githubusercontent.com/93356900/194978820-7a1ee034-25be-4c88-90e7-b9093a7f83cb.jpeg'
              text="Hours: 9:00 - 5:30"
              label="Brandon"
            />
            <AdminCardItem
              src='https://user-images.githubusercontent.com/93356900/194979262-ec8d1d6d-b73b-4c07-a4a5-8f373aa9f210.jpeg'
              text="Hours: 9:00 - 5:30"
              label="Jess"
            />
            <AdminCardItem
              src='https://user-images.githubusercontent.com/93356900/194980456-f0a35e6f-afc2-494c-b025-d7a986cd56f3.jpeg'
              text="Time-Off"
              label="Josh"
            />
          </ul>
        </div>
      </div>
    </div>
    
  )
}