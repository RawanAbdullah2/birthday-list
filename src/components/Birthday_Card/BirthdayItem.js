import React from "react";
import Card from "../UI/Card.js";
import "./BirthdayItem.css";

const BirthdayItem = (props) => {
  const name = props.name;

  const month =props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="Birthday_Card">
      <div className="Birthday_Card__Date">
        <div className="Birthday_Card__Day">{day}</div>
        <div className="Birthday_Card__Month">{month}</div>
        <div className ="Birthday_Card__year">{year}</div>
      </div>
      <div className="line"></div>
      <div className="Birthday_Card__Name">{name}</div>
    </Card>
  );
};

export default BirthdayItem;
