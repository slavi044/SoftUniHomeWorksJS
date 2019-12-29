function storeMovieInfo(commands) {
    let movies = [];

    for (const command of commands) {
        let tokens = command.split(' ');

        if (tokens[0] === 'addMovie') {
            let movieName = tokens.slice(1).join(' ');
            let movie = { "name": movieName };
            movies.push(movie);

        } else if (tokens.includes('directedBy')) {
            let index = tokens.indexOf('directedBy');
            let movieName = tokens.slice(0, index).join(' ');
            let movie = movies.find((f) => f.name === movieName);

            if (movie) {
                let dirName = tokens.slice(index + 1).join(' ')
                movie["director"] = dirName;

            }
        } else if (tokens.includes('onDate')) {
            let index = tokens.indexOf('onDate');
            let movieName = tokens.slice(0, index).join(' ');
            let movie = movies.find((f) => f.name === movieName);

            if (movie) {
                let data = tokens.slice(index + 1).join(' ');
                movie["date"] = data;

            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
        
    }

}

storeMovieInfo(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]);