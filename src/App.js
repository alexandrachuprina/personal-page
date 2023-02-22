import { useState, useAnimatedRef, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BasicButton } from "./styles/buttons/BasicButton";
import { selectSoftSkills, toggleElement, scrolltoElement } from "./features/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import mount from '/Users/lksndrchprn/personal-page/src/app/data/Pexels Videos 2334654.mp4'
import sky from '/Users/lksndrchprn/personal-page/src/app/data/Screen Recording 2023-02-14 at 18.10.38.mov'

function App() {
  const dispatch = useDispatch();
  const softSkills = useSelector(selectSoftSkills);

  const [scroll, setScroll] = useState(true);
  const [url, setUrl] = useState(false)


  // Background dynamic blur
  let video0;
  let back;
  if (scroll) {
    video0 = {
      zIndex: `-1`, backgroundColor: `white`, height: `100%`, filter: `blur(0px)`, opacity: '0.5',
    };
    back = {}
  } else {
    video0 = {
      zIndex: `-3`, backgroundColor: `white`, height: `100%`, filter: `blur(1px)`, opacity: '0.4',
    };
    // back = {
    //   background: `rgb(255,255,255)`,
    //   background: `linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7721682422969187) 22%, rgba(255,255,255,0) 100%)`
    // }
  }
  window.addEventListener('scroll', (event) => {
    if (window.scrollY === 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  })

  // Soft skills styling
  const grid = {
    display: 'grid',
    gridTemplateColumns: '20% 80%',
  }

  function handleMouse() {
    setUrl(sky)
  }
  function handleMouse2() {
    setTimeout(() => {
      setUrl(mount)
    }, 500)
  }

  return (
    <Page>

      <Video>
        <video autoPlay loop muted style={video0}>
          <source src={mount} type='video/mp4' />
        </video>
      </Video>

      <section>
        <Header>
          <h1>Frontend developer</h1>
        </Header>
        <Navbar>
          <p>works</p>
          <p>github</p>
          <p>cv</p>
          <p>timezone: GMT+6</p>
          <p>contacts</p>
        </Navbar>

        <About style={back}>
          <Intro style={{ gridArea: 'intro' }}>
            <h2>
              Hello! My name is Sasha. After 4 years of experience in architecture and design
              I decided to switch my career. I found web-developent as a perfect field for me.
              It gives me opportunity both in logical processes and design.
            </h2>
          </Intro>
        </About>
      </section>

      <WorksGallery>
        <SubHeader style={{ gridArea: 'headhard' }}><p>Hard skills</p></SubHeader>

        <HardSkills style={{ gridArea: 'hard' }}>
          <ul>
            <li><p>JavaScript, TypeScript, React, Git</p></li>
            <li><p>Redux ToolKit, React Router, React Query</p></li>
            <li><p>Styled Components, SCSS/ SASS</p></li>
            <li><p>experience with REST API and Docker</p></li>
            <li><p>UX/ UI, Figma, Adobe Suit</p></li>
          </ul>
        </HardSkills>

        {/* <p style={{ gridArea: 'headsoft' }}>Soft skills</p> */}
        {/* <SoftSkills style={{ gridArea: 'soft' }}>
          <ul>
            {softSkills.map(elem => (
              <li
                key={elem.id}
                onClick={() => dispatch(toggleElement(elem.id))}
              >
                {elem.toggle ?
                  <div style={grid}>
                    <BasicButton><p>{elem.shortText}</p></BasicButton>
                    <p className="fulltext">{elem.fullText}</p>
                  </div>
                  :
                  <div><BasicButton><p>{elem.shortText}</p></BasicButton></div>
                }
              </li>
            ))}
          </ul>
        </SoftSkills> */}

        <SubHeaderLast style={{ gridArea: 'headprojects' }}><p>Pet-projects</p></SubHeaderLast>

        <div className="overflow" style={{ gridArea: 'o' }}>

          <DescriptionFirst style={{ gridArea: 'a' }} onMouseEnter={() => handleMouse()} onMouseLeave={handleMouse2}>
            <span>
              <p className="p-medium">Stopwatch + dynamic timeline</p>
              <p>watch live</p>
            </span>
            <p>customizable interface with custom hooks</p>
            <p style={{ marginTop: 'auto' }}>GitHub</p>

          </DescriptionFirst>

          {/* <Project style={{ gridArea: 'c' }}>
          <video autoPlay loop muted src={sky} type='video/mp4' />
        </Project> */}

          <Description style={{ gridArea: 'b' }}>
            <span>
              <p className="p-medium">Weather broadcast</p>
              <p>watch live</p>
            </span>
            <p>work with REST API using fetch API</p>
            <a style={{ marginTop: 'auto' }} href="https://github.com/alexandrachuprina/basic-weather-app" target="_blank"><p>GitHub</p></a>
          </Description>

          <Description style={{ gridArea: 'b' }}>
            <span>
              <p className="p-medium">News getter</p>
              <p>watch live</p>
            </span>
            <p>work with REST API using React Query</p>
            <a style={{ marginTop: 'auto' }} href="https://github.com/alexandrachuprina/react-query-app" target="_blank"><p>GitHub</p></a>
          </Description>

          <Description style={{ gridArea: 'b' }}>
            <span>
              <p className="p-medium">Sign up form</p>
              <p>watch live</p>
            </span>
            <p>validation with RegEx</p>
            <p style={{ marginTop: 'auto' }}>GitHub</p>
          </Description>
         
        </div>
      </WorksGallery>

      <section style={{ height: '10vh' }}>
        <About>
          <p style={{ gridArea: 'video', paddingLeft: '2vw' }}>Video: <a href="https://www.pexels.com/@tobiasbjorkli/">Tobias Bjørkli</a></p>
          <Intro style={{ gridArea: 'intro', display: 'flex', flexDirection: 'row' }}>
            <BasicButton><h2>CV</h2></BasicButton>
            <BasicButton><h2>GitHub</h2></BasicButton>
            <BasicButton><h2>Telegram</h2></BasicButton>
            <BasicButton><h2>shplvk@gmail.com</h2></BasicButton>
          </Intro>
        </About>
      </section>

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
    margin-bottom: 1vh;

  }
`
const Video = styled.div`
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
const SubHeader = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 1vw;
  :hover {
    p {
      font-style: italic;
    }
  }
`
const SubHeaderLast = styled(SubHeader)`
  border-bottom: none;
  border-top: none;
  :hover {
    p {
      font-style: italic;
    }
  }
`
const About = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%) ;
  padding: 0vw 2vw 0 2vw;
  box-sizing: border-box;
  grid-template-areas:
    'video intro intro intro ';

  margin-top: auto;
`
const Intro = styled.div`
  
`
const HardSkills = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;

  height: 16vw;
  padding: 1vw;

  ul {
    list-style: none;
    margin: none;
    padding: none;
  }
  li {
    margin-bottom: 1vw;
  }
  :hover {
    p {
      font-style: italic;
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

    .fulltext {
      margin-bottom: 1vw;
    }
  }
  
`
const WorksGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin: 2vw;
  /* box-sizing: border-box; */
  grid-template-areas:
    'headhard hard hard hard'
    'headsoft soft soft soft'
    'headprojects o o o'
    '. o o o';

  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

  .overflow {
    width: 100%;
    height: 46vw;
    overflow-y: scroll;
    z-index: 2;
  }
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1vw;

  height: 20vw;

  border-top: 1px solid black;
  border-left: 1px solid black;

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  :hover {
    p {
      font-style: italic;
    }
  }
`
const DescriptionFirst = styled(Description)`
  border-top: none;
`
const Project = styled.div`
  position: relative;
  height: 23vw;
  border-top: 1px solid black;
  border-left: 1px solid black;

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;

    opacity: 1;
    z-index: -1;
    /* filter: blur(5px); */
  }

  p {
    padding: 0.5vw 0 0.5vw 2vw;
  }
  p:hover {
    font-style: italic;
  }
  
  &:hover {
    p {
      /* transition-property: margin-left;
      transition-duration: 500ms;
      margin-left: 3vw; */
    }
  }

`
const Contacts = styled.div`
  height: 100vh;
`

