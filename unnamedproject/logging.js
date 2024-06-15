// logging module for the application

export default function log(source, msg, level){
    let time = new Date();
    let timestring = '[' + time.toLocaleTimeString() + '] ';
    if (level == undefined) level = "info";
    if (source == undefined) source = "";
    if (msg == undefined) msg = "";
    if (level == "info"){
        console.log(timestring + source + ": " + msg);
    }
    else if (level == "warn"){
        console.warn(timestring + source + ": " + msg);
    }
    else if (level == "error"){
        console.error(timestring + source + ": " + msg);
    }
    else if (level == "debug"){
        console.debug(timestring + source + ": " + msg);
    }
    else{
        console.log(timestring + source + ": " + msg);
    }
}
