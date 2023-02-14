import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BasicButton } from "./styles/buttons/BasicButton";
import { selectSoftSkills, toggleElement } from "./features/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import video from '/Users/lksndrchprn/personal-page/src/app/data/Pexels Videos 2334654.mp4'

function App() {
  const [scroll, setScroll] = useState(false);
  let ref = useRef();

  const dispatch = useDispatch();
  const softSkills = useSelector(selectSoftSkills);

  let videoStyle;
  window.addEventListener('scroll', (event) => {
    setScroll(true);
  }
  )

  if (!scroll) {
    videoStyle = {
      position: `fixed`, zIndex: `-1`, backgroundColor: `white`, height: `100%`, filter: `blur(0px)`, opacity: '0.5'
    }
  } else {
    videoStyle = {
      position: `fixed`, zIndex: `-1`, backgroundColor: `white`, height: `100%`, filter: `blur(5px)`, opacity: '0.5',
      transitionProperty: 'filter', transitionDuration: '1s'
    }
  }

  return (
    <Page>

      <Video>
        <video autoPlay loop muted style={videoStyle}>
          <source src={video} type='video/mp4' />
        </video>
      </Video>


      <section>
        <Header>
          <h1>Frontend developer</h1>
        </Header>
        <Navbar>
          <p>works</p>
          <p>github</p>
          <p>about</p>
          <p>timezone: GMT+6</p>
          <p>contacts</p>
        </Navbar>

        <About>
          <p style={{ gridArea: 'cv' }} className="p-medium">Download CV</p>
          <Intro style={{ gridArea: 'intro' }}>
            <h2>
              Hello! My name is Sasha. After 4 years of experience in architecture and design
              I decided to switch my career. I found web-developent as a perfect field for me.
              It gives me opportunity both in logical processes and design.
            </h2>
          </Intro>
          <HardSkills style={{ gridArea: 'hard' }}>
            <span><p>Hard skills</p></span>
            <ul>
              <li><p>JavaScript, TypeScript, React, Redux ToolKit, React Router, Styled Components, SCSS/ SASS, Git</p></li>
              <li><p>VSCode</p></li>
              <li><p>JUX/ UI, Figma, Adobe Suit</p></li>
              <li><p>Russian native, English B2</p></li>
            </ul>
          </HardSkills>
          <SoftSkills style={{ gridArea: 'soft' }}>
            <span><p>Soft skills</p></span>
            <ul>

              {softSkills.map(elem => (
                <li
                  key={elem.id}
                  onClick={() => dispatch(toggleElement(elem.id))}
                >
                  <BasicButton><p>{elem.shortText}</p></BasicButton>
                  {elem.toggle ? <span><p>{elem.fullText}</p> </span> : null}
                </li>
              ))}

            </ul>
          </SoftSkills>
        </About>
      </section>

      <Projects>
        <SubHeader>
          <h1>Pet-projects</h1>
        </SubHeader>
        <WorksGallery>
          <div style={{ gridArea: 'project1' }}></div>
          <div style={{ gridArea: 'project2' }}></div>
          <div style={{ gridArea: 'project3' }}></div>
          <div style={{ gridArea: 'project4' }}></div>
          <div style={{ gridArea: 'project5' }}></div>
          <div style={{ gridArea: 'project6' }}></div>
        </WorksGallery>
      </Projects>

      <Contacts>
        <SubHeader>
          <h1>Contacts</h1>
        </SubHeader>
      </Contacts>

    </Page >
  );
}

export default App;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  section {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-bottom: 3vh;
    border-bottom: 1px solid black;

    .div {
      display: block;
      margin-top: auto;
    }
  }
`
const Blur = keyframes`
to {
  filter: blur(5px);
}
`
const Video = styled.div`
  /* background-color: red;  */
  position: fixed;
  height: 100vh;
  z-index: -1;
 
`
const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 3vh;

  p:hover {
    text-decoration: underline; 
  }
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 8vw;
  h1 {
    font-size: 8vw;
    text-transform: uppercase;
  }
`
const SubHeader = styled(Header)`
  justify-content: flex-start;  
  padding-left: 2vw;
`
const About = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 23%);
  column-gap: 2vw;
  row-gap: 2vw;
  margin: 0vw 2vw 0 2vw;
  box-sizing: border-box;
  grid-template-areas:
    'cv intro intro intro'
    'hard soft soft soft';

  margin-top: auto;
`
const Intro = styled.div`
  
`
const HardSkills = styled.div`
  ul {
    list-style: none;
    margin: none;
    padding: none;
  }
  li {
    margin-bottom: 1vw;
  }
  span {
  p {
    margin-bottom: 1vw;
  }
 }
`
const SoftSkills = styled.div`
  display: flex;
  flex-direction: column;
  span {
    p {
      margin-bottom: 1vw;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
`
const Projects = styled.div`
  margin-bottom: 3vh;
  border-bottom: 1px solid black;
`
const WorksGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 23%);
  grid-template-rows: 23vw 23vw 23vw;
  column-gap: 2vw;
  row-gap: 2vw;
  margin: 2vw;
  box-sizing: border-box;
  grid-template-areas:
    'project1 project2 . project3'
    '. . project5 .'
    '. project6 . .';

  div {
    border: 1px solid black;
  }
`
const Contacts = styled.div`
  height: 100vh;
`

