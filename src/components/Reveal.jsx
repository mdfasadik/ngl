import React, { useEffect, useState } from "react";

export default function Reveal() {
  const [messages, setMessages] = useState("");
  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch(process.env.REACT_APP_API_URL, {
        method: "GET",
        headers: {
          /* prettier-ignore */
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      if (response.data) {
        setMessages(response.data);
      }
    };
    getMessages();
  }, []);

  const handleDelete = async () => {
    const res = await fetch(process.env.REACT_APP_API_URL, {
      method: "DELETE",
      headers: {
        /* prettier-ignore */
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    if (response.data) setMessages([]);
  };

  return (
    <>
      <div className='user-wrapper'>
        <button className='del-btn' onClick={handleDelete}>
          Delete All
        </button>
        {messages &&
          messages.map((user, index) => {
            return (
              <div className='user' key={index}>
                <img src={user.userPic} className='user-pp' />
                <div className='main-data'>
                  <h3>{user.userName}</h3>
                  <p>{user.message}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
