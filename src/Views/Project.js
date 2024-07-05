import React , {useEffect} from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import ProjectLanding from './ProjectLanding'
import ProjectSlider from './ProjectSlider'
import Upcount from './Upcount'
import MultiProject from './MultiProjects'
import FeatureProject from './FeatureProject'
import MoreFeaturesProject from './MoreFeaturesProject'
import BlogProject from './BlogProject'
import WorkFlow from './WorkFlow'
import InfiniteScroll from './InfiniteScroll'
import Testimonials from './Testimonials'
import BrandScroll from './BrandScroll'

export default function Project() {
  useEffect(() => {
    // Disable horizontal scrolling
    document.body.classList.add('overflow-x-hidden');

    // Clean up by enabling horizontal scrolling when the component unmounts
    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);

    return (
        <>
        <div id="top" className='absolute top-0'></div>
        <Navbar bg="projectNav"/>
        <ProjectLanding />
        <ProjectSlider/>
        <Upcount/>
        <InfiniteScroll/>
        <MultiProject/>
        <FeatureProject/>
        <MoreFeaturesProject/>
        <BrandScroll/>
        <BlogProject/>
        <WorkFlow/>
        <Testimonials/>
        <Footer/>
        </>
  )
}
