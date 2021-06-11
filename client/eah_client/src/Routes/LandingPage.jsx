import '../components/LoginPage_Components/styles/Login.css';
import { Redirect } from 'react-router-dom';
import videosrc from '../components/LoginPage_Components/media/bgv.mp4';


export const LandingPage=()=>{
    return (
    <div className="LandingPage LoginPage" style={{width:"100%",height:"100vh"}}>
                <video id="videoBkg" preload autoPlay muted loop>
                <source src={videosrc} type="video/mp4"/>
                </video>

                <div class="hero-section">
                <h1>Your</h1>
                <h1>Exam</h1>
                <h1>Alteration</h1>
                <h1>Helper</h1>
                {/* <p>Need we say more? <br/>Login to<strong>YEAH</strong>and make your life easy.</p> */}
                
                <a id="getStartedbtn" href="/login">Get started</a>
                </div>
    </div>
    );
}

