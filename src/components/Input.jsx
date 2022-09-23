import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Input() {
  const [user, setUser] = useState({ userName: "", userPic: "" });
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const current = { ...user };
    current.userName = searchParams.get("name");
    current.userPic = searchParams.get("pic");
    setUser(current);
  }, []);

  const handleSubmit = async () => {
    let data = { ...user };
    data.message = message;
    const res = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: {
        /* prettier-ignore */
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response.data) navigate("/");
    else if (response.message) setErr(response.message);
  };

  return (
    <>
      {err && <h1 className='error'>{err}</h1>}
      <div className='wrapper'>
        <div className='container form'>
          <h1 className='title'>
            Send me anonymous <br /> message!
          </h1>
          <textarea
            type='text'
            className='field'
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className='start-btn' onClick={handleSubmit}>
          Send
        </button>
      </div>
    </>
  );
}
