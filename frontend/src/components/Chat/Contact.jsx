import React from "react";
import Avatar from "./Avatar";

const Contact = ({
  userId,
  username,
  selectedUserId,
  setSelectedUserId,
  isonline,
  avatarLink,
}) => {
  return (
    <li
      key={userId}
      className={`${
        selectedUserId === userId ? "bg-primary" : ""
      } capitalize py-2 lg:py-3 px-2 lg:px-5 rounded-[1.3rem]`}
      onClick={() => {
        setSelectedUserId(userId);
        console.log(userId);
      }}
    >
      <Avatar
        userId={userId}
        username={username}
        isonline={isonline}
        avatarLink={avatarLink}
      />
      <span className="text-xs lg:text-base text-center">{username}</span>
      {isonline && (
        <span className="text-xs rounded-full bg-green-500 px-2 py-1">
          Active
        </span>
      )}
    </li>
  );
};

export default Contact;
