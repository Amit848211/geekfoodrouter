import React, { useState } from "react";
import { data } from "./data.js";

const Home = () => {
  const [food, setFood] = useState(data);

  function filterData(name) {
    let filterData = data.filter((item) => {
      if (item.name.toLowerCase().includes(name.trim())) {
        return true;
      }
      return false;
    });
    setFood(filterData);
  }

  
  function updateRating(e) {
    let obj = [...food];

    obj[0].rating = e.target.value;

    setFood(obj);
  }

 

  return (
    <div className="flex flex-col px-24 mt-5">
        <div className="flex items-center justify-between text-xl">
          <div>
        <input
          className="pl-4 w-56 h-10 border border-sky-500"
          type="text"
          name="search"
          placeholder="search food"
          onChange={(e) => {
            filterData(e.target.value);
          }}
        />
          </div>
          <div>
        <input
           className="pl-4 w-56 h-10 border border-sky-500 text-xl"
          type="number"
          name="rating"
          placeholder="Enter Rating"
          onChange={updateRating}
        />
          </div>
        </div>
        <div className="flex items-center gap-10 flex-wrap pl-5 mt-8">
      {food.map((item) => {
        return (
          <div
             className="w-[400px] h-[220px] px-4 border flex flex-col"
            key={item._id.$oid}
            
          >
            <h5 className="text-2xl font-semibold opacity-90">{item.name}</h5>
            <p>{item.address}</p>
            <p>Food : {item.type_of_food}</p>
            <p>Rating : {item.rating}</p>
          </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default Home;