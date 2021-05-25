import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MovieCard from "./components/MovieCard";
const originalMovies = [
  { id: 1, title: "Star Wars" },
  { id: 2, title: "Blade Runner" },
];

class App extends Component {
  state = { movies: [] };

  async componentDidMount() {
    //setTimeout(()=>{
    //  this.setState({movies: originalMovies});
    //},2000)
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b766695e55dc61d652c73046be58ee40"
    );
    const json = await response.json();
    this.setState({ movies: json.results });
    console.log(this.state.movies);
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Top Movies</Typography>
            </Toolbar>
          </AppBar>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="movies">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
