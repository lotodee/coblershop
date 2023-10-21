import React, { useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styled from 'styled-components'
import { sliderItems } from '../data';
import { mobile } from '../responsive';
import {Link} from "react-router-dom"
const Container = styled.div`
height:100vh;
width:100%;
display:flex;
overflow:hidden;
position: relative;
${mobile({display : "none"})}

`


const Links = styled(Link)`
text-decoration:none;
color: inherit;
}
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #ffa7d9;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top: 0;
bottom: 0;
margin:auto;
left:${props=>props.direction === "left" && "10px"};
right:${props=>props.direction === "right" && "10px"};
cursor:pointer;
opacity:0.5;
z-index:999;
`

const Wrapper = styled.div`
height:100%;
display: flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.slideIndex * -100}vw)

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display:flex;
align-items: center;
background-color:#${props=>props.bg};
`
const ImgContainer = styled.div`
height:100%;
flex:1

;

`
const InfoContainer = styled.div`

flex:1;
padding:50px
`

const Image = styled.img`
height:80%;
`
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Slider = () => {
   
  const [slideIndex , setSlideIndex] = useState(0)

  const handleClick=(direction)=>{
if(direction === "left"){
  setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
}else{
  setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
}
  }
  console.log("slider")
  return (
 <Container>
    <Arrow direction="left" onClick={(()=>{handleClick("left")})}>
    <ArrowLeftIcon />
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
      {sliderItems.map(item=>(
        
   
      <Slide bg={item.bg}>
      <ImgContainer>
      <Image src={item.img}/>
      </ImgContainer>
      <InfoContainer>
      <Title>{item.title}</Title>
      <Desc>{item.desc}</Desc>
      <Links to="/productlist">
      <Button>SHOP NOW</Button>
      </Links>
      </InfoContainer>``
      </Slide>
      ))}
      
    </Wrapper>
    <Arrow direction="right" onClick={(()=>{handleClick("right ")})}>
    <ArrowRightIcon/>
    </Arrow>
 </Container>
  )
}

export default Slider
