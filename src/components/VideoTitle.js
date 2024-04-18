const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-56 px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold py-3">{title}</h1>
      <p className="w-2/5">{overview}</p>
      <div className="my-8">
        <button className="bg-white px-8 rounded-lg py-3 text-black hover:bg-opacity-50">▶ Play</button>
        <button className="bg-gray-600 px-8 rounded-lg py-3 text-white bg-opacity-40 ml-2">ℹ️ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
