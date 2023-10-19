function timeConversion(s) {
    function zfill(str, width) {
        const padding = '0'.repeat(width - str.length);
        return padding + str;
    }
    let splited = s.split(":");
    let seconds = splited[2];
    if(splited[2][2].toUpperCase()=== "P" || splited[2][1].toUpperCase()=== "P"){
        let hour = parseInt(splited[0]);
        let sec= seconds.split("P")[0];
        return (splited[0]=="12")? `12:${splited[1]}:${zfill(sec,2)}`: `${hour + 12}:${splited[1]}:${zfill(sec,2)}`;
    }
    else if (splited[2][2].toUpperCase()=== "A"|| splited[2][1].toUpperCase()=== "A"){
        let sec = seconds.split("A")[0];
        return (splited[0]=="12")? `${zfill("0",2)}:${splited[1]}:${zfill(sec,2)}`: `${splited[0]}:${splited[1]}:${zfill(sec,2)}`;
    }
}

var x = timeConversion("12:40:22AM");
console.log(x)
var x = timeConversion("12:00:00AM");
console.log(x)
var x = timeConversion("12:05:39AM");
console.log(x)
console.log("***")
var y = timeConversion("12:01:10AM");
console.log(y)
var y = timeConversion("2:30:55AM");
console.log(y)
var y = timeConversion("10:20:5AM");
console.log(y)