import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Cal Sophomore", "Full-Stack Developer" ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.6);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(350);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm Naomi, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Cal Sophomore", "Full-Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Hi, This is Naomi, a passionate and inventive software engineer who enjoy facing challenges and working things out from scratch. My journey in tech is driven by a relentless curiosity and a commitment to creating innovative solutions that make a real-world impact. From developing an advanced plant imaging system to leading a full-stack web development project, I thrive on challenges that require both creative and analytical thinking.</p>
                  <a>Always Curious and Always Learning. Welcome to my portfolio, created within 15 hrs using React and Node.js — technologies I had never worked with before.</a>
                  <button onClick={() => window.open('https://drive.google.com/file/d/1D26jevzk-dkCFDdG32jeTBILkK1jd0ap/view?usp=sharing', '_blank')}>Downlowd my CV <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
