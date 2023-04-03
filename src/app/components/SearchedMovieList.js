import { Fragment } from "react";
import { StyledRoot, StyledContainer, Title, Date, Description } from "./styled-components/movie-components";

const Card = ({
    title,
    img,
    date,
    description,
  }) => (
    <>
        <StyledContainer background={img}>  
          <Title>{title}</Title>
          <Date>Released: {date}</Date> 
          <Description>{description}</Description>
        </StyledContainer>
    </>
  )

const SearchedMovieList = ({ searchedMovieList }) => {
    return (
        <>
        <StyledRoot>
            {searchedMovieList.length > 0 ? searchedMovieList.map((movie) => {
                let img_url = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                return (
                <Fragment key={movie.id}>
                    <Card
                      title={movie.title}
                      img={img_url}
                      description={movie.overview}
                      date={movie.release_date}
                    />
                </Fragment>
                )
            }): null
        }
        </StyledRoot>
        </>
    )
}

 export default SearchedMovieList