import { useEffect, useState } from "react";
import LiveComments from "./LiveComments";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomNames, makeMessage } from "../utils/Helper";

const Livechat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomNames(),
          message: makeMessage(10),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="p-2 h-[400px] border ml-2 border-black w-[380px] bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {messages.map((c, i) => (
          <LiveComments key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="p-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Naveen",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[300px] border border-black px-1"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-green-200 ml-2 p-1">Send</button>
      </form>
    </>
  );
};

export default Livechat;
