interface Rating {
  name: string,
  score: number,
  logo?: string,
}

interface Movie {
  id: string,
  title: string,
  studio: string,
  cover?: string,
  synopsis: string,
  ratings: Rating[],
} 

export default function Movies() {
  const movie: Movie = {
    id: "dd8974b9-1416-40eb-9c85-bc3570f6c794",
    title: "The Rain that Felled",
    studio: "Global Films",
    cover: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    synopsis: "This enthusiastic movie shows in depth how can a rain drop change a man's life forever.",
    ratings: [
      {name: "IMDb", score: 8.5, logo: "imdb_icon.png"},
      {name: "Rotten Tomatoes", score: 2.5, logo: "rotten_tomatoes.png"}
    ]
  };

  return (
    <div id="movies">
      <div>
        <h1>{movie.title}</h1>
        <img
          key={movie.id}
          src={movie.cover}
        />
      </div>
    </div>
  );
}