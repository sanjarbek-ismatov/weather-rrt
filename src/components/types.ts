export type stateFilled = {
  data: {
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    };
  };
  message: string;
  response: {
    data: {
      cod?: string;
      message?: string;
    };
  };
};
export type weatherProps = {
  city: string;
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};
