import Card from "../../components/Card";
import { getPopularMovies } from "../../services/movies";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Movies = ({ movies }) => {
  const router = useRouter();

  const validateAccess = () => {
    const data = localStorage.getItem("auth");
    if (!data) {
      router.push("/");
    }
  };

  useEffect(() => {
    validateAccess();
  });

  return (
    <section className="w-full">
      <div className="w-full h-72 flex justify-center items-center bg-gradient-to-br from-green-800 to-green-500">
        <div className="text-center text-white">
          <h1 className="font-bold text-3xl">Las Peliculas del Momento!</h1>
          <p className="font-light">
            Puedes ver una lista de las peliculas mas populares del momento y
            acceder a ellas
          </p>
        </div>
      </div>
      <div className="container mx-auto"></div>
      <div className="container mx-auto my-14 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {movies.map((movie, index) => {
          return (
            <Card
              id={movie.id}
              image={movie.poster}
              title={movie.title}
              key={index}
            />
          );
        })}

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  let data = await getPopularMovies();
  const movies = data.results.map((movie) => {
    return {
      id: movie.id,
      titulo: movie.original_title,
      poster: movie.poster_path,
    };
  });

  return {
    props: {
      movies,
    }, // will be passed to the page component as props
  };
}

export default Movies;
