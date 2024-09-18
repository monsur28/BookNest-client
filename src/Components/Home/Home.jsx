import Banner from "./Banner/Banner";
import Catogory from "./Catogory/Catogory";
import Discount from "./Discount/Discount";
import Blogs from "./Blogs/Blogs";
import Brand from "./Brand/Brand";
import Community from "./Community/Community";
import PopulerBooks from "./PopulerBooks/PopulerBooks";
import Reviews from "./Reviews/Reviews";
import AnalyticSection from "./AnalyticSection/AnalyticSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Catogory></Catogory>
      <Discount></Discount>
      <PopulerBooks></PopulerBooks>
      <Brand></Brand>
      <Reviews></Reviews>
      <Blogs></Blogs>
      <Community></Community>
      <AnalyticSection></AnalyticSection>
    </div>
  );
};

export default Home;
