$(document).keydown( function(e){
  if(e.keyCode == 37) {
    change_sat(258.6631, 14.34, 2.79e-06, semiMajorAxis, global_inclination-1, 0.0002214);
    global_inclination -= 1;
  } if(e.keyCode == 39) {
    change_sat(258.6631, 14.34, 2.79e-06, semiMajorAxis, global_inclination+1, 0.0002214);
    global_inclination += 1;
  } if(e.keyCode == 38) {
    change_sat(258.6631, 14.34, 2.79e-06, semiMajorAxis+20, global_inclination, 0.0002214);
    semiMajorAxis+=20;
  } if(e.keyCode == 40) {
    change_sat(258.6631, 14.34, 2.79e-06, semiMajorAxis-20, global_inclination, 0.0002214);
    semiMajorAxis-=20;
  }
})
