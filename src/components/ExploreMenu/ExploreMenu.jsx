import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore a wide variety of delicious dishes made with fresh ingredients and authentic flavors. Whether you're craving a quick snack or a complete meal, QuickBite brings tasty food straight to your doorstep with speed and quality.</p>

    <div className="explore-menu-list">
        {menu_list.map((item,index)=>{

            return (
            <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}     key={index} className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>


            </div>

            )
        }
        )}
    </div>
    <hr />

    </div>
  )
}

export default ExploreMenu
