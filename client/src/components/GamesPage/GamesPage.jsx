import { Button, Input, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { MainContext } from "../../context/context";
import { useHttp } from "../../hooks/http.hook";
import Games from "../Games/Games";
import s from "./GamesPage.module.css";
import Posts from "./Posts/Posts";

const GamesPage = () => {
  const { game, setGame } = useContext(MainContext);
  const { request } = useHttp();
  const [newComments, setNewComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChangeComments = (e) => {
    setNewComments({
      ...newComments,
      text: e.target.value,
      id: Math.floor(Math.random() * 1000),
    });
  };

  const addCommentRequest = async (game) => {
    try {
      const response = await request("/api/games/addComments", "POST", {
        game,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    addCommentRequest(game);
  }, [game]);

  useEffect(() => {
    setLoading(true);
    setGame(JSON.parse(localStorage.getItem("game")));
    setLoading(false);
  }, []);

  return (
    <div className={s.wrapper}>
      {!loading ? (
        <>
          <h1>{game?.title}</h1>
          <div className={s.content}>
            <div>
              <ReactPlayer
                width="800px"
                height="400px"
                url={game?.video}
                frameborder="0"
                scrolling="yes"
              ></ReactPlayer>
            </div>
            <div className={s.info}>
              <img src={game?.img} alt="Some problem" />
              <div className={s.text}>{game.description}</div>
              <div className={s.category}>
                {game?.category?.map((category) => (
                  <span className={s.categories}>{category}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={s.area}>
            <TextField
              name="comment"
              fullWidth
              id="standard-basic"
              label="Add your comments"
              variant="standard"
              onChange={(e) => handleChangeComments(e, game.id)}
              value={newComments[game.id]}
            />
            <div className={s.buttons}>
              <span className={s.left_button}>
                <Button variant="outlined" onClick={() => {}}>
                  Clear
                </Button>
              </span>
              <span className={s.right_button}>
                <Button
                  variant="contained"
                  onClick={() => {
                    try {
                      setGame({
                        ...game,
                        comment: [...game.comment, newComments],
                      });
                    } catch (error) {
                      console.lot(error.message);
                    }
                    console.log(game);
                  }}
                >
                  Send
                </Button>
              </span>
            </div>
            <div>
              <Posts game={game} />
            </div>
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default GamesPage;
