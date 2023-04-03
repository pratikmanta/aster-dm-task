import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 70px;

  @media (max-width: 1024px) {
    padding-left: 40px;
    font-size:: 0.9rem;
    margin: 15px;
  }

  @media (max-width: 800px) {
    flex-flow: column wrap;
    padding: 0;
  }

`
const StyledSearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`


const StyledSearchInput = styled.input`
  padding: 10px;
  width: 60%;
  border: none;
`

const StyledSearchBtn = styled.button`
  padding: 10px;
  width: 20%;
  color: #fff;
  background: #000;
  cursor: pointer;
  border: none;
`

const StyledListHeader = styled.h1`
  color: #fff;
  text-align: left;
  width: 60%;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    padding-left: 70px;
    font-size:: 1.4rem;
  }

  @media (max-width: 800px) {
    font-size: 0.9rem
    padding-left: 0px;
    font-size: 1.2rem;
    width: max-content;
    margin: 10px;
  }
`

const StyledRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 10px;
  padding: 30px 70px;
  @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 20px 40px;
  }
  @media (max-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 10px;
      column-gap: 3px;
      padding: 10px;
  }
`
const StyledContainer = styled.div`
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  backgtound-position: center;
  :hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: transform 0.5s ease;
  }
`

const Title = styled.h3`
  color: #fff;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Date = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
const Description = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 10px;
  @media (max-width: 500px) {
    font-size: 0.6rem;
    padding: 5px;
  }
`

export {
    StyledWrapper,
    StyledSearchWrapper,
    StyledSearchInput,
    StyledSearchBtn,
    StyledRoot,
    StyledContainer,
    StyledListHeader,
    Title,
    Date,
    Description
    
}