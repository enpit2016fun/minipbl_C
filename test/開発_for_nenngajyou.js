<script type="text/javascript">
    
weeks=new Array("日","月","火","水","木","金","土");
today=new Date();
y=today.getFullYear();
m=today.getMonth()+1;
d=today.getDate();
w=weeks[today.getDay()];
document.write("今日は、<span>",y,"<\/span>年");
document.write("<span>",m,"<\/span>月");
document.write("<span>",d,"<\/span>日");
document.write("<span>",w,"<\/span>曜日です。");

//十二支文字列テーブル
String etoTable[] = {"子", "丑", "寅", "卯", "辰", "巳",
                         "午", "未", "申", "酉", "戌", "亥"};
                        
//西暦４年が「子年」なので、西暦年に８を加算して１２の剰余をとる
int i = (year + 8) % 12;

if(i==1){
<!-- 子-->    
}
if(i==2){
<!-- 丑-->       
}
if(i==3){
<!-- 寅-->       
}
if(i==4){
<!-- 卯-->    
}
if(i==5){
<!-- 辰-->       
}
if(i==6){
<!-- 巳-->       
}
if(i==7){
<!-- 午-->    
}
if(i==8){
<!-- 未-->       
}
if(i==9){
<!-- 申-->       
}
if(i==10){
<!-- 酉-->    
}
if(i==11){
<!-- 戌-->       
}
if(i==12){
<!-- 亥-->       
}



</script>