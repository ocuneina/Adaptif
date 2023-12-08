const diffCalculate = () => {
  const date1 = new Date(document.getElementById("date1").value);
  const date2 = new Date(document.getElementById("date2").value);

  /* Millisecond values for testing purposes */
  //   const date1 = new Date("2023-12-21T15:01:00.000");
  //   const date2 = new Date("2023-09-22T12:00:01.100");

  const oneDay = 24 * 60 * 60 * 1000;
  let diffTime = Math.abs(date1.getTime() - date2.getTime());
  let diffDates = Math.round(diffTime / oneDay);

  /**
   * The following part of the code was uploaded later during the day.
   * Please disregard it if you find it inappropriate.
   * It was not enough time for me to make it more user-proof,
   * but I enjoyed working on calcul function and conditional output
   * */

  const calcul = (value) => {
    duration = ` or exactly ${value} ms`;
    let diffMsec = value;

    let diffSeconds = (diffMsec - (diffMsec % 1000)) / 1000;
    diffMsec = diffMsec % 1000;
    if (diffMsec) {
      duration = `and ${diffMsec} ms.` + duration;
    }

    let diffMinutes = (diffSeconds - (diffSeconds % 60)) / 60;
    diffSeconds = diffSeconds % 60;
    if (diffSeconds) {
      duration = `${diffSeconds} seconds ` + duration;
    }

    let diffHours = (diffMinutes - (diffMinutes % 60)) / 60;
    diffMinutes = diffMinutes % 60;
    if (diffMinutes) {
      duration = `${diffMinutes} minutes ` + duration;
    }

    let diffDays = (diffHours - (diffHours % 24)) / 24;
    diffHours = diffHours % 24;
    if (diffHours) {
      duration = `${diffHours} hours ` + duration;
    }

    let diffMonths = (diffDays - (diffDays % 30)) / 30;
    diffDays = diffDays % 30;
    if (diffDays) {
      duration = `${diffDays} days ` + duration;
    }

    let diffYears = (diffMonths - (diffMonths % 12)) / 12;
    diffMonths = diffMonths % 12;
    if (diffMonths) {
      duration = `${diffMonths} months ` + duration;
    }
    if (diffYears) {
      duration = `${diffYears} years ` + duration;
    }

    return duration;
  };

  calcul(diffTime);

  /** End of overtime upload */

  if (diffDates === 0 && date1.getDate() === date2.getDate()) {
    document.getElementById("diff").innerHTML = `Same date`;
  } else
    document.getElementById(
      "diff"
    ).innerHTML = `<div> The difference between those dates is ${diffDates} day(s)</div>`;

  document.getElementById(
    "calc"
  ).innerHTML = `<div> The duration between those dates is approximately ${duration} </div>`;
};
