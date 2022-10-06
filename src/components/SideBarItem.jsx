import { useState, useEffect } from 'react';
import BookModal from './BookModal';


export default function SideBarItem({shop}) {
  const [openModal, setOpenModal] = useState(false);
   return(
    <div>
            <hr
              style={{
                color: '#000000',
                backgroundColor: '#bcb5b5',
                height: 0.1,
                // borderColor: '#bcb5b5'
              }}
            />
            <img className='side-barber-img' src={shop.cover_photo_url} alt="barbers" /> <br />
            <p className='sidebar-shop-name'>{`${shop.name}`}</p>
            <p className='address-text'> {`${shop.street}, ${shop.city}, ${shop.province}, ${shop.post_code}`} </p>
            <div className='side-btn-container'>
              <button className='side-book-btn' onClick={() => setOpenModal(true)} >Book</button> {shop.open_hours}
              <BookModal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
          </div>
   );
}