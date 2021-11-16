export default function FormatedDate(props) {
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let minNow = 0;
  if (minutes <= 9) {
    minNow = `0${minutes}`;
  } else {
    minNow = minutes;
  }
  return (
    <div>
      {days[day]} {hours}: {minNow}
    </div>
  );
}
