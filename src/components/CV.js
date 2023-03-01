import React from 'react';
import styled from 'styled-components';
import { sizes } from '../styles/abstracts/breakpoints';

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

          <p style={{ gridArea: 'contacts1' }}>Phone number</p>
          <p style={{ gridArea: 'contacts2' }}>+7 951 00 56 658</p>

          <p style={{ gridArea: 'email1' }}>Email</p>
          <p style={{ gridArea: 'email2' }}>alexandra.chuprina.2000@gmail.com</p>

          <p style={{ gridArea: 'date1' }}>Date of birth</p>
          <p style={{ gridArea: 'date2' }}>17.10.2000</p>

          <p style={{ gridArea: 'timezone1' }}>Current timezone</p>
          <p style={{ gridArea: 'timezone2' }}>GMT+3, Moscow</p>

          <p style={{ gridArea: 'lang1' }}>Languages</p>
          <div style={{ gridArea: 'lang2', display: 'flex', flexDirection: 'column' }}>
            <p>Russian native</p>
            <p>English B2</p>
          </div>
        </Info>
      </section>

      <Irrelevant>
        <p style={{ gridArea: 'edu1' }}>Education</p>
        <div style={{ gridArea: 'edu2', display: 'flex', flexDirection: 'column' }}>
          <p>Kazan State University of Architecture and Engineering</p>
          <p>2018 — current time (academic leave)</p>
        </div>

        <p style={{ gridArea: 'work1' }}>Work experience</p>
        <div style={{ gridArea: 'work5', display: 'flex', flexDirection: 'column' }}>
          <p>Web designer, 2022-2023</p>
          <p>freelance</p>
        </div>
        <div style={{ gridArea: 'work4-1', display: 'flex', flexDirection: 'column' }}>
          <a href="https://t.me/svyaz_io"><p>svyaz.io, 2021-2023</p></a>
          <p>graphic designer</p>
        </div>
        <div style={{ gridArea: 'work4', display: 'flex', flexDirection: 'column' }}>
          <p>Graphic designer, 2021-2023</p>
          <p>freelance</p>
        </div>
        <div style={{ gridArea: 'work3', display: 'flex', flexDirection: 'column' }}>
          <p>AB Zarf, february 2022</p>
          <p>architect</p>
        </div>
        <div style={{ gridArea: 'work2', display: 'flex', flexDirection: 'column' }}>
          <a href="https://ostarch.ru/main/buro/istorija"><p>AB Ostozhenka, summer 2021</p></a>
          <p>trainee</p>
        </div>
      </Irrelevant>

    </Page>
  )
}

const Page = styled.div`
  section {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  a:hover {
    text-decoration-color: grey;
  }

  @media (min-width: ${sizes.smallest}) and (max-width: ${sizes.micro}) {
    h2 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.4rem;
    }
    section {
      height: 50vw;
    }
  }
  @media (min-width: ${sizes.micro}) and (max-width: ${sizes.mini}) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.5rem;
    }
    section {
      height: 50vw;
    }
  }
  @media (min-width: ${sizes.mini}) and (max-width: ${sizes.xxs}) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.6rem;
    }
    section {
      height: 50vw;
    }
  }
  @media (min-width: ${sizes.xxs}) and (max-width: ${sizes.xs}) {
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
    section {
      height: 50vw;
    }
  }
  @media (min-width: ${sizes.xs}) and (max-width: ${sizes.s}) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
    section {
      height: 50vw;
    }
  }
  @media (min-width: ${sizes.s}) and (max-width: ${sizes.m}) {
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.3rem;
    }
    section {
      height: 50vw;
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
    'contacts1 contacts2 contacts2 contacts2'
    'email1 email2 email2 email2'
    'date1 date2 date2 date2'
    'timezone1 timezone2 timezone2 timezone2'
    'lang1 lang2 lang2 lang2'
    ;

  padding-bottom: 2vw;
  margin-top: auto;
`
const Irrelevant = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  row-gap: 1vw;
  padding: 0vw 2vw 0 2vw;
  box-sizing: border-box;
  grid-template-areas:
  'edu1 edu2 edu2 edu2'
  'work1 work5 work5 work5'
  '. work4-1 work4-1 work4-1'
  '. work4 work4 work4'
  '. work3 work3 work3'
  '. work2 work2 work2'
    ;

  padding-bottom: 2vw;
  p {
    color: grey;
  }
`