import styled, { keyframes} from 'styled-components'



const textFrame = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0
  }
`

const textFrameFrontEnd = keyframes`
  from {
    width: 20%;
  }
  to {
    width: 0
  }
`

export const ArrowDown = styled.span`
  position: absolute;
  bottom: -10px;
  font-size: 2rem;
  color: #fff;
  width: auto;
  transform: translateX(-50%) rotate(91deg);
  left: 50%;
  transition: 0.5s;
  cursor: pointer;
`

export const Container = styled.div<{textColor: string, textColorHover: string, textColorMain: string}>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 60%;
  margin: 0 auto;
  justify-content: center;
  padding-left: 5%;
  position: relative;
  z-index: 2;

  @media (max-width: 425px){
    width: 80%;
  }

  .name-wrapper {
    width: fit-content;
    position: relative;

    h1 {
      font-size: 4.5rem;
      font-weight: bold;
      color: ${props => props.textColorMain};
      margin: 0;
      width: fit-content;
      position: relative;

      @media (max-width: 425px){
        font-size: 2.5rem;
        width: 100%
      }
    }

    .white-name {
      position: absolute;
      top: 0;
      right: 0;
      height: 80px;
      background-color: #fff;
      animation: ${textFrame} 1.5s ease forwards;
    }
  }

  .text-wrapper {
    font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
    font-size: 1.3rem;
    font-style: italic;
    color:  ${props => props.textColorMain};
    margin: 0;
    margin-top: 20px;
    position: relative;

    .text-label {
      width: fit-content !important; 
    }
   

    .white-text-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      height: 45px;
      width: 0%;
      background-color: #fff;
      animation: ${textFrameFrontEnd} 1.5s ease forwards;
    }
  }

  .button-wrapper {
    width: 170px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 40px;
    position: relative;
    cursor: pointer;

    .white-box {
      position: absolute;
      top: 0;
      right: 0;
      height: 55px;
      background-color: #fff;
      animation: ${textFrame} 1.5s ease forwards;
    }
    .arrow-right {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 2rem;
      transition: 0.5s;
      color: #fff;
      z-index: 3;
    }
  }


  button {
    width: 140px;
    height: 50px;
    background-color: #f06449;
    background: linear-gradient(270deg,#f06449,#ef3636);
    border: none;
    outline: none;
    font-size: 1.3rem;
    color: #fff;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::after{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(270deg,#235aa6,#101b3b);
      height: 100%;
      transition: 0.5s ease;
      width: 100%;
      transform: translateX(-150px);


    }

    &:hover:after {
      transform: translateX(150px);
    }

    .about-me-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
      z-index: 2;
    }
    &:hover + .arrow-right {
     transform: translateX(11px)
    }
  }

  



  ul {
    position: absolute;
    top: 30%;
    right: -300px;
    transition: 0.5s;

    @media (max-width: 1700px){
      right: -243px
    }
    @media (max-width: 1500px){
      right: -220px
    }
    @media (max-width: 1024px){
      right: -150px;
    }

    li {
      list-style: none;
      font-size: 4rem;
      color: #B0B2C3;
      cursor: pointer;

      a {
        color: ${props => props.textColor};
      }
      &:hover a {
        color: ${props => props.textColorHover}
      }
    }
  }

  .works-section{
    position: absolute;
    bottom: 35px;
    left: 50%;
    color: #fff;
    transform: translate(-50%,-50%);
    cursor: pointer;

    &:hover + ${ArrowDown} {
      bottom: 5px;
    }
  }

  .contact-hide {
    transition: 0.5s ease 0.5s;
    opacity: 1;
  }

  .contact-hide-false {
    transition: 0.5s ease;
    opacity: 0;
  }

  
`