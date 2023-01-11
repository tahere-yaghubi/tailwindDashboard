import React, { useState } from "react";
import {AcademicCapIcon, Charts, Home, Messages, UsersIcon} from '../../assets/icons/index'
import Banner from "../../components/elements/Banner";
import Card from "../../components/elements/Card";


function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap lg:flex-row align-center justify-center my-4 mx-auto w-full max-w-screen-2xl">

      <div className="w-full flex flex-wrap lg:flex-row align-center justify-center">
      <Card/>

<Card/>

<Card/>

<Card/>

      </div>
      
       
 <div className="w-full flex md:flex-row sm:flex-col">
  <Banner />
  <Banner />
</div> 
   

      </div>
    </>
  );
}

export default Dashboard;
