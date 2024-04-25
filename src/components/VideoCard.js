const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 shadow-sm">
      <img className="w-60" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold w-40 py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return <div className="border border-red-900"><VideoCard info={info} /></div>;
};

export default VideoCard;
