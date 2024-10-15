import React, { useState } from "react";
import Avatar from "./Avatar";
import Contact from "./Contact";

const OnlineUserList = ({
  onlinePeople,
  offlinePeople,
  selectedUserId,
  setSelectedUserId,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOnlinePeople = Object.keys(onlinePeople).filter((userId) => {
    const username = onlinePeople[userId].username || "";
    return username.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const filteredOfflinePeople = Object.keys(offlinePeople).filter((userId) => {
    const { firstName, lastName } = offlinePeople[userId];
    const fullName = `${firstName} ${lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section className="w-[29%] py-3 border-r px-2 lg:px-4 border-l-gray-300">
      <div className="text-white flex items-center gap-2 p-1 px-3 border-b border-gray-300">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 hidden sm:block"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
        d=" 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196"></path>
        </svg>
        <input type="text"
         placeholder="Search..." 
         value={searchTerm} 
         onChange={(e) => setSearchTerm(e.target.value)} 
         className="w-full bg-transparent outline-none" 
         />
      </div>
      <div className="max-h-[85vh] overflow-auto no-scrollbar">
    {filteredOnlinePeople.map((userId) => {
      const { username, avatarLink } = onlinePeople[userId];
      console.log(userId); // For debugging purposes
      return (
        <Contact
          key={userId}
          userId={userId}
          username={username}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          isOnline={true}
          avatarLink={avatarLink} // Include avatarLink for
        />
      );
    })}
      
      {filteredOfflinePeople.map((userId) => {
      const { _id, firstName, lastName, avatarLink } = offlinePeople[userId];
      return (
        <Contact
          key={_id}
          userId={_id}
          username={`${firstName} ${lastName}`}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          isOnline={false}
          avatarLink={avatarLink}
        />
      );
    })}
  </div>
      </section>
);
};
export default OnlineUsersList;
