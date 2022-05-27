import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { About, ContactContainer, ContactMe, Wrapper } from "./styled"

export const Contact: React.FC<any> = ({setOpenContact}) => {
  return (
    <ContactContainer>
      <Wrapper>
        <About> 
          <div className='about-text'>About</div>
          <section>
            <h1>About Me.</h1>
            <p className='about-label'>Front End Developer</p>
            <p className='about-paragraph'> I am <span>passionate</span> on learning web development. I work <span>hard</span>. I care
            about writing <span>clean</span> code. I'm currently looking for the opportunity to
            work in an environment that will <span>help</span> me progress my skill being a
            <span> front end developer</span> and also to be able to <span>grow</span> into full stack role</p>
          </section>
          <div className='about-icons'>
            <div className='icons-wrapper'>
              <FaReact className='icon1' size={80}/>
              <p>React.js</p>
            </div>
            <div className='icons-wrapper'>
              <IoLogoJavascript className='icon2' size={80}/>
              <p>Semicolons.</p>
            </div>
            <div className='icons-wrapper'>
            <FaHtml5 className='icon3' size={80}/>
            <p>is Fun.</p>
            </div>
            <div className='icons-wrapper'>
              <FaCss3Alt className='icon4' size={80}/>
              <p>Styling.</p>
            </div>
          </div>
        </About>
        <ContactMe>
          <div className='contact-text'>Contact</div>
          <section>
            <h1>Lets Talk.</h1>
            <p>New projects, freelance inquiry.</p>
            <form action="">
              <label htmlFor="name">Name *</label>
              <div className='input-wrapper'>
               <input type="text" name="name" id="name" />
               <div className='input-color'></div>
               <div className='second-input-color'></div>
              </div>
              <label htmlFor="email">E-mail *</label>
              <div className='input-wrapper'>
                <input type="text" name="email" id="email" />
                <div className='input-color'></div>
                <div className='second-input-color'></div>
              </div>
              <label htmlFor="message">Message *</label>
              <div className='input-wrapper'>
                <textarea style={{resize: 'none'}}rows={6} name="message" id="message" />
                <div className='input-color-area'></div>
                <div className='second-input-color-area'></div>
              </div>

              <button><span>Send Message</span></button>
            </form>
            <div
              onClick={() => setOpenContact(false)}
              className='contact-close-button'>
              <div className='first-line'>
                <div className='line-color'></div>
              </div>
              <div className='second-line'>
                <div className='second-line-color'></div>
              </div>
            </div>
          </section>
        </ContactMe>
      </Wrapper>
    </ContactContainer>
  )
}
