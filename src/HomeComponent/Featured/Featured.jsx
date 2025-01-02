
import featuredImage from '../../assets/home/featured.jpg'
import SectionTittle from '../SectionTittle';
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed my-10 text-white">
            <SectionTittle subHeading={'Check It Out'} heading={'FROM OUR MENU'}></SectionTittle>

          <div className="md:flex pb-20 pt-12  px-30 bg-opacity-40 text-white bg-slate-300 gap-4 justify-center items-center">
          <div>
                <img src={featuredImage} alt="" />
            </div>
            <div>
                <h1>March 20,2023</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium autem accusamus at fuga consectetur, voluptatum pariatur, illo ipsum voluptate in nam delectus natus eaque mollitia ducimus ratione eveniet. Saepe tenetur esse, a excepturi cumque quis maxime? Vitae aperiam deserunt iste!</p>
                <button className="btn-outline text-white btn border-0 border-b-4 mt-4">Read More</button>
            </div>
          </div>
        </div>
    );
};

export default Featured;