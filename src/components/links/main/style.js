import styled from "styled-components";
import bgMob from "../../../assets/links/bannerMob.png";
import bgPc from "../../../assets/links/bannerPC.png";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1250px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.div`
  min-height: 45rem;
  width: 90%;
  max-width: 90rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 10rem;
  flex-direction: row;
  margin: auto;
  background-repeat: no-repeat;
  background-image: url(${bgPc});
  background-size: contain;
  background-position: center;
  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .rown {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  ${Media.Laptop} {
    background-image: url(${bgMob});
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding-right: 0;
  }
  .leftSide {
    padding-bottom: 5rem;
    ${Media.Laptop} {
      padding-bottom: 0rem;
      margin-right: 10rem;
      margin-top: -10rem;
    }
    img {
      width: 100vw;
    }
  }

  .rightSide {
    min-height: 100vh;
    padding-top: 5rem;
    gap: 1rem;
    ${Media.Laptop} {
      padding-top: 0rem;
    }
    .tittleNameContainer {
      position: relative;
      gap: 0.4rem;
      h1,
      p {
        text-align: center;
      }
      hr {
        width: 80%;
        border: 1px solid black;
        margin: auto;
      }
    }
    .cadsContainer {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      a {
        transition: transform 0.3s ease-in-out;
        ${Media.Laptop} {
          width: 100%;
        }
        &:hover {
          transform: scale(1.1);
          ${Media.Laptop} {
            transform: inherit;
          }
        }
      }
    }
  }
`;
