import { Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import classes from './MovieCard.module.css';
import { Movie } from '../../models/movie.model';

const MovieCard = ({
  movie,
  moviePoster,
  setMoviePoster
}: {
  movie: Movie;
  moviePoster: string;
  setMoviePoster: (moviePoster: string) => void;
}) => {

    const FallbackImage = "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";;
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="400"
        sx={{ width: '300px', objectFit: 'contain' }}
        image={moviePoster}
        alt={movie.title}
        onError={() => setMoviePoster(FallbackImage)}
      />
      <CardContent>
        <Rating defaultValue={movie.vote_average} precision={0.25} max={10} size="large" readOnly />
        <Typography gutterBottom variant="h5" component="div" mt={3}>
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={3}>
          Date de sortie : {movie.release_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Titre original : {movie.original_title} - VO : {movie.original_language}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Popularité : {movie.popularity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Évaluation : {movie.vote_average}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Votes : {movie.vote_count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
