import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchedMovie } from "../../redux/reducers/searchMovieSlice";
import { StyledSearchWrapper, StyledSearchInput, StyledSearchBtn } from "./styled-components/movie-components";

const SearchMovie = () => {

    const [searchQuery, setSearchQuery] = useState(" ")
    const dispatch = useDispatch()

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    // triggered search call
    return (
        <StyledSearchWrapper>
            <StyledSearchInput placeholder='Search Movie' onChange={handleSearchChange}/>
            <StyledSearchBtn onClick={() => dispatch(getSearchedMovie(searchQuery))}>Search</StyledSearchBtn>
        </StyledSearchWrapper>
    )
}

export default SearchMovie