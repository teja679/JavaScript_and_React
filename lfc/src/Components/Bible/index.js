import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Books from "../../data/bible1/Books.json";
import Genesis from "../../data/bible1/Genesis.json";
import Exodus from "../../data/bible1/Exodus.json";
import { BookData } from "../../data/bible/BookData";

export function bible() {
  <div>
     
  </div>
}
function BibleComponent() {
  const [book, setBook] = useState("Genesis");
  const [chap, setChap] = useState("");
  const [chapKeys, setChapKeys] = useState([1]);
  const [chapData, setChapData] = useState([]);
  const [verse, setVerse] = useState("");
  const [verseKeys, setVerseKeys] = useState([1]);
  const [dispData, setDispData] = useState([
    "Select The Book You Want To Read",
  ]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const style = {
    position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    py: 1,
  };
  
  const handleChange = (e) => {
    var json = {}
    json = require("../../data/bible1/" + e.target.value + ".json")
    console.log('json',json)
    // console.log(json["chapters"])
    setChapKeys(Object.keys(json["chapters"]))
    setChapData(json['chapters'])
    setBook(json['book']['english'])
  };
  console.log(chapKeys)
  const chapterChange = (e) => {
    console.log(Object.keys(chapData[e.target.value].verses))
    setVerseKeys(Object.keys(chapData[e.target.value].verses))
  };
  const verseChange = (e) => {};

  return (
    <div>
      <div className="biblebody">
      <Button fullWidth onClick={handleOpen}>{book}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <select id="Book" onChange={(e)=>handleChange(e)} name="Book">
          {Books.map((Book, index) => (
            <option key={index} value={Book['book']['english']}>
              {Book['book']['english']}
            </option>
          ))}
        </select>
        <br />
        <select id="Chapter" onChange={(e)=>chapterChange(e)} name="Chapter">
          {chapKeys.map((user, index) => (
            <option value={user} key={index}>
              {user}
            </option>
          ))}
        </select>
        <br />
        <select id="Verse" onChange={verseChange} name="Verse">
          {verseKeys.map((user, index) => (
            <option value={user} key={index}>
              {user}
            </option>
          ))}
        </select>
        </Box>
      </Modal>

        <div className="display">
          {dispData.map((verse, index) => (
            <div key={verse} className="verses">
              {verse}
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BibleComponent;
