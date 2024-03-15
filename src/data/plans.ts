import arcadeImage from '/public/static/images/icon-arcade.svg';
import advancedImage from '/public/static/images/icon-advanced.svg';
import proImage from '/public/static/images/icon-pro.svg';

  export interface Plans {
    [key: string]: {
      imageSrc: string;
      monthly: number;
      yearly: number;
    };
  }

  const plans: Plans = {
    "Arcade": {
      imageSrc: arcadeImage,
      monthly: 9,
      yearly: 90
    },
    "Advanced": {
      imageSrc: advancedImage,
      monthly: 12,
      yearly: 120
    },
    "Pro": {
      imageSrc: proImage,
      monthly: 15,
      yearly: 150
    }
  };

  export default plans;
