import React from 'react'
import Welcome from "../Sections/Welcome"
import Aboutus from "../Sections/AboutUs"
import Special from "../Sections/Special";
import Kitchen from "../Sections/Kitchen";
import Toaction from "../Sections/Toaction";
import Ingredients from "../Sections/Ingredients";
import Statistics from "../Sections/Statistics";
import Reviews from "../Sections/Reviews";

export default function Home() {
  return (
    <div>
      <Welcome />
      <Aboutus />
      <Special />
      <Kitchen />
      <Toaction />
      <Ingredients />
      <Statistics />
      <Reviews />
    </div>
  );
}