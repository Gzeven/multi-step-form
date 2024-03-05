export interface Options {
    [key: string]: {
      text: string;
      monthly: number;
      yearly: number;
    };
  }
  
  const options: Options = {
    "Online service": {
      text: "Access to multiplayer games",
      monthly: 1,
      yearly: 10
    },
    "Larger storage": {
      text: "Extra 1TB of cloud save",
      monthly: 2,
      yearly: 20
    },
    "Customizable profile": {
      text: "Custom theme on your profile",
      monthly: 2,
      yearly: 20
    }
  };
  
  export default options;