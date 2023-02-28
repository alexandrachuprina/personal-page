import React from 'react';
import styled from 'styled-components';

export default function CV() {
  return (
    <Page>
      <section>
        <Header style={{ gridArea: 'header' }}>
          <h1>CV</h1>
        </Header>

        <Info>
          <p style={{ gridArea: 'name1' }}>Full name</p>
          <p style={{ gridArea: 'name2' }}>Alexandra Chuprina</p>

          <p style={{ gridArea: 'date1' }}>Date of birth</p>
          <p style={{ gridArea: 'date2' }}>17.10.2000</p>

          <p style={{ gridArea: 'timezone1' }}>Current timezone</p>
          <p style={{ gridArea: 'timezone2' }}>GMT+3, Moscow</p>

          <p style={{ gridArea: 'edu1' }}>Education</p>
          <div style={{ gridArea: 'edu2', display: 'flex', flexDirection: 'column' }}>
            <p>Kazan State University of Architecture and Engineering</p>
            <p>2018 — current time (academic leave)</p>
          </div>

          <p style={{ gridArea: 'lang1' }}>Languages</p>
          <div style={{ gridArea: 'lang2', display: 'flex', flexDirection: 'column' }}>
            <p>Russian native</p>
            <p>English B2</p>
          </div>
        </Info>
      </section>

    </Page>
  )
}

const Page = styled.div`
  section {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 2vw;
  margin: 0;
  box-sizing: border-box;
  height: 8vw;
  h1 {
    font-size: 8vw;
    text-transform: uppercase;
  }
`
const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  row-gap: 1vw;
  padding: 0vw 2vw 0 2vw;
  box-sizing: border-box;
  grid-template-areas:
    'name1 name2 name2 name2'
    'date1 date2 date2 date2'
    'timezone1 timezone2 timezone2 timezone2'
    'edu1 edu2 edu2 edu2'
    'lang1 lang2 lang2 lang2'
    ;

  padding-bottom: 2vw;
  margin-top: auto;
`