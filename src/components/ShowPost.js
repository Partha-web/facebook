import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt,AiOutlineCaretDown } from "react-icons/fa";
const ShowPost = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      userImg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Ankan Patra",
      time: "2h",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg: "https://images.pexels.com/photos/1349959/pexels-photo-1349959.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      userImg: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sajjad Khan",
      time: "4h",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg: "https://images.pexels.com/photos/21696/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      userImg: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Rahul Pal",
      time: "2h",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg: "https://images.pexels.com/photos/39621/boat-teamwork-training-exercise-39621.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      userImg: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Salina Gomez",
      time: "2h",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg: "https://images.pexels.com/photos/1582161/pexels-photo-1582161.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);
  return (
    <div className="show">
      {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={post.postImg} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
          {/* Comments */}
          <div className="show__comments">
            <span className="reactions">
            <span className="reactions-text"> 
            View 2 previous comments
            </span>
            </span>
         
            <span className="reactions">
              {/* <AiOutlineCaretDown/> */}
           <span className="reactions-text">   Most relevant</span>
           
            </span>
          </div>
          <div className="show__header">
            <div className="show__header-img">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
            </div>
            <div className="show__header-Comment">
              Rajiv rout <div className="date">Awesome</div>
         
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;
