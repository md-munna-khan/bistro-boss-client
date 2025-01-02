
import { useState } from 'react';
import orderImg from '../assets/shop/banner2.jpg'
import Covered from '../Shared/Covered';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import FoodCard from './FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Order = () => {
    const categories=['salad','soup','pizza','desert','drinks']
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex)
    const [menu]=useMenu()
   
 
    const dessert =menu.filter(item=> item.category==='dessert');
    const soup =menu.filter(item=> item.category==='soup');
    const salad =menu.filter(item=> item.category==='salad');
    const pizza =menu.filter(item=> item.category==='pizza');
    const drinks =menu.filter(item=> item.category==='drinks')
    return (
        <div className=''>
               <Helmet>
        <title>Bistro|| Order Food</title>
  
      </Helmet>
            <Covered img={orderImg} title={'Order Food'}></Covered>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
     <div className='my-10 text-center'>
     <TabList>
      <Tab>Salad</Tab>
<Tab>Soup</Tab>
<Tab>Pizza</Tab>
<Tab>Desserts</Tab>
<Tab>Drinks</Tab>
      </TabList>
     </div>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
            {
                salad.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
            {
                soup.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
            {
                pizza.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
            {
                dessert.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
            {
                drinks.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
      </TabPanel>
     
   
    </Tabs>

        </div>
    );
};

export default Order;


