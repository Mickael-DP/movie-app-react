import { Button } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from 'react-router-dom';
import { Movie } from '../../models/movie.model';
import { fetchMovie } from '../../services/api/tmdb';
import { useState } from 'react';
import React from 'react';

const Details = () => {
    const [movie, setMovie] = useState<Movie>();
    const [moviePoster, setMoviePoster] = useState<string>("");
    
    const { id } = useParams();
    
    const navigate = useNavigate();

    React.useEffect(() => {
        if (id !== undefined) {
          fetchMovie(id).then((res: Movie) => {
            setMovie(res);
            setMoviePoster(`https://image.tmdb.org/t/p/w500/${res?.poster_path}`);
          });
        }
      }, [id]);
    
      if (!movie) return <></>;

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ marginRight: 'auto', marginBottom: 2 }}
        onClick={() => navigate('/')}>
        Go back
      </Button>
      <MovieCard movie={movie} moviePoster={moviePoster} setMoviePoster={setMoviePoster} />
    </>
  );
};

export default Details;
