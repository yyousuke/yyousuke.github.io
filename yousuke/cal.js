day = new Date()
today = day.getDate()
year = day.getYear()
year = (year < 2000) ? year+1900 : year ;
hour = day.getHours()
min = day.getMinutes()

day.setDate(1)
month = day.getMonth()
days = day.getDay()
leapy = day.getYear()%4
numdays = new Array(31,28,31,30,31,30,31,31,30,31,30,31)

if(leapy == 0){
  numdays[1] = 29
}

document.write("<table border=\"1\">")
document.write("<tr align=\"center\"><th colspan=7>"+(year)+"年"+(month+1)+"月</th></tr>")
document.write("<tr align=\"center\"><th><font color=\"#ff0000\">日</a></th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th><font color=\"#0000ff\">土</a></th></tr>")


for(start = 1-days; start <= 31; start +=7){
document.write("<tr align=\"center\">")
    for(i = start; i < start + 7; i++){
         if((i > 0) && (i <= numdays[month])){
            if(i == today){
	       document.write("<td><b><font color=\"green\">"+ i +"</font></b></td>")
            }else{
               document.write("<td>"+ i +"</td>")
            }
         }else{
            document.write("<td></td>")
         }
    }
}

document.write("</table>")
