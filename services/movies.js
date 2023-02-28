import axios from 'axios'

export const getPopularMovies = async () => {
    const {data} = await axios.get(
        // "https://www.themoviedb.org/api/discover/movie?sort_by=popularity.desc"
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e921c0a1e83051a2eb341d35b82fdbe5"
    );

    console.log(data)

    return data
}