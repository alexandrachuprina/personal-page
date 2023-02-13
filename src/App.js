import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Page>
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
          <button style={{ gridArea: 'cv' }}>Download CV</button>
          <Intro style={{ gridArea: 'intro' }}>
            <h2>
              Hello! My name is Sasha. After 4 years of experience in architecture and design
              I decided to switch my career. I found web-developent as a perfect field for me.
              It gives me opportunity both in logical processes and design.
            </h2>
          </Intro>
          <HardSkills style={{ gridArea: 'hard' }}>
            <ul>
              <li><p>JavaScript, TypeScript, React, Redux ToolKit, React Router, Styled Components, SCSS/ SASS, Git</p></li>
              <li><p>VSCode</p></li>
              <li><p>JUX/ UI, Figma, Adobe Suit</p></li>
              <li><p>Russian native, English B2</p></li>
            </ul>
          </HardSkills>
          <SoftSkills style={{ gridArea: 'soft' }}>
            <button>structural approach</button>
            <p></p>
            <button>attention to details</button>
            <p></p>
            <button>efficiency</button>
            <p></p>
          </SoftSkills>
        </About>
      </section>

      <section>
        <WorksGallery>
        </WorksGallery>
      </section>

    </Page >
  );
}

export default App;

const Page = styled.div`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .div {
      display: block;
      margin-top: auto;
    }
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
const About = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 23%);
  column-gap: 2vw;
  row-gap: 2vw;
  margin: 0vw 2vw 0 2vw;
  box-sizing: border-box;
  grid-template-areas:
    'cv intro intro intro'
    'hard soft . .';

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
`
const SoftSkills = styled.div`
`
const WorksGallery = styled.div`
  overflow: auto;
  white-space: nowrap;
  height: 30rem;
  padding: 2rem 2rem 2rem 0;
`
