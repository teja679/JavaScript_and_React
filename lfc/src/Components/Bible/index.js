import React, { useState } from "react";
import Books from "../../data/bible1/Books.json";
import Genesis from "../../data/bible1/Genesis.json";
import Exodus from "../../data/bible1/Exodus.json";
import { BookData } from "../../data/bible/BookData";
import { Grid, MenuItem, Select } from "@mui/material";
function Bible() {
  const [book, setBook] = useState("");
  const [chap, setChap] = useState("");
  const [chapKeys, setChapKeys] = useState(["Select Chapter"]);
  const [chapData, setChapData] = useState([]);
  const [verse, setVerse] = useState("");
  const [verseKeys, setVerseKeys] = useState(["Select Verse"]);
  const [dispData, setDispData] = useState([
    "Select The Book You Want To Read",
  ]);

  const handleChange = (e) => {
    var json = {};
    json = require("../../data/bible1/" + e.target.value + ".json");
    console.log("json", json);
    console.log(json["chapters"]);
    setChapKeys(Object.keys(json["chapters"]));
    setChapData(json["chapters"]);
  };
  console.log(chapKeys);
  const chapterChange = (e) => {
    console.log(Object.keys(chapData[e.target.value].verses));
    setVerseKeys(Object.keys(chapData[e.target.value].verses));
  };
  const verseChange = (e) => {};

  return (
    <div>
      <Grid container className="biblebody">
        <Grid item xs={6}>
          <Select fullWidth
            labelId="demo-simple-select-label"
            id="Book"
            onChange={(e) => handleChange(e)}
            label="Book"
          >
            {Books.map((Book, index) => (
              <MenuItem key={index} value={Book["book"]["english"]}>
                {Book["book"]["english"]}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={3}>
        <Select fullWidth
            labelId="demo-simple-select-label"
            id="Chapter"
            onChange={(e) => handleChange(e)}
            label="Book"
          >
            {Books.map((Book, index) => (
              <MenuItem key={index} value={Book["book"]["english"]}>
                {Book["book"]["english"]}
              </MenuItem>
            ))}
          </Select>
          <select
            id="Chapter"
            onChange={(e) => chapterChange(e)}
            name="Chapter"
          >
            {chapKeys.map((user, index) => (
              <MenuItem value={user} key={index}>
                {user}
              </MenuItem>
            ))}
          </select>
        </Grid>

        <Grid item xs={3}>
          <select id="Verse" onChange={verseChange} name="Verse">
            {verseKeys.map((user, index) => (
              <option value={user} key={index}>
                {user}
              </option>
            ))}
          </select>
        </Grid>

        <div className="display">
          <div style={{ textAlign: "center" }}>
            <h2>{book}</h2>
          </div>
          {dispData.map((verse, index) => (
            <div key={verse} className="verses">
              {verse}
              <br />
            </div>
          ))}
        </div>
      </Grid>
    </div>
  );
}

export default Bible;
