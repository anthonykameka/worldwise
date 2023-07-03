import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem";
import Message from "./Message.jsx";

export default function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking a destination on the map" />
    );
  }
  console.log(cities);
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} />;
      })}
    </ul>
  );
}
