import React, { useContext, useEffect, useState } from "react";
import s from "./Games.module.css";
import { BiShow } from "react-icons/bi";
import showImage from "../../images/show-more-icon-1.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { MainContext } from "../../context/context";
import { useHttp } from "../../hooks/http.hook";

const Games = () => {
  const [showGames, setShowGames] = useState(5);
  const [filtr, setFiltr] = useState("");
  const [sort, setSort] = useState("All");
  const [visibleGames, setVisibleGames] = useState([]);
  const { setGame } = useContext(MainContext);
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

  React.useEffect(() => {
    sort === "All"
      ? setVisibleGames(games)
      : setVisibleGames(games.filter((word) => word.category.includes(sort)));
  }, [sort, games]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setGame(games));
    navigate(`/Games/${games.title}`);
  };

  return (
    <div className={s.wrapp}>
      <div className={s.navbar}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={sort}
            label="Category"
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <MenuItem value="All">All Games</MenuItem>
            <MenuItem value="Platform game">Platform game</MenuItem>
            <MenuItem value="Open World">Open World</MenuItem>
            <MenuItem value="Action">Action</MenuItem>
            <MenuItem value="Action role-playing">Action role-playing</MenuItem>
            <MenuItem value="Action-adventure">Action-adventure</MenuItem>
            <MenuItem value="Action/RPG">Action/RPG</MenuItem>
            <MenuItem value="Shooter">Shooter</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <div className={s.area}>
          <input
            style={{ textAlight: "center" }}
            placeholder="Search the game"
            value={filtr}
            onChange={(e) => {
              setFiltr(e.target.value);
            }}
          ></input>
        </div>
        {visibleGames ? (
          visibleGames
            ?.slice(0, showGames)
            .filter((word) => {
              if (word.title.toLowerCase().includes(filtr.toLowerCase())) {
                return word;
              }
            })
            .map((item) => (
              <div className={s.content}>
                <div>
                  <img
                    src={item.img}
                    alt="Some problems"
                    onClick={() => {
                      localStorage.setItem("game", JSON.stringify(item));
                      setGame(item);
                      navigate(`/Games/${item.title}`);
                    }}
                  />
                </div>
                <div className={s.text}>
                  <div className={s.title}>{item.title}</div>
                  <div className={s.platform}>{item.platform}</div>
                  <div>{item.year}</div>

                  <div className={s.category}>
                    {item.category.map((category) => (
                      <span className={s.categories}>{category}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div>loading</div>
        )}

        <div
          className={s.but}
          onClick={() => {
            setShowGames(showGames + 5);
          }}
        >
          <div className={s.message}>Show more</div>
        </div>
      </div>
      <div>Games</div>
    </div>
  );
};

export default Games;
