import React from "react";

function Card() {
  return (
    <>
      <div class="card bg-dark text-white">
        <img
          src="https://i.pinimg.com/originals/97/42/79/97427919f0e576b69dfebf079f9aef23.gif"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay">
          <h5 class="card-title">WELCOME ALL</h5>
          <p class="card-text">Welcome to the tournament software system.</p>
          <p class="card-text">
            Find out the latest tournament details & Participants List.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
