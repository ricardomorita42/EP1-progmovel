import dayjs from 'dayjs';
const config = {
  weather: {
    apiKey: "f4862a0bd37c9685edb345d97c1f63d1",
    unitCodes:{
      celsius: 'metric',
      fahrenheit:'imperial',
    },
  },
  dateFormat: 'DD/MM/YYYY',
};


export const formatDate = (timestamp: number): string => {
  return dayjs.unix(timestamp).format(config.dateFormat);
};