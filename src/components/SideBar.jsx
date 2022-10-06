import { useState, useEffect } from 'react';
import axios from 'axios';

import SideBarItem from './SideBarItem';

export default function SideBar() {
  //used for modal
  


  //shops for side bar
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/barbershops')
      .then((res) => {
        setShops(res.data.barbershops);

      })
  }, [])

  return (
    <div className='column'>
      {/* map side bar */}
      {
        shops.map(shop => (
          <SideBarItem shop={shop} />
        ))
      }
    </div>
  )

}