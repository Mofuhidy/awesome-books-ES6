import { DateTime } from 'luxon';

const now = DateTime.now();
const showTime = () => {
  const dateTime = document.querySelector('.time');
  const timeDate = () => {
    setInterval(() => {
      const date = new Date().toUTCString();
      dateTime.innerHTML = now;
    }, 0);
  };

  timeDate();
};