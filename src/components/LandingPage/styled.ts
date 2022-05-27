import styled, { keyframes } from 'styled-components'
import { linear, linearLoad } from '../../Page/styled'


const WhiteBox = keyframes`
from {
  transform: translateX(0)
}
to {
  transform: translate(430px)
}
`

const NavTranslate = keyframes`
  from {
    transform: translateY(-80px)
  }
  to {
    transform: translateY(0px)
  }
`

//----------RELATIVE----------------//
export const Relative = styled.div`
    position: relative;
    height: 100%;
    
    @media (max-width: 425px) {
      width: 425px;
      height: 100%;
      overflow: hidden;
    }
    .fixed-position {
      height: 100vh;
      width: 100%;
      position: fixed;
    }
`

//----------LOADING----------------//
export const LoadingContainer = styled.div<{firstColor: string, secondColor: string}>`
  height: 100vh;
  width: 0%;
  background-color: ${props => props.firstColor};
  animation: ${linear} 0.8s ease both;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 100vh;
    width: 0%;
    background-color: ${props => props.secondColor};
    animation: ${linear} 1s ease both;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    z-index: 2;

    ul {
      height: auto;
      width: 300px;
      position: relative;
      margin: 0px;
      padding: 0px;
      
      @media (max-width: 425px){
        transform: translateY(-30px)
      }
    }

    li {
      list-style: none;
    }
    li:nth-child(1) {
      position: absolute;
      top: 0;
      height: 30px;
      width: 0px;
      background-color: #fff;
      animation: ${linearLoad} 1.6s ease-out infinite 0.5s;
    }
    li:nth-child(2) {
      position: absolute;
      top: 30px;
      height: 30px;
      width: 0px;
      background-color: #fff;
      animation: ${linearLoad} 1.8s ease-out infinite 0.5s;
    }
    li:nth-child(3) {
      position: absolute;
      top: 60px;
      height: 30px;
      width: 0px;
      background-color: #fff;
      animation: ${linearLoad} 2s ease-out infinite 0.5s;
    }
  }
`
//----------NAVBAR----------------//
export const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  background: rgba(28,29,37,.9);
  color: #B0B2C3;
  font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
  opacity: 0.9;
  animation: ${NavTranslate} 0.5s ease forwards;
  z-index: 10;

`
export const ArrowLeft = styled.span`
  position: absolute;
  top: 0;
  left: -30px;
  transform: rotate(180deg);
  font-size: 22px;
  display: flex;
  font-weight: bold;
`
export const NavWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

    img {
      height: 55px;
      cursor: pointer;

      @media (max-width: 425px){
        height: 50px;
        transform: translateX(20px)
      }
      @media (max-width: 375px){
        height: 40px;
      }
    }
    ul {
      display: flex;
      list-style: none;
      gap: 30px;
      font-size: 1.1em;

      @media (max-width: 425px){
        display: none;
      }
      
      .home-link {
        color: #B0B2C3;
        text-decoration: none;
      }
      
   
      .home-hover {
        position: relative;
      }

      .arrow-relative {
        transition: 0.5s;
      }

      .home-hover:hover .arrow-relative {
        transform: translateX(-10px);
      }

      li {
        list-style: none;
        position: relative;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-weight: bold;
        height: auto;
        cursor: pointer;
      }
      
      li span:before {
        content: "";
        position: absolute;
        bottom: -1px;
        right: 0;
        left: auto;
        width: 100%;
        transform: translateX(150px);
        height: 4px;
        z-index: 2;
        background-color: #235aa6;
        transition: all .25s cubic-bezier(.694,.048,.335,1) .17s;
      }

      li span:after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        transform: translateX(-150px);
        height: 4px;
        z-index: 2;
        background-color: #f25757;
        transition: all .25s cubic-bezier(.694,.048,.335,1);
      }

      li:hover span:after {
        transform: translateX(0px);
       
      }
      li:hover span:before {
        transform: translateX(0px)
      }
    }
`

export const Hamburger = styled.div`
  position: absolute;
  top: 13px;
  right: 30px;
  height: 50px;
  width: 60px;
  background-color: transparent;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  visibility: hidden;

  @media (max-width: 375px){
    top: 5px;
  }

  span:nth-child(1) {
    height: 4px;
    width: 100%;
    background-color: #BDBEC5;
    display: block;
    border-radius: 12px;
  }
  span:nth-child(2) {
    height: 4px;
    width: 75%;
    background-color: #BDBEC5;
    display: block;
    border-radius: 12px;
  }
  span:nth-child(3) {
    height: 4px;
    width: 50%;
    background-color: #BDBEC5;
    display: block;
    border-radius: 12px;
  }
  @media (max-width: 425px){
    visibility: visible;
  }
`
//----------MAIN----------------//
export const Background = styled.div`
  height: 90vh;
  width: 100%;
  background-position: 50%;
  position: relative;

 @media (max-width: 375px) {
   height: 100vh;
 }

  .background-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: block;
    background: #000;
    opacity: .55;
    transition: opacity .3s ease;
    z-index: 2;
  }
  img {
    height: 90vh;
    width: 100%;
    object-fit: cover;

    @media (max-width: 375px) {
      height: 100vh;
    }
  }
`

export const BackgroundText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #fff;
  z-index: 3;

  .background-text-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .title-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 375px){
      transform: translateY(0);
    }
    h1 {
      color: #fff;
      font-size: 4em;
      margin: 0;
      position: relative;
      overflow: hidden;
      margin-bottom: 30px;

      @media (max-width: 425px){
        font-size: 3em;
      }
      
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100px;
        width: 430px;
        background-color: #fff;
        animation: ${WhiteBox} 0.8s ease forwards; 
      }
    }
  
    h3 {
      color: #fff;
      position: relative;
      font-size: 1.5em;
      font-style: italic;
      font-weight: normal;
      overflow: hidden;
      margin: 0;
      
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100px;
        width: 430px;
        background-color: #fff;
        animation: ${WhiteBox} 1.5s ease forwards; 
      }
    }


  }
  ul {
    color: #fff;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 66em;

    
    @media (max-width: 425px){
      flex-direction: column;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      gap: 20px;
      justify-content: center;
      width: 100%;
      align-items: center;
      margin: 0;
      padding-bottom: 20px;
    }

    li {
      font-size: 1em;
      font-weight: bold;
      color: #37A5EB;
      text-transform: uppercase;
      display: flex;
      gap: 10px;
      span {
        color: #fff;
      }
    }
  }
`
//----------PROJECT----------------//
export const Project = styled.div<{color: string}>`
  height: 40vh;
  width: 100%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;

    div {
      width: 30em;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 50px;
      z-index: 10;

      @media (max-width: 425px){
        width: 23em;
      }
      @media (max-width: 375px){
        top: 0;
      }
    }
    h2 {
      font-size: 4rem;
      color: #fff;
      margin: 5px 0px;

      @media (max-width: 425px){
        font-size: 3em;
      }
    }

    p {
      font-size: 1.2em;
      color: #fff;
      font-style: italic;
      text-align: center;

      @media (max-width: 425px){
        font-size: 1.2em;
      }
      
    }
    span {
      position: absolute;
      bottom: -35px;
      left: 200px;
      font-size: 10rem;
      fill: #fff;
      color: #f3f3f3;
      z-index: 5; 
      opacity: 0.1;
      overflow: hidden;
      
      @media (max-width: 425px){
        left: 50px;
        font-size: 10rem;
        width: 300%;
      }

    }
`

export const VisitPage = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(100px);
  
  button {
    height: 45px;
    width: 180px;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    font-size: 1.2em;
    cursor: pointer;
    position: relative;

    &:hover .project-right-arrow {
      color: #fff;
      transform: translateX(30px)
    }
    .project-right-arrow {
      position: absolute;
      top: 6px;
      right: 0;
      transform: translateX(20px);
      transition: 0.5s;
    }

    &:hover {
      background-color: #fff;
      color: #060c10;
    }
  }

  


`
//----------COMPONENTS----------------//
export const ComponentsContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: transparent;
`

export const ComponentsWrapper = styled.div`
    width: 60em;
    height: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;

    @media (max-width: 425px){
      width: 425px;
    }

    h3 {
      font-size: 14px;
      letter-spacing: 2px;
      color: #b19386;
      margin-top: 80px;
    }

    h2 {
      color: #4a4a4a;
      font-size: 35px;
      margin: 0;
      margin-top: 10px;
    }

    .components-line {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 1px solid #e8e8e9;
      z-index: -1;

      @media (max-width: 425px){
        width: 80%;
        left: 50%;
        transform: translateX(-50%)
      }


      span {
        display: block;
        height: 100%;
        width: 50%;
        border-right: 1px solid #e8e8e9;
      }

    }
    .components-design {
      height: 350px;
      margin: 100px 0px;
      box-shadow: 6px 7px 9px 0px rgba(99,93,93,0.75);
      -webkit-box-shadow: 6px 7px 9px 0px rgba(99,93,93,0.75);
      -moz-box-shadow: 6px 7px 9px 0px rgba(99,93,93,0.75);


      @media (max-width: 425px){
        height: 300px;
        width: 350px;
        object-fit: cover;
      }
    }
`

export const ColorContainer = styled.div<{one: string, two: string, three: string, four: string, five: string}>`
  width: 110%;
  display: flex;
  height: 20vh;
  gap: 70px;
  margin-top: 100px;

  @media (max-width: 425px){
    flex-direction: column;
    gap: 0;
    height: auto;
    width: 100%;
    gap: 70px;
    margin-top: 70px;
    align-items: center;
    margin-bottom: 50px;
  }


  .color-circle {
    width: 160px;
    height: 160px;
    background-color: red;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 33%);
    border-radius: 50%;
    transition: all .3s;
    position: relative;
    p {
      font-size: .8125em;
      font-family: Consolas,Monaco,Bitstream Vera Sans Mono,Courier,monospace;
      font-weight: 400;
      color: #4a4a4a;
      position: absolute;
      bottom: -41px;
      left: 30%;

      @media (max-width: 425px){
        left: 32%;
      }
    }
  }

  .color-circle.ebony {
    background-color: ${props => props.one};
  }
  .color-circle.mine {
    background-color: ${props => props.two};
  }
  .color-circle.gallery {
    background-color: ${props => props.three};
  }
  .color-circle.white {
    background-color: ${props => props.four};
  }
  .color-circle.denim {
    background-color: ${props => props.five};
  }
`

export const FontContainer = styled.div`
  width: 100%;
  display: flex;
  margin-left: -50px;

  @media (max-width: 425px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 400px;

    @media (max-width: 425px){
      height: 350px;
      transform: translateX(50px)
    }
  }
`

export const NextPage = styled.div<{first: string, second: string}>`
  height: 150px;
  width: 100%;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;

 


  .next-link {
   color: black;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.second};
    width: 100%;
    height: 100%;
    transition: 0.8s ease-in-out;
    transform: translateY(-149px);
    
  }
  &:hover:after {
    transform: translateY(0px);
  }

  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color:  ${props => props.first};
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in-out;
    transform: translateY(-149px);
  }

  &:hover:before {
    transform: translateY(0px);
  }

  &:hover div {
    color: #fff;
  }
  &:hover div p {
    color: #fff;
  }
  &:hover .arrow-right-next {
    color: #fff;
    transform: translateX(50px)
  }
  div {
    width: 60em;
    margin: 0 auto;
    padding-top: 10px;
    position: absolute;
    left: 25%;
    z-index: 5;

    @media (max-width: 425px){
      width: 425px;
      left: 0;
      padding-left: 20px;
    }

    .arrow-right-next {
      position: absolute;
      top: 70px;
      right: 100px;
      transition: 0.5s;

      @media (max-width: 425px){
        top: 52px;
        right: 60px;
      }
    }
   
    p {
      font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
      text-transform: uppercase;
      color: #b19386;
      font-size: .95em;
      font-weight: 400;
    }

    h1 {
      font-size: 2.827145944em;
      line-height: 1.0611408323;
      font-weight: bold;
      text-decoration: underline;
      text-underline-offset: 7px;
      text-decoration-color: ${props => props.second};

      
      @media (max-width: 425px){
        font-size: 2em;
      }
    }
  }
`
////-----------WORKS------/////////////

const ButtonFrame = keyframes`
from {
  transform: translateY(-60px);
}
to {
  transform: translateY(0);
}
`
export const ButtonContainer = styled.div`

  position: fixed;
  top:0;
  left: 50%;
  z-index: 30;

  @media (max-width: 425px){
    transform: translateX(-50%)
  }
  
  button {
   
    animation: ${ButtonFrame} 0.5s ease forwards;
    background-color: #f06449;
    background: linear-gradient(270deg,#f06449,#ef3636);
    border: none;
    outline: none;
    padding: 12px;
    font-size: 1.1em;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

export const ContainerSection = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  height: 100%;
  width: 900px;
  z-index: 20;
  margin-top: 80px;

  @media (max-width: 425px){
    width: 425px
  }
`
const PictureFrame = keyframes`
  from {
    transform: translateX(-500px)
  }
  to {
    transform: translateX(0)
  }
`
const DetailsFrame = keyframes`
  from {
    transform: translateX(500px)
  }
  to {
    transform: translateX(0)
  }
`
const NumberFrames = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`

const PictureFrameRight = keyframes`
  from {
    transform: translateX(500px)
  }
  to {
    transform: translateX(0)
  }
`
const DetailsFrameRight = keyframes`
  from {
    transform: translateX(-500px)
  }
  to {
    transform: translateX(0)
  }
`
const NumberFramesRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`
export const CardContainer = styled.div`
  height: 458px;
  width: 100%;
  background-color: transparent;
  display: flex;
  box-shadow: 0 20px 80px 0 rgb(0 0 0 / 55%);

  @media (max-width: 425px){
    height: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .picture-container {
    width: 40%;
    height: 100%;
    background-color: transparent; 
    position: relative;
    animation: ${PictureFrame} 0.5s cubic-bezier(.694,.048,.335,1) 0.2s;
    
    @media (max-width: 425px){
      display:none;
      
    }

    &:after {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        content: " ";
        background: #000;
        opacity: .4;
        transition: opacity .3s ease;
        z-index: 10;
      }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    span {
      position: absolute;
      bottom:0;
      right: 0;
      font-size: 11em;
      font-family: League Spartan,Helvetica,Arial,sans-serif;
      text-shadow: 5px 5px 11px rgb(0 0 0 / 50%);
      color: #fff;
      z-index: 30;
      font-weight: 900;
      animation: ${NumberFrames} 2s ease forwards;
    }
  }

  .picture-details {
    width: 60%;
    height: 100%;
    background-color: #e6e6e6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    position: relative;
    overflow: hidden;
    animation: ${DetailsFrame} 0.5s cubic-bezier(.694,.048,.335,1); 

 
    .works-link {
      text-decoration: none;
    }

    h1 {
      color: #1c1d25;
      font-size: 3.75em;
      margin: 0;
      font-weight: 900;
      font-family: League Spartan,Helvetica,Arial,sans-serif;
      line-height: 1.2;

      @media (max-width: 425px){
        font-size: 2em;
      }
    }
    h3{
      font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
      color: #76869d;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: .8125em;
    }
    p {
      text-align: center;
      font-size: .9375em;
      margin-bottom: 25px;
    }
    span {
      position: absolute;
      bottom: -30px;
      left: -10px;
      width: 1000px;
      font-size: 6.5rem;
      color: #fff;
      z-index: 5; 
      color: #B8B8B8;

    }

      
    button {
      background-color: #f06449;
      background: linear-gradient(270deg,#f06449,#ef3636);
      border: none;
      outline: none;
      padding: 10px 25px;
      font-size: 1.1em;
      color: #fff;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      z-index: 100;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(270deg,#235aa6,#101b3b);
        height: 100%;
        transition: 0.5s ease;
        width: 100%;
        transform: translateX(-150px)
      }

      &:hover::after{
        transform: translateX(150px)
      }
      
    }

  }
`
export const CardContainerRight = styled.div`
  height: 458px;
  width: 100%;
  background-color: transparent;
  display: flex;
  box-shadow: 0 20px 80px 0 rgb(0 0 0 / 55%);
  margin: 50px 0px;

  @media (max-width: 425px){
    height: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .picture-container {
    width: 40%;
    height: 100%;
    background-color: transparent; 
    position: relative;
    animation: ${PictureFrameRight} 0.5s cubic-bezier(.694,.048,.335,1) 0.2s; 

    
    @media (max-width: 425px){
      display:none;
      
    }

    
    &:after {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        content: " ";
        background: #000;
        opacity: .4;
        transition: opacity .3s ease;
        z-index: 10;
      }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    span {
      position: absolute;
      bottom:0;
      left: 0;
      font-size: 11em;
      font-family: League Spartan,Helvetica,Arial,sans-serif;
      text-shadow: 5px 5px 11px rgb(0 0 0 / 50%);
      color: #fff;
      z-index: 30;
      font-weight: 900;
      animation: ${NumberFramesRight} 2s ease forwards;
    }
  }

  .picture-details {
    width: 60%;
    height: 100%;
    background-color: #e6e6e6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    position: relative;
    overflow: hidden;
    animation: ${DetailsFrameRight} 0.5s cubic-bezier(.694,.048,.335,1);
    
    .works-link {
      text-decoration: none;
    }

    h1 {
      color: #1c1d25;
      font-size: 3.75em;
      margin: 0;
      font-weight: 900;
      font-family: League Spartan,Helvetica,Arial,sans-serif;
      line-height: 1.2;

      @media (max-width: 425px){
        font-size: 2em;
      }
    }
    h3{
      font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
      color: #76869d;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: .8125em;
    }
    p {
      text-align: center;
      font-size: .9375em;
      margin-bottom: 25px;
    }
    span {
      position: absolute;
      bottom: -30px;
      left: -10px;
      width: 1000px;
      font-size: 6.5rem;
      color: #fff;
      z-index: 5; 
      color: #B8B8B8;

    }

      
    button {
      background-color: #f06449;
      background: linear-gradient(270deg,#f06449,#ef3636);
      border: none;
      outline: none;
      padding: 10px 25px;
      font-size: 1.1em;
      color: #fff;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(270deg,#235aa6,#101b3b);
        height: 100%;
        transition: 0.5s ease;
        width: 100%;
        transform: translateX(-150px)
      }

      &:hover::after{
        transform: translateX(150px)
      }
      
    }

  }
`

export const ContactContainer = styled.div`
  height: 60vh;
  width: 60%;
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1000;
  box-shadow: 0 20px 80px 0 rgb(0 0 0 / 55%);

  @media (max-width: 425px){
    top: 269px;
    width: 100%;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;

  @media (max-width: 425px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`
const AboutFrames = keyframes`
from {
  transform: translateY(-600px)
}
to {
  transform: translateY(0px)
}
`
const ContactFrames = keyframes`
from {
  transform: translateY(600px)
}
to {
  transform: translateY(0px)
}
`
export const About = styled.div`
  height: 60vh;
  width: 100%;
  background-color: #EBEBEB;
  position: relative;
  overflow: hidden;
  font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s ease;
  animation: ${AboutFrames} 0.5s ease;

  @media (max-width: 425px){
    order: 2;
  }

  .about-text {
    font-size: 200px;
    font-weight: bold;
    position: absolute;
    opacity: .07;
    top: -10px;
    left: 100px;
    color: #4a4a4a;
    z-index: 100;
  }

  section {
    padding: 0 70px;
    transform: translateY(-30px);
    
    @media (max-width: 425px) {
      padding: 40px;
      padding-top: 100px;
    }

    h1 {
      font-weight:bold;
    }

    .about-label{
      font-style: italic;
      color: #505157;
      font-weight:bold;
    }

    .about-paragraph {
      color: #505157;
      font-size: 1.1em;
      text-align: justify;
      font-weight:bold;

      span {
        color: #F0684E;
      }
    }
  }
  .about-icons {
    display: flex;
    justify-content: center;
    gap: 5%;
    transform: translateY(0);

    @media (max-width: 425px) {
      transform: translateY(-120px);
      gap: 3%;
    }

    .icon1:hover {
      color: #5ED3F3;
    }

    .icon2:hover {
      color: #EFD81D;
    }

    .icon3:hover {
      color: #E96228;
    }

    .icon4:hover {
      color: #2F4BD9;
    }

    .icons-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin: 0;
        margin-top: 5px;
        font-weight: bold;
        transform: translateY(15px);
        opacity: 0;
        transition: 0.5s;
      }

      &:hover p {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
`

export const ContactMe = styled.div`
  height: 60vh;
  width: 100%;
  background-color: #1C1D25;
  position: relative;
  overflow: hidden;
  font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${ContactFrames} 0.5s ease;

  @media (max-width: 425px){
    order: 1;
  }

  section {
    color: #DADADA;
    width: 70%;
    transform: translateY(-50px);
    position: relative;
    margin-top: 50px;
    
    h1 {
      text-align: start;
      font-size: 2em;
      margin: 10px 0px;
    }

    p {
      font-size: 1em;
      margin: 0;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .input-wrapper {
        position: relative;
        overflow: hidden;

        .input-color-area {
          position: absolute;
          bottom: 5px;
          left: 0;
          height: 2px;
          background: linear-gradient(270deg,#235aa6,#101b3b);
          z-index: 2;
          width: 100%;
          transition: 0.5s ease;
          transition-delay: 0.1s;
          transform: translateX(-410px);
        }

        .second-input-color-area {
          position: absolute;
          bottom: 5px;
          left: 0;
          height: 2px;
          background-color: #f06449;
          background: linear-gradient(270deg,#f06449,#ef3636);
          z-index: 1;
          width: 100%;
          transition: 0.5s ease;
          transform: translateX(-410px);
        }

        &:hover .input-color-area {
           transform: translateX(0px);
        }
        &:hover .second-input-color-area {
           transform: translateX(0px);
        }


        .input-color {
          position: absolute;
          bottom: 0px;
          left: 0;
          height: 2px;
          background: linear-gradient(270deg,#235aa6,#101b3b);
          z-index: 2;
          width: 100%;
          transition: 0.5s ease;
          transition-delay: 0.1s;
          transform: translateX(-400px);

        }

        .second-input-color {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background-color: #f06449;
          background: linear-gradient(270deg,#f06449,#ef3636);
          z-index: 1;
          width: 100%;
          transition: 0.5s ease;
          transform: translateX(-400px);
        }

        &:hover .input-color {
          transform: translateX(0);
        }
        &:hover .second-input-color {
          transform: translateX(0);
        }
      }

      div input, textarea {
        width: 100%;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px solid #DADADA;
        background-color: transparent;
        outline: none;
        color: #DADADA;
        transition: 0.5s ease;
        font-size: 1em;

        &:after {
          content: "";
          border-left: 2px solid #f51c40;
          position: absolute;
          top: 50%;
          bottom: 0;
        }

      }

      button {
        width: 50%;
        height: 40px;
        background-color: #f06449;
        background: linear-gradient(270deg,#f06449,#ef3636);
        border: none;
        outline: none;
        color: rgb(173,146,147);
        font-size: 1.3em;
        font-weight: bold;
        cursor: pointer;
        font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
        position: relative;
        overflow: hidden;
        
        @media (max-width: 425px) {
          width: 75%;
        }

        span {
          position: absolute;
          top: 5px;
          left: 30px;
          z-index: 10;
        }

        &::after{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(270deg,#235aa6,#101b3b);
          width: 100%;
          transform: translateX(-230px);
          transition: 0.5s ease;
        }
        &:hover::after {
          transform: translateX(230px)
        }
      }
    }
    .contact-close-button {
      position: absolute;
      top: -10px;
      right: -60px;
      z-index: 20;
      height: 40px;
      width: 40px;
      cursor: pointer;

      @media (max-width: 425px){
        right: -40px;
        top: 0px;
      }

      .first-line {
        position: absolute;
        height: 3px;
        width: 35px;
        background-color: #DADADA;
        transform: rotate(135deg);
        transition: 0.5s ease;
        z-index: 1;
        top: 20px;
        overflow: hidden;

        .line-color {
          position: absolute;
          top: 50%;
          left: 50%;
          height: 50px;
          width: 50px;
          background-color: #f06449;
          background: linear-gradient(270deg,#f06449,#ef3636);
          z-index: 2;
          transform: rotate(45deg) translateX(10px) translateY(0px);
          transition: 0.5s ease;
        }
      }

      &:hover .line-color {
        transform: translateX(-60px) translateY(-60px);
      }

      .second-line {
        position: absolute;
        top: 20px;
        height: 3px;
        width: 35px;
        background-color: #DADADA;
        transform: rotate(45deg);
        transition: 0.5s ease;
        z-index: 1;
        overflow: hidden;

        .second-line-color {
          position: absolute;
          top: 50%;
          right: 50%;
          height: 50px;
          width: 50px;
          background-color: #f06449;
          background: linear-gradient(270deg,#f06449,#ef3636);
          z-index: 2;
          transform: rotate(45deg) translateY(5px);
          transition: 0.5s ease;
        }
      }

      &:hover .second-line-color {
        transform: translateY(-60px) translateX(40px);
      }

      &:hover .first-line {
        transform: rotate(223deg);
      }
      &:hover .second-line {
        transform: rotate(-45deg);
      }
    }
  }
  .contact-text {
    font-size: 200px;
    font-weight: bold;
    position: absolute;
    opacity: .07;
    font-family: League Spartan,Helvetica,Arial,sans-serif;
    bottom: -10px;
    left: 40px;
    color: #4a4a4a;
    pointer-events: none;
  }
`