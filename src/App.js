import './App.css';
import countdownMaker from "./components/countdown";
import navBarMaker from './components/navBar';
import footerMaker from './components/footer';

function App() {

    const CountDown = countdownMaker();
    const NavBar = navBarMaker({text: 'Camping 2k22'});
    const Footer = footerMaker();

    return (
        <div className="vh-100 d-flex justify-content-between flex-column">
            <NavBar/>
            <div className="pt-5 camp-bg d-flex flex-grow-1 align-items-md-start
        justify-content-center m-0 text-center text-shadow-base">
                <CountDown/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
