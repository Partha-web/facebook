import React, { useState } from "react";

const SideBar = () => {
  const [state, setState] = useState([
    { id: 1, image: "https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Flutter Development" },
    { id: 2, image: "https://images.pexels.com/photos/2085717/pexels-photo-2085717.jpeg?auto=compress&cs=tinysrgb&w=600", name: "PHP Development" },
    { id: 3, image: "https://images.pexels.com/photos/1215695/pexels-photo-1215695.jpeg?auto=compress&cs=tinysrgb&w=600", name: "React Native Development" },
    { id: 4, image: "https://images.pexels.com/photos/1208024/pexels-photo-1208024.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Node JS Development" },
    { id: 5, image: "https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Vue JS Development" },
    { id: 6, image: "https://images.pexels.com/photos/1149840/pexels-photo-1149840.jpeg?auto=compress&cs=tinysrgb&w=600", name: "React Development" },
  ]);
  return (
    <div className="sidebar">
      {state.map((info) => (
        <div className="sidebar__list" key={info.id}>
          <div className="sidebar__list-img">
            <img src={info.image} alt="group image" />
          </div>
          <div className="sidebar__list-name">{info.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
