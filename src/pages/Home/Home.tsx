import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Stats from './Stats';
import FeaturedCourses from './FeaturedCourses';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>IyalX | Build Your Tech Career</title>
        <meta name="description" content="Premium software training and development company. Learn MERN Stack, Java, Python, Data Science with real-time projects and placement support." />
      </Helmet>
      
      <div className="w-full overflow-hidden">
        <Hero />
        <Stats />
        <FeaturedCourses />
        {/* Why Choose Us, Internships, Testimonials will be added here */}
      </div>
    </>
  );
};

export default Home;
