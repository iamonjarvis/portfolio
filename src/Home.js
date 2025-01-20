import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home">
                <Fade direction="down">
                    <div className="texts">
                        <span className="main-title">
                            <Typewriter
                                onInit={(typewriter) => {
                                typewriter
                                .typeString('Hi ,')
                                .pauseFor(500)
                                .typeString(" i'm <strong style='color: #ff5f00'>Sahil Patra </strong>!")
                                .start();
                            }}
                            />
                        </span>
                        <span className='subtitle'>I love creativity .</span>
                        </div>
                </Fade>
            </div>     
        </div>
    );
}
 
export default Home;