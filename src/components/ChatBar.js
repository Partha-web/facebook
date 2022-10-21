import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Ankan Patra" },
    { id: 2, image: "https://images.pexels.com/photos/1208024/pexels-photo-1208024.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Raja Patra" },
    { id: 3, image: "https://images.pexels.com/photos/1215695/pexels-photo-1215695.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Saikat Ghosh" },
    { id: 4, image: "https://images.pexels.com/photos/2085717/pexels-photo-2085717.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Koushik Sen" },
    { id: 5, image: "https://images.pexels.com/photos/9768729/pexels-photo-9768729.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Fazal Khan" },
    { id: 6, image: "https://images.pexels.com/photos/1149840/pexels-photo-1149840.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Ishita Ghosh" },
    { id: 6, image: "https://images.pexels.com/photos/4308162/pexels-photo-4308162.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Trishita Jana" },
    { id: 7, image: "https://images.pexels.com/photos/695204/pexels-photo-695204.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Wasim" },
    { id: 8, image: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Rahul Bera" },
    { id: 9, image: "https://images.pexels.com/photos/7580994/pexels-photo-7580994.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Santanu Pal" },
    { id: 10, image: "https://images.pexels.com/photos/4307661/pexels-photo-4307661.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Deo David" },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
