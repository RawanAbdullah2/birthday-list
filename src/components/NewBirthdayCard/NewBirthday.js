import React, { useState } from "react";
import Card from "../UI/Card";
import "./NewBirthday.css";

const NewBirthday = (props) => {
  const [Dates, setDate] = useState("");
  const [Name, setName] = useState("");

  const setDateHandler = (event) => {
    setDate(event.target.value);
  };
  const setNameHandler = (event) => {
    setName(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const newbirthday = {
      name: Name,
      date: new Date(Dates),
    };
    props.onAddBirthdayCard(newbirthday);
    setDate("");
    setName("");
  };
  return (
    <Card className="New_Birthday">
      <div className="New_Birthday__Title">
        Many <span> Happy</span> return's of the day !
      </div>
      <form className="New-Birthday__form">
        <div>
          <label>Name:</label>
          <input type="text" value={Name} onChange={setNameHandler} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" value={Dates} onChange={setDateHandler} />
        </div>
      </form>
      <button
        type="submit"
        className="New_Birthday_btn"
        onClick={submitHandler}
      >
        Add Birthday{" "}
      </button>
    </Card>
  );
};

export default NewBirthday;
