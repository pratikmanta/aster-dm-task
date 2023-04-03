import { useDispatch, useSelector } from 'react-redux';
import { getMovieList } from '../redux/reducers/movieListSlice';
import { useEffect } from 'react';
import PopularMovieList from '../app/components/PoularMovieList';
import SearchMovie from '../app//components/SearchMovie';
import SearchedMovieList from '../app/components/SearchedMovieList';
import { StyledWrapper , StyledListHeader } from '../app//components/styled-components/movie-components';

function App() {
  const dispatch = useDispatch()
  const searchedMovieData = useSelector((state) => state.searchList.searchedMovies);

  // trigger popular movies on page load
  useEffect(() => {
    dispatch(getMovieList())
  },[dispatch])

  return (
    <div className="App">
      <StyledWrapper>
        <StyledListHeader>{searchedMovieData.length === 0 ? 'List of popular movies' : 'Searched Movies'} </StyledListHeader>
        <SearchMovie/>
      </StyledWrapper>
      {
        searchedMovieData.length 
        ? <SearchedMovieList searchedMovieList={searchedMovieData}/>
        : <PopularMovieList/>
      }
    </div>
  );
}

export default App;
