import React, { useState } from "react";
import BirthdayList from "./BirthdayList";
import NewBirthday from "../NewBirthdayCard/NewBirthday";

const birthday = [
  {
    name: "Rawan Abdullah",
    date: new Date(2000, 7, 11),
  },
  {
    name: "Alaa Abdullah",
    date: new Date(1999, 1, 25),
  },
  {
    name: "Mohammad Abdullah",
    date: new Date(2004, 5, 21),
  },
  {
    name: "Jood Abdullah",
    date: new Date(2015,0, 5),
  },
  {
    name: "Radwan Abdullah",
    date: new Date(1995, 10, 31),
  },
  {
    name: "soha fadel",
    date: new Date(1976, 2, 21),
  },
];

const Birthday = () => {
  const [birthdayCard, setBirthdayCard] = useState(birthday);
  const AddBirthdayCard = (newbirthday) => {
    setBirthdayCard((prevBirthday) => {
      return [...prevBirthday, newbirthday];
    });
  };
  return (
    <div>
      <NewBirthday onAddBirthdayCard={AddBirthdayCard} />
      <BirthdayList birthdayCard={birthdayCard} />
    </div>
  );
};

export default Birthday;
