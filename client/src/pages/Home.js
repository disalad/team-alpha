import MainBody from '../components/Home/MainBody';
// import Services from '../components/Home/Services';
import Projects from '../components/Home/Projects';
import AboutUs from '../components/Home/AboutUs';
import OurAdmins from '../components/Home/OurAdmins';

function Home() {
    return (
        <>
            <MainBody />
            {/* <Services /> */}
            <Projects />
            <AboutUs />
            <OurAdmins />
        </>
    );
}

export default Home;
