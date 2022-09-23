
function date() {
  const dt = new Date();
  document.querySelector('.date').innerHTML = dt.toLocaleString('en-US');
}

date();
setInterval(date, 1000);
