"use client"
import React, { useEffect } from 'react';


const MovingButtonAnimate = () => {
  useEffect(() => {
    const textElement = document.querySelector(".MainCircletext");

    if (textElement) {
      textElement.innerHTML = textElement.innerText
        .split("")
        .map(
          (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div className="circleAnimation">
      <div className='font-display'>Scroll Now</div>
      <div className="MainCircletext">
        <p>Where Solution meet with Ethics . </p>
      </div>
    </div>
  );
}

export default MovingButtonAnimate;
