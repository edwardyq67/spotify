
function Greeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour < 12) {
    greeting = "Buenos días";
  } else if (currentHour < 18) {
    greeting = "Buenas tardes";
  } else {
    greeting = "Buenas noches";
  }
return (
  <div>
      <h1 class="text-3xl font-semibold">{greeting}</h1>
  </div>
);
}

export default Greeting;