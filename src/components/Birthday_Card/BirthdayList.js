import React,{useState} from "react";
import Card from "../UI/Card.js";
import BirthdayItem from "./BirthdayItem";
import BirthdayFilter from "./BirthdayFilter.js";
import "./BirthdayList.css";

const BirthdayList = (props) => {
  const [filteredMonth, setFilteredMonth] = useState('All');

  const filterChangeHandler=(filterMonth)=>{
    setFilteredMonth(filterMonth);
  }

    let check=false;    
    if (filteredMonth ==='All') { check=false;}
    else{check=true;}

    const filteredBirthday = props.birthdayCard.filter((Birthday) => {
      return( (Birthday.date.toLocaleString("en-US", { month: "long" })) === filteredMonth);
    });
  
  return (
    <Card className="Birthday_List">
      
      <BirthdayFilter
        selected={filteredMonth}
        onChangeFilter={filterChangeHandler}
      />
      
      {check&& filteredBirthday.map((card) => (
        <BirthdayItem key={card.name} date={card.date} name={card.name} />
      ))}
       {!check&&  props.birthdayCard.map((card) => (
        <BirthdayItem key={card.name} date={card.date} name={card.name} />
      ))}
    </Card>
  );
};

export default BirthdayList;
