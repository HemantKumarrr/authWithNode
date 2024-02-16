import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardList from "./CardList";


const Cards = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user')

  useEffect(()=> {
    if(!auth) {
      navigate('/signup')
    }
  },[])

  return (
    <div className="py-16 px-16 flex flex-wrap gap-8" >
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
    </div>
  );
};

export default Cards;
