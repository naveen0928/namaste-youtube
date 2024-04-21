import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const res = useSelector((store) => store.gpt.searchMovies);
  if (!res) return null;
  return (
    <div className="p-2 m-2 bg-black text-white bg-opacity-80">
      {res.map((item) => (
        <div key={item.id}>
          {item.title}
          {" - "}
          {item.original_title}
          {" - "}
          {item.original_language}
        </div>
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
