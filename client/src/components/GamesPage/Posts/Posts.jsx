import React, { useEffect, useState } from "react";
import s from "./Posts.module.css";
import userImage from "../../../images/userImage.jpg";
import { useHttp } from "../../../hooks/http.hook";

function Posts({ game }) {
  const { request } = useHttp();
  const [games, setGames] = useState([]);
  const findGameRequest = async () => {
    try {
      const data = await request("http://localhost:5000/api/games/getGames");
      setGames(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    findGameRequest();
  }, []);
  return (
    <div className={s.wrapper}>
      <div>
        {game?.comment?.map((comment) => (
          <div className={s.text}>
            <div className={s.item}>
              <div>
                <img src={userImage}></img>
              </div>
              <div className={s.comment}>{comment.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
