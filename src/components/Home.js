import React from 'react';
import { Link } from "react-router-dom";
import { useState, useAnimatedRef, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BasicButton } from "../styles/buttons/BasicButton";
import { selectSoftSkills, toggleElement, scrolltoElement } from "../features/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import mount from '/Users/lksndrchprn/personal-page/src/app/data/Pexels Videos 2334654.mp4'

export default function Home() {
  const dispatch = useDispatch();
  const softSkills = useSelector(selectSoftSkills);
  const [scroll, setScroll] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const worksRef = useRef();
  const contactsRef = useRef();

  const copy = async () => {
    await navigator.clipboard.writeText('shplvk@gmail.com');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000)
  }

  // Background dynamic blur
  let video0;
  let back;
  if (scroll) {
    video0 = {
      zIndex: `-1`, backgroundColor: `white`, height: `100%`, filter: `blur(0px)`, opacity: '0.5',
    };
    // back = {}
  } else {
    video0 = {
      zIndex: `-3`, backgroundColor: `white`, height: `100%`, filter: `blur(1px)`, opacity: '0.4',
    };
  }

  window.addEventListener('scroll', (event) => {
    if (window.scrollY === 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  })


  function handleScrolltoWorks() {
    worksRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleScrolltoContacts() {
    contactsRef.current.scrollIntoView({ behavior: 'smooth' })
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
          <p onClick={handleScrolltoWorks} style={{ cursor: 'pointer' }}>works</p>
          <a href="https://github.com/alexandrachuprina?tab=repositories" target='_blank'><p>github</p></a>
          <Link to='cv'><p>cv</p></Link>
          <p>timezone: GMT+3, Moscow</p>
          <p onClick={handleScrolltoContacts} style={{ cursor: 'pointer' }}>contacts</p>
        </Navbar>

        <About style={back}>
          <Intro style={{ gridArea: 'intro' }}>
            <h2>
              Hello! My name is Sasha. After 4 years of experience in architecture and design
              I decided to switch my career. I found web-developent as a perfect field for me.
              It gives me opportunity both in logical processes and design.
            </h2>
          </Intro>

          <SoftSkills style={{ gridArea: 'soft' }}>
            <ul>
              {softSkills.map(elem => (
                <li
                  key={elem.id}
                  onClick={() => { dispatch(toggleElement(elem.id)); console.log(window.scrollY) }}
                >
                  {elem.toggle ?
                    <Grid>
                      <BasicButton><p>{elem.shortText}</p></BasicButton>
                      <p className="fulltext">{elem.fullText}</p>
                    </Grid>
                    :
                    <div><BasicButton><p>{elem.shortText}</p></BasicButton></div>
                  }
                </li>
              ))}
            </ul>
          </SoftSkills>

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


        <SubHeaderLast style={{ gridArea: 'headprojects' }} ref={worksRef}><p>Pet-projects</p></SubHeaderLast>

        <div className="overflow" style={{ gridArea: 'o' }}>

          <DescriptionFirst style={{ gridArea: 'a' }}>
            <span>
              <p className="p-medium">Stopwatch + dynamic timeline + to-do list</p>
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

          <Description style={{ gridArea: 'b' }}>
            <span>
              <p className="p-medium">Personal page (current)</p>
              <p>watch live</p>
            </span>
            <p>work with video and React Router</p>
            <p style={{ marginTop: 'auto' }}>GitHub</p>
          </Description>

        </div>
      </WorksGallery>

      <Footer>
        <AboutInFooter ref={contactsRef}>
          <p style={{ gridArea: 'video', paddingLeft: '2vw' }}>Video: <a href="https://www.pexels.com/@tobiasbjorkli/">Tobias Bjørkli</a></p>
          <Intro style={{ gridArea: 'intro', display: 'flex', flexDirection: 'row' }}>
            <BasicButton><Link to='cv'><h2>CV</h2></Link></BasicButton>
            <BasicButton><a href="https://github.com/alexandrachuprina?tab=repositories" target='_blank'><h2>GitHub</h2></a></BasicButton>
            <BasicButton><a href="https://t.me/alexandrachuprina" target='_blank'><h2>Telegram</h2></a></BasicButton>
            <BasicButton onClick={copy}><h2>shplvk@gmail.com</h2></BasicButton>
            {isCopied ? <Alert><p>Copied!</p></Alert> : null}
          </Intro>
        </AboutInFooter>
      </Footer>


    </Page >

  )
}


const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  section {
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 1vh;
  }
`
const Video = styled.div`
  position: fixed;
  height: 100vh;
  z-index: -1;
`
const Alert = styled.div`
  height: 0.5vh;
  width: 0.5vw;
  p {
    font-size: 2rem;
  }
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
  padding: 22vw 2vw 2vw 2vw;
  box-sizing: border-box;
  grid-template-areas:
    'video intro intro intro '
    '. soft soft soft'
    ;

  /* margin-top: auto; */
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
  padding-top: 2vw;
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
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

  /* .overflow {
    width: 100%;
    height: 46vw;
    overflow-y: scroll;
    z-index: 2;
  } */
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
const AboutInFooter = styled(About)`
  padding: 2vw;
`
const Footer = styled.div`
  height: 2vh;
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

