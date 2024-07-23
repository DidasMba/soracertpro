import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div style={styles.container}>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;

        return (
          <label key={index} style={styles.label}>
            <input
              type="radio"
              name="rate"
              value={currentRate}
              onClick={() => setRating(currentRate)}
              style={styles.hiddenInput}
            />
            <FaStar
              color={currentRate <= (hover || rating) ? "yellow" : "grey"}
              size={20}
              onMouseEnter={() => setHover(currentRate)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(currentRate)}
              style={styles.star}
            />
          </label>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    cursor: 'pointer',
    marginRight: 5, // Adjust spacing between stars if needed
  },
  hiddenInput: {
    display: 'none',
  },
  star: {
    verticalAlign: 'middle',
  },
};

export default StarRating;

