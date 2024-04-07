import { HEADER_LOGO } from "../utils/Constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={HEADER_LOGO} alt="netflix-logo" />
    </div>
  );
};

export default Header;
