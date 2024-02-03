// interval to repeat keep alive in seconds
const refreshTime = 900;

// disable popup
clearInterval(sessionInterval);

// regularly send keep alive signal
setInterval (() => {
    const request = new XMLHttpRequest();
    request.open('get', '/keepAlive.htm?rand=' + Math.floor(Math.random()*100000));
    request.send(null);
}, (refreshTime * 1000));

