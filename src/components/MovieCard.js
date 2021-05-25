import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export class MovieCard extends Component {
    
    //selectMovie =() => { 
    //    
    //    selectMovie(movie)
//
    //}

    render() {
     const   { movie,selectMovie } = this.props;
    return (
      <div>
        <Card className="movie-card">
          <CardActionArea>
            <CardMedia
              className="movie-img"
              image={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              title={movie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {movie.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default MovieCard;
