import Button from "./Button";

const ButtonsList = () => {
  const array = [
    "All",
    "Badminton",
    "Music",
    "Telugu cinema",
    "Mixes",
    "Auditions",
    "Movie musicals",
    "Gaming",
    "Juke box",
    "Game shows",
  ];

  return (
    <div className="flex">
      {array.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonsList;
