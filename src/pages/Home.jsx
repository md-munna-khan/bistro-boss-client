import { Helmet } from "react-helmet";
import Banner from "../HomeComponent/Banner";
import Featured from "../HomeComponent/Featured/Featured";

import Slider from "../HomeComponent/Slider";
import Testimonials from "../HomeComponent/Testimonials";
import PopularMenu from "./PopularMenu";


const Home = () => {
    return (
        <div>
              <Helmet>
        <title>Bistro|| Home</title>
  
      </Helmet>
       <Banner></Banner>
       <Slider></Slider>
       <PopularMenu></PopularMenu>
       <Featured></Featured>
       <Testimonials></Testimonials>
        </div>
    );
};

export default Home;