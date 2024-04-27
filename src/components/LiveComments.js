import { USER_ICON } from "../utils/Constants";

const LiveComments = ({name, message}) => {
  return (
    <div className="flex items-center">
      <img className="w-10 h-10" alt="user-icon" src={USER_ICON} />
      <div>
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default LiveComments;
