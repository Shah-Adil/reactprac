import React, { Component } from 'react'
import MovieFile from "./MovieFile";
import Like from "./like";
import Pagi from "./pagi";
import { Paginate } from "../utils/paginate";
import "./style.css";

class Movie extends Component {
    state = {
        MoviesFile: MovieFile(),
        pageSize: 4,
        currentPage: 1

    }


    handleDelete = MovieId => {
        const MoviesFile = this.state.MoviesFile.filter(m => m.id !== MovieId);
        this.setState({ MoviesFile });

    }

    handleLike = movie => {
        const MoviesFile = [...this.state.MoviesFile];
        const index = MoviesFile.indexOf(movie);
        MoviesFile[index] = { ...MoviesFile[index] }
        MoviesFile[index].liked = !MoviesFile[index].liked;
        this.setState({ MoviesFile })

    }
    handdlePageChange = (page) => {
        this.setState({ currentPage: page })
    }

    render() {
        const { length: count } = this.state.MoviesFile;
        const { MoviesFile: allMovies, pageSize, currentPage } = this.state;

        if (count === 0) {
            return <h2 align="center">No Movies Yet</h2>
        }

        const MoviesFile = Paginate(allMovies, currentPage, pageSize);


        return (

            <div align="center" >

                <h1>Showing {count} Movies in the database</h1>
                <table border="1" cellSpacing='0' cellPadding='10' align="center">

                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Genre</td>
                            <td>Rate</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody>
                        {MoviesFile.map(movie =>
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.rate}</td>
                                <td><Like liked={movie.liked} onLiked={() => this.handleLike(movie)} /></td>
                                <td><button onClick={() => this.handleDelete(movie.id)}>X</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Pagi itemCount={count}
                    pageSize={pageSize}
                    onPageChange={this.handdlePageChange}
                    currentPage={currentPage}
                />


            </div>


        );
    }
}

export default Movie;