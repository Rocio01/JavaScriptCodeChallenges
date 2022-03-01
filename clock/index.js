const clockdiv = document.querySelector(".clock")

const clock = () => {
  return setInterval(()=> {
    let date = new Date();
    let ticktac = date.toLocaleTimeString();
    clockdiv.textContent = ticktac;
  }, 1000)
}

clock();