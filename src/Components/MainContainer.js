import React, { Fragment, useState, useEffect} from 'react'
import { Container, Row, Col, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './MainContainer.css'
import circle from '../Icons/circle.svg'
import diagonalTopLeft from '../Icons/diagonalTopLeft.svg'
import diagonalTopRight from '../Icons/diagonalTopRight.svg'
import up from '../Icons/up.svg'
import right from '../Icons/right.svg'
import left from '../Icons/left.svg'
import diagonalDownRight from '../Icons/diagonalDownRight.svg'
import diagonalDownLeft from '../Icons/diagonalDownLeft.svg'
import down from '../Icons/down.svg'
import { CopyToClipboard } from "react-copy-to-clipboard";

export const MainContainer = () => {
  const [direction, setDirection] = useState("top left");
  const [type, setType] = useState("linear");    
  const [color1, setColor1]= useState('#dd06a0')
  const [color2, setColor2]= useState('#19a6c3')
  const [message, setMessage] = useState("Copy CSS")
  const [randomColor1, setRandomColor1] = useState("");
  const [randomColor2, setRandomColor2] = useState("");
 
    useEffect(() => {
        if (type === "linear" && direction === "center") {
          setDirection("left");
        }
      }, [type, direction]);
    
    
      function generateRandomColor(){
          let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
          return randomColor;
      }
    
      function setRandomColors(){
          let newColor1 = generateRandomColor('');
          let newColor2 = generateRandomColor('');
          setRandomColor1(newColor1)
          setRandomColor2(newColor2)
      }
 
      function setChange(){
        setMessage("YAY! Copied to Clipboard!")
    }

      function getRadialGradient(color1, color2, direction) {
        return  `radial-gradient(ellipse at ${direction}, ${color1}, ${color2})`
           
      }
    
      function getLinearGradient(color1, color2, direction) {
        return `linear-gradient(to ${direction}, ${color2}, ${color1})`
          
    }

return (
  <Fragment>
    <div className="main-container">
    <div className="flex-column">
            <Container fluid>
                <Row className="title-container">
                <h3>CSS GRADIENT GENERATOR</h3>
                </Row>
            </Container> 
            <Container>
        <Row>
        <p className="title">Style</p>
        </Row>
        <ButtonToolbar className="buttons" aria-label="Toolbar with button groups">
            <Button value="linear" onClick={(e) => setType(e.target.value)}
            variant="outline-dark">Linear</Button>
            <Button value="radial" onClick={(e) => setType(e.target.value)}
            variant="outline-dark">Radial</Button>
        </ButtonToolbar>
    </Container>  
        <Container>
        <Row>
        <p className="title">Direction</p>
        </Row>
        <div>
        <ButtonToolbar className="button-container" aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="Basic example" size="lg">
            <Button value="top left" onClick={(e) => setDirection(e.target.value)} variant="outline-secondary"><img className="Icon" src={diagonalTopLeft} alt="top left arrow"/></Button>
            <Button value="top" onClick={(e) => setDirection(e.target.value)} variant="outline-secondary"><img className="Icon" src={up} alt="up arrow"/></Button>
            <Button value="top right" onClick={(e) => setDirection(e.target.value)} variant="outline-secondary"><img className="Icon" src={diagonalTopRight} alt="top right arrow"/></Button>
        </ButtonGroup>
        </ButtonToolbar>
        <ButtonToolbar className="button-container" aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="Basic example" size="lg">
            <Button value="left" onClick={(e) => setDirection(e.target.value)} variant="outline-secondary"><img className="Icon" src={left} alt="left arrow"/></Button>
            {type === "radial" && <Button value="center" onClick={(e) => setDirection(e.target.value)} variant="outline-secondary"><img className="Icon" src={circle} alt="circle"/></Button>}
            <Button value="right" onClick={(e) => setDirection(e.target.value)} variant="outline-secondary"><img className="Icon" src={right} alt="right arrow"/></Button>
        </ButtonGroup>
        </ButtonToolbar>
        <ButtonToolbar className="button-container" aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="Basic example" size="lg">
            <Button value="bottom left" onClick={(e) => setDirection(e.target.value)} variant="outline-secondary"><img className="Icon" src={diagonalDownLeft} alt="down left arrow"/></Button>
            <Button value="bottom" onClick={(e) => setDirection(e.target.value)} variant="outline-secondary"><img className="Icon"src={down} alt="down arrow"/></Button>
            <Button value="bottom right" onClick={(e) => setDirection(e.target.value)} variant="outline-secondary"><img className="Icon" src={diagonalDownRight} alt="down right arrow"/></Button>
        </ButtonGroup>
        </ButtonToolbar>
        </div>
    </Container> 
    <Container fluid>
  <Row>
  <p className="title">Colors</p>
  </Row>
  <Row>
  <Col sm={4}><input className="color-input" type="color" value={color1} onChange={(e) => setColor1(e.target.value)} /></Col>
  <Col sm={4}><input className="color-input" type="color" value={color2} onChange={(e) => setColor2(e.target.value)} /></Col>
  <Col sm={4}><Button onClick={setRandomColors} variant="outline-dark">Random</Button></Col>
  </Row>
  <p>elegiste {randomColor1} y {randomColor2} </p>
</Container>
           <Container>
            <Row className="justify-content-center">
                <CopyToClipboard text={type === "radial" ? 
            getRadialGradient(color1, color2, direction) 
            : getLinearGradient(color1, color2, direction)}>
            <Button onClick={setChange} variant="dark" size="lg">
                 {message}
            </Button>
            </CopyToClipboard>
            </Row>
            </Container>            
        </div>
        <div className="canva">
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: 
            type === "radial" ? 
            getRadialGradient(color1, color2, direction) 
            : getLinearGradient(color1, color2, direction),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
        </div>
      </div>
    </div>
  </Fragment>
)
}