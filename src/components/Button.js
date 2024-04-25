const Button = ({ name }) => {
  return (
    <div className="cursor-pointer py-1 px-3 m-1 text-center text-black text-sm font-semibold bg-gray-200 rounded-lg w-auto">
      {name}
    </div>
  );
};

export default Button;
