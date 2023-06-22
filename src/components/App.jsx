import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Header } from './Header';
import { MovieDetails } from './MovieDetails';
import { Movies } from './Movies';

export const App = () => {
  return (
    <>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="movies" element={<Movies></Movies>}></Route>
          <Route path="movies/:movieId" element={<MovieDetails></MovieDetails>}>
            <Route path="cast"></Route>
            <Route path="reviews"></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
};
