import React from 'react';
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { keyframes } from "styled-components";
import { BasicButton } from "../styles/buttons/BasicButton";
import { ContactsButton } from '../styles/buttons/ContactsButton';
import { selectSoftSkills, toggleElement, scrolltoElement } from "../features/toggleSlice";
import { sizes } from '../styles/abstracts/breakpoints';

import video from '../app/data/background.mp4'

export default function Home() {
  const dispatch = useDispatch();
  const softSkills = useSelector(selectSoftSkills);
  const [scroll, setScroll] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const worksRef = useRef();
  const contactsRef = useRef();

  // Copy email on click
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

  // Scroll to works
  function handleScrolltoWorks() {
    worksRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  // Scroll to contacts
  function handleScrolltoContacts() {
    contactsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Page>

      <Video>
        <video autoPlay loop muted style={video0}>
          <source src={video} type='video/mp4' />
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

        <SubHeaderLast style={{ gridArea: 'headprojects' }} ref={worksRef}><p>Pet-projects</p></SubHeaderLast>

        <div className="overflow" style={{ gridArea: 'o' }}>
          <DescriptionFirst style={{ gridArea: 'a' }}>
            <span>
              <p className="p-medium">Stopwatch + dynamic timeline + to-do list</p>
              <p>watch live</p>
            </span>
            <p>customizable interfacem, custom hooks</p>
            <p style={{ marginTop: 'auto' }}>GitHub</p>
          </DescriptionFirst>

          <Description style={{ gridArea: 'b' }}>
            <span>
              <p className="p-medium">Weather broadcast</p>
              <p>watch live</p>
            </span>
            <p>work with REST API using fetch API</p>
            <a style={{ marginTop: 'auto' }} href="" target="_blank"><p>GitHub</p></a>
          </Description>

          <Description style={{ gridArea: 'b' }}>
            <span>
              <p className="p-medium">News getter</p>
              <p>watch live</p>
            </span>
            <p>work with REST API using React Query</p>
            <a style={{ marginTop: 'auto' }} href="" target="_blank"><p>GitHub</p></a>
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
            <p>Redux, React Router</p>
            <a style={{ marginTop: 'auto' }} href="" target="_blank"><p>GitHub</p></a>
          </Description>

        </div>
      </WorksGallery>

      <Footer>
        <AboutInFooter ref={contactsRef}>
          <p style={{ gridArea: 'video', paddingLeft: '2vw' }}>Video: <a href="https://www.pexels.com/@tobiasbjorkli/">Tobias Bjørkli</a></p>
          <Intro style={{ gridArea: 'intro', display: 'flex', flexDirection: 'row' }}>
            <ContactsButton><Link to='cv'><h2>CV</h2></Link></ContactsButton>
            <ContactsButton><a href="https://github.com/alexandrachuprina?tab=repositories" target='_blank'><h2>GitHub</h2></a></ContactsButton>
            <ContactsButton><a href="https://t.me/alexandrachuprina" target='_blank'><h2>Telegram</h2></a></ContactsButton>
            <ContactsButton onClick={copy}><h2>shplvk@gmail.com</h2></ContactsButton>
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
  width: 100vw;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  section {
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 1vh;
  }

  @media (min-width: ${sizes.smallest}) and (max-width: ${sizes.micro}) {
    h2 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.4rem;
    }
  }
  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.mini}) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.5rem;
    }
  }
  @media (min-width: ${sizes.mini}) and (max-width: ${sizes.xxs}) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.6rem;
    }
  }
  @media (min-width: ${sizes.xxs}) and (max-width: ${sizes.xs}) {
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  @media (min-width: ${sizes.xs}) and (max-width: ${sizes.s}) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (min-width: ${sizes.s}) and (max-width: ${sizes.m}) {
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media (min-width: ${sizes.m}) and (max-width: ${sizes.l}) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`
const Video = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
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
  padding: 20vw 2vw 2vw 2vw;
  box-sizing: border-box;
  grid-template-areas:
    'video intro intro intro '
    '. soft soft soft'
    ;
`
const Intro = styled.div` 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  h2 {
    font-size: 4.2vh;
  }

  @media (min-width: ${sizes.smallest}) and (max-width: ${sizes.micro}) {
    h2 {
      font-size: 1.2vh;
    }
  }
  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.mini}) {
    h2 {
      font-size: 1.4vh;
    }
  }
  @media (min-width: ${sizes.mini}) and (max-width: ${sizes.xxs}) {
    h2 {
      font-size: 2vh;
    }
  }
  @media (min-width: ${sizes.xxs}) and (max-width: ${sizes.xs}) {
    h2 {
      font-size: 2.4vh;
    }
  }
  @media (min-width: ${sizes.xs}) and (max-width: ${sizes.s}) {
    h2 {
      font-size: 3.2vh;
    }
  }
  @media (min-width: ${sizes.s}) and (max-width: ${sizes.m}) {
    h2 {
      font-size: 4vh;
    }
  }
`
const HardSkills = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;

  height: 18vw;
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

  @media (min-width: ${sizes.smallest}) and (max-width: ${sizes.micro}) {
    height: 25vw;
  }
  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.mini}) {
    height: 25vw;
  }
  @media (min-width: ${sizes.mini}) and (max-width: ${sizes.xxs}) {
    height: 25vw;
  }
  @media (min-width: ${sizes.xxs}) and (max-width: ${sizes.xs}) {
    height: 25vw;
  }
  @media (min-width: ${sizes.xs}) and (max-width: ${sizes.s}) {
    height: 25vw;
  }
  @media (min-width: ${sizes.s}) and (max-width: ${sizes.m}) {
    height: 22vw;
  }
  @media (min-width: ${sizes.m}) and (max-width: ${sizes.l}) {
    height: 20vw;
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
  li {
    margin-bottom: 0.5vw;
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


