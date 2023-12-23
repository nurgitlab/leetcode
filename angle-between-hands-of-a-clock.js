var angleClock = function(hour, minutes) {
  //360 градусов
  //в 1 часе 30 градусов
  //значит по 0.5 градуса на каждую минуту сверху
  hour = hour % 12;
  let hd = hour * 30 + minutes * 0.5
  let md = minutes * 6;
  console.log(hd, md)
  return Math.min(Math.abs(md - hd), Math.abs(360 - md + hd), Math.abs(360 + md - hd))
};