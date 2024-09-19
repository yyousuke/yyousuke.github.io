day = new Date()
today = day.getDate()
year = day.getYear()
year = (year < 2000) ? year+1900 : year ;

day.setDate(1)
month = day.getMonth()
days = day.getDay()
leapy = day.getYear()%4
numdays = new Array(31,28,31,30,31,30,31,31,30,31,30,31)

if(leapy == 0){
  numdays[1] = 29
}

mon = (month+1 == 1) ? "Jan" : (month+1 == 2) ? "Feb" : (month+1 == 3) ? "Mar" :
(month+1 == 4) ? "Apr" : (month+1 == 5) ? "May" : (month+1 == 6) ?  "Jun" : (month+1 == 7) ?  "Jul" : (month+1 == 8) ?  "Aug" : (month+1 == 9) ?  "Sep" : (month+1 == 10) ?  "Oct" : (month+1 == 11) ?  "Nov" : "Dec" ;
document.write("<table border=\"1\">")
document.write("<tr align=\"center\"><th colspan=7>"+(mon)+" "+(year)+"</th></tr>")
document.write("<tr align=\"center\"><th><span style=\"COLOR:red\">S</span></th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th><span style=\"COLOR:blue\">S</span></th></tr>")


for(start = 1-days; start <= 31; start +=7){
document.write("<tr align=\"center\">")
    for(i = start; i < start + 7; i++){
         if((i > 0) && (i <= numdays[month])){
            if(i == today){
	       document.write("<td class=\"nowrap\"><b><span style=\"COLOR:green\">"+ i +"</span></b></td>")
            }else{
               document.write("<td class=\"nowrap\">"+ i +"</td>")
            }
         }else{
            document.write("<td></td>")
         }
    }
document.write("</tr>")
}

document.write("</table>")

