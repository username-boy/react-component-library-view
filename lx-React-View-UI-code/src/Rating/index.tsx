import React, {useState} from 'react';

interface RatingProps {
  /**
   * @description 星星的最大个数
   * @default 5
   */
  maxStars: number;
  /**
   * @description 初始化点亮的星星个数
   * @default 2
   */
  initialRating?: number;
  /**
   * @description Function
   */
  onChange?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({maxStars, initialRating = 0, onChange}) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (onChange) {
      onChange(selectedRating);
    }
  };

  return (
    <div>
      {Array.from({length: maxStars}, (_, index) => index + 1).map((star) => (
        <Star key={star} filled={star <= rating} onClick={() => handleStarClick(star)}/>
      ))}
    </div>
  );
};
type StarSize = 'lg' | 'sm'
interface StarProps {
  filled: boolean;
  onClick: () => void;
}
const Star: React.FC<StarProps> = ({filled, onClick}) => {
  return (
    <span
      style={{
        cursor: 'pointer',
        color: filled ? 'gold' : 'gray',
        fontSize:'36px',
        marginRight:'10px'
      }}
      onClick={onClick}
    >
      ★
    </span>
  );
};
Rating.defaultProps = {
  maxStars: 5,
  initialRating: 2,
}
export default Rating;
