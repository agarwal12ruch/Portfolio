import {Container,Row,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerimg from "../assets/img/headerimg.svg"
import { useState,useEffect } from "react";

export const Banner=()=>{
    const torotate=["Web Developer","Web Designer","Student"];
    const [loopnum,setloopnum]=useState(0);
    const [isdeleting,setisdeleting]=useState(false);
    const [delta,setdelta]=useState(300-Math.random()*100); //how fast each word is appearing after another
    const period=2000;
    const [text,settext]=useState("");
    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)
        return ()=> {clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i=loopnum % torotate.length; //to go back to the first element
        let fulltext=torotate[i];
        let updatedtext=isdeleting? fulltext.substring(0,text.length-1):fulltext.substring(0,text.length+1); //if isdeleting is true then remove one letter and if false then add one word
        settext(updatedtext);

        if(isdeleting){
            setdelta(prevdelta=>prevdelta/2)
        }
        if(!isdeleting && updatedtext===fulltext){
            setisdeleting(true);
            setdelta(period);
        }
        else if(isdeleting && updatedtext=== ''){
            setisdeleting(false);
            setloopnum(loopnum+1);
            setdelta(500) ;
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Ruchita Agarwal `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit minima eaque aliquid, consequatur magni nesciunt. Non quisquam saepe excepturi minus esse.
                            <button onClick={()=>console.log('connect')}>Lets Connect <ArrowRightCircle color="royalblue" size={25} /></button>
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerimg} alt="headerimage" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}