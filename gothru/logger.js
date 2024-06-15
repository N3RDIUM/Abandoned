console.clear()

let DEBUG    = "DEBUG"
let INFO     = "INFO"
let WARN     = "WARN"
let ERROR    = "ERROR"
let CRTITCAL = "CRTITCAL"

function log(level, source, message){
    // get date
    var date = new Date();
    var dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    if(level == DEBUG){
        console.debug("DEBUG    [" + dateString + "] " + source + ": " + message);
    }
    else if(level == INFO){
        console.log("INFO     [" + dateString + "] " + source + ": " + message);
    }
    else if(level == WARN){
        console.warn("WARN    [" + dateString + "] " + source + ": " + message);
    }
    else if(level == ERROR){
        console.error("ERROR    [" + dateString + "] " + source + ": " + message);
    }
    else if(level == CRTITCAL){
        console.error("CRITICAL [" + dateString + "] " + source + ": " + message);
    }
}

exports = {'log': log, 'DEBUG': DEBUG, 'INFO': INFO, 'WARN': WARN, 'ERROR': ERROR, 'CRTITCAL': CRTITCAL};
module.exports = exports;
