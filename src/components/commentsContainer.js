import { USER_ICON } from "../utils/Constants";

const commentsData = [
  {
    name: "Naveen Mandapati",
    text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    replies: [],
  },
  {
    name: "Naveen Mandapati",
    text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    replies: [
      {
        name: "Naveen Mandapati",
        text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
        replies: [
          {
            name: "Naveen Mandapati",
            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
            replies: [],
          },
          {
            name: "Naveen Mandapati",
            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
            replies: [],
          },
        ],
      },
      {
        name: "Naveen Mandapati",
        text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
        replies: [],
      },
      {
        name: "Naveen Mandapati",
        text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
        replies: [
          {
            name: "Naveen Mandapati",
            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Naveen Mandapati",
    text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    replies: [
      {
        name: "Naveen Mandapati",
        text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
        replies: [
          {
            name: "Naveen Mandapati",
            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
            replies: [
              {
                name: "Naveen Mandapati",
                text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
                replies: [
                  {
                    name: "Naveen Mandapati",
                    text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
                    replies: [
                      {
                        name: "Naveen Mandapati",
                        text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
                        replies: [
                          {
                            name: "Naveen Mandapati",
                            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
                            replies: [],
                          },
                          {
                            name: "Naveen Mandapati",
                            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "Naveen Mandapati",
                    text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
                    replies: [],
                  },
                ],
              },
              {
                name: "Naveen Mandapati",
                text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
                replies: [],
              },
              {
                name: "Naveen Mandapati",
                text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
                replies: [],
              },
            ],
          },
          {
            name: "Naveen Mandapati",
            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
            replies: [],
          },
          {
            name: "Naveen Mandapati",
            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
            replies: [],
          },
        ],
      },
      {
        name: "Naveen Mandapati",
        text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
        replies: [],
      },
      {
        name: "Naveen Mandapati",
        text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
        replies: [],
      },
    ],
  },
  {
    name: "Naveen Mandapati",
    text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    replies: [],
  },
  {
    name: "Naveen Mandapati",
    text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex py-5 bg-gray-100 my-3 rounded-lg mx-5">
      <img className="w-10 h-10" alt="user-icon" src={USER_ICON} />
      <div className="ml-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p2 m-3">
      <p className="text-xl font-bold">Comments: </p>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
