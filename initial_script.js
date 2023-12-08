const diffCalculate = () => {
  const date1 = new Date(document.getElementById("date1").value);
  const date2 = new Date(document.getElementById("date2").value);

  const oneDay = 24 * 60 * 60 * 1000;
  let diffTime = Math.abs(date1.getTime() - date2.getTime());
  let diffDates = diffTime / oneDay;

  console.log(diffTime);

  if (diffDates !== 0) {
    document.getElementById(
      "diff"
    ).innerHTML = ` The difference between those dates is ${diffDates} day(s)`;
  } else document.getElementById("diff").innerHTML = `Same date`;

  document.getElementById(
    "calc"
  ).innerHTML = ` The difference between those dates is ${diffTime} seconds<br> `;
};
