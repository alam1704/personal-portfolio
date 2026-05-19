import type { Meteor } from "@/models/Meteor";
import type { Star } from "@/models/Star";
import { useState } from "react";

const generateStars = () => {
  const numberOfStars = Math.floor(
    (window.innerWidth * window.innerHeight) / 10000,
  );
  return Array.from({ length: numberOfStars }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.5,
  }));
};

const generateMeteors = () => {
  const numberOfMeteors = 4;
  return Array.from({ length: numberOfMeteors }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 20,
    size: Math.random() * 4 + 1,
    animationDuration: Math.random() * 3 + 3,
  }));
};

export const StarBackground = () => {
  const [stars] = useState<Star[]>(generateStars);
  const [meteors] = useState<Meteor[]>(generateMeteors);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.size * 50}px`,
            height: `${meteor.size}px`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
