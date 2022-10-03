import React from "react";
import CardItem from "./Carditem";
import '../styles/Cards.css';

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check out local shops</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src='https://www.travellens.co/content/images/2022/01/Hamilton.jpeg'
              text="Local hamilton shops"
              label="Hamilton"
              path='Map'
            />
            <CardItem
              src='https://i.natgeofe.com/n/20d65599-d2e3-49e7-9641-a10b25aa8df2/toronto-travel.jpg'
              text="Local Toronto shops"
              label="Toronto"
              path=''
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='https://t4.ftcdn.net/jpg/02/96/54/11/360_F_296541192_9luVT5idPjc7WASeqvfW9wn9rAkcovZn.jpg'
              text="Local Mississauga shops"
              label="Mississauga"
              path=''
            />
            <CardItem
              src='https://i.cbc.ca/1.6325989.1643061928!/fileImage/httpImage/city-of-brampton.jpg'
              text="Local Brampton shops"
              label="Brampton"
              path=''
            />
            <CardItem
              src='https://cdn.fallsavenueresort.com/wp-content/uploads/2014/07/FARblog8.jpeg.jpg'
              text="Local Niagara shops"
              label="Niagara"
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  )
}