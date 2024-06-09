import {Container,Row,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import mypic1 from "../assets/img/mypic1.png"
import { useState,useEffect } from "react";

export const Banner=()=>{
    const torotate=["Web Developer","Web Designer","Student"];
    const [loopnum,setloopnum]=useState(0);
    const [isdeleting,setisdeleting]=useState(false);
    const [delta,setdelta]=useState(150-Math.random()*100); //how fast each word is appearing after another
    const period=1000;
    const [text,settext]=useState("");
    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta);
        return ()=> {clearInterval(ticker)};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text,delta]);

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
            setdelta(300) ;
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Ruchita Agarwal `}<span className="wrap">{text}</span></h1>
                        
                            <button onClick={()=>console.log('connect')}>Lets Connect <ArrowRightCircle color="royalblue" size={25} /></button>
                    
                    </Col>
                    <Col xs={10} md={6} xl={5}>
                        <img src={mypic1} alt="headerimage" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner