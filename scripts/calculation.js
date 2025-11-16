// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('form');
const result = document.getElementById('result');
const QwlpmX = document.getElementById('QwlpmX');
const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const TwinCX = document.getElementById('TwinCX');
const TwoutCX = document.getElementById('TwoutCX');
const TwbCX = document.getElementById('TwbCX');

// Rules and close event handlers
if (rulesBtn) rulesBtn.addEventListener('click', () => rules.classList.add('show'));
if (closeBtn) closeBtn.addEventListener('click', () => rules.classList.remove('show'));


function getMaxMin(Y) {
    // Placeholder function to get range max and min based on Y value
    // This should return [maxRange, minRange]
    // Simplified implementation
    var maxRange = 20;
    var minRange = 2;
    return [maxRange, minRange];
}

function YQ1(TwbC, TinCC){
var Y;

     if (TwbC == 24)
{     
   Y = -0.7359 * TinCC + 40.607;      
}
      else if ((TwbC > 24) && (TwbC < 25))
{
        Y = -0.7359 * TinCC + 40.607
         Y = Y + ((-0.7417 * TinCC + 41.346) - Y) * (TwbC - 24);
}
      else if (TwbC == 25)
{
         Y = -0.7417 * TinCC + 41.346;
}
      else if ((TwbC > 25) && (TwbC < 26))
{
        Y = -0.7417 * TinCC + 41.346
         Y = Y + ((-0.7486 * TinCC + 42.009) - Y) * (TwbC - 25);
}
      else if (TwbC == 26)
{
         Y = -0.7486 * TinCC + 42.009;
}
      else if ((TwbC > 26) && (TwbC < 27))
{
        Y = -0.7486 * TinCC + 42.009
         Y = Y + ((-0.7573 * TinCC + 42.859) - Y) * (TwbC - 26);
}
      else if (TwbC == 27)
{
         Y = -0.7573 * TinCC + 42.859;
}
      else if ((TwbC > 27) && (TwbC < 28))
{

        Y = -0.7573 * TinCC + 42.859
         Y = Y + ((-0.7804 * TinCC + 44.361) - Y) * (TwbC - 27);
}
      else if (TwbC == 28)
{
         Y = -0.7804 * TinCC + 44.361;
}
      else if ((TwbC > 28) && (TwbC < 29))
{
        Y = -0.7804 * TinCC + 44.361
         Y = Y + ((-0.7905 * TinCC + 45.305) - Y) * (TwbC - 28);
}
      else if (TwbC == 29)
{
        Y = -0.7905 * TinCC + 45.305;
}
      else if ((TwbC > 29) && (TwbC < 30))
{
        Y = -0.7905 * TinCC + 45.305
         Y = Y + ((-0.8041 * TinCC + 46.346) - Y) * (TwbC - 29);
}
      else if (TwbC == 30)
{
        Y = -0.8041 * TinCC + 46.346;
}
      else if ((TwbC > 30) && (TwbC < 31))
{
        Y = -0.8041 * TinCC + 46.346
         Y = Y + ((-0.8216 * TinCC + 47.617) - Y) * (TwbC - 30);
}
      else if (TwbC == 31)
{
        Y = -0.8216 * TinCC + 47.617;
}
     return Y;
}
//... Find wet bulb line Find parameter1

//... Find wet bulb line
function XQ2(Y, Range2){
     if (Range2 <= 1){   X = -1.0;  }
      else if  (Range2 == 2)
{     
   X = -0.0837 * Y*Y + 11.279 * Y - 180.04;     

}
      else if ((Range2 > 2) && (Range2 < 3))
{
        X = -0.0837 * Y *Y + 11.279 * Y - 180.04;
        X = X + ((0.0586 * Y *Y + 4.1795 * Y - 86.46) - X) * (Range2 - 2);

}
      else if (Range2 == 3)
{     
   X = 0.0586 * Y *Y + 4.1795 * Y - 86.46;     
}
      else if ((Range2 > 3) && (Range2 < 4))
{
        X = 0.0586 * Y *Y + 4.1795 * Y - 86.46;
        X = X + ((0.0445 * Y *Y + 3.601 * Y - 64.005) - X) * (Range2 - 3);
}
      else if (Range2 == 4)
{     
   X = 0.0445 * Y *Y + 3.601 * Y - 64.005;     
}
      else if ((Range2 > 4) && (Range2 < 5))
{
        X = 0.0445 * Y *Y + 3.601 * Y - 64.005;
        X = X + ((-0.23 * Y *Y + 11.66 * Y - 115.33) - X) * (Range2 - 4);
}
      else if (Range2 == 5)
{     
   X = -0.23 * Y *Y + 11.66 * Y - 115.33;     
}
      else if ((Range2 > 5) && (Range2 < 6))
{
        X = -0.23 * Y *Y + 11.66 * Y - 115.33;
        X = X + ((-0.0393 * Y *Y + 4.8402 * Y - 51.339) - X) * (Range2 - 5);
}
      else if (Range2 == 6)
{     
   X = -0.0393 * Y *Y + 4.8402 * Y - 51.339;     
}
      else if ((Range2 > 6) && (Range2 < 7))
{
         X = -0.0393 * Y *Y + 4.8402 * Y - 51.339;
        X = X + ((-0.1193 * Y*Y + 6.459 * Y - 54.193) - X) * (Range2 - 6);
}
      else if (Range2 == 7)
{     
   X = -0.1193 * Y *Y + 6.459 * Y - 54.193;     
}
      else if ((Range2 > 7) && (Range2 < 8))
{
        X = -0.1193 * Y *Y + 6.459 * Y - 54.193;
        X = X + ((-0.1125 * Y *Y + 5.7337 * Y - 42.375) - X) * (Range2 - 7);
}
      else if (Range2 == 8)
{     
   X = -0.1125 * Y *Y + 5.7337 * Y - 42.375;     
}
      else if ((Range2 > 8) && (Range2 < 9))
{
        X = -0.1125 * Y *Y + 5.7337 * Y - 42.375;
        X = X + ((-0.0778 * Y *Y + 4.4644 * Y - 29.067) - X) * (Range2 - 8);
}
      else if (Range2 == 9)
{     
   X = -0.0778 * Y *Y + 4.4644 * Y - 29.067;     
}
      else if ((Range2 > 9) && (Range2 < 10))
{
        X = -0.0778 * Y *Y + 4.4644 * Y - 29.067;
        X = X + ((-0.0714 * Y *Y + 4.0357 * Y - 22.286) - X) * (Range2 - 9);
}
      else if (Range2 == 10)
{     
   X = -0.0714 * Y *Y + 4.0357 * Y - 22.286;     
}
      else if ((Range2 > 10) && (Range2 < 11))
{
        X = -0.0714 * Y *Y + 4.0357 * Y - 22.286;
        X = X + ((-0.0744 * Y *Y + 3.8839 * Y - 17.845) - X) * (Range2 - 10);
}
      else if (Range2 == 11)
{     
   X = -0.0744 * Y *Y + 3.8839 * Y - 17.845;     
}
      else if ((Range2 > 11) && (Range2 < 12))
{
         X = -0.0744 * Y*Y + 3.8839 * Y - 17.845;
        X = X + ((-0.0777 * Y *Y + 3.6158 * Y - 12.635) - X) * (Range2 - 11);
}
      else if (Range2 == 12)
{     
   X = -0.0777 * Y *Y + 3.6158 * Y - 12.635;     
}
      else if ((Range2 > 12) && (Range2 < 13))
{
           X = -0.0777 * Y *Y + 3.6158 * Y - 12.635;
        X = X + ((-0.0762 * Y *Y + 3.3607 * Y - 8.3506) - X) * (Range2 - 12);
}
      else if (Range2 == 13)
{     
   X = -0.0762 * Y *Y + 3.3607 * Y - 8.3506;     
}
      else if ((Range2 > 13) && (Range2 < 14))
{
        X = -0.0762 * Y *Y + 3.3607 * Y - 8.3506;
        X = X + ((-0.056 * Y *Y + 2.9536 * Y - 4.5333) - X) * (Range2 - 13);
}
      else if (Range2 == 14)
{     
   X = -0.056 * Y *Y+ 2.9536 * Y - 4.5333;     
}
      else if ((Range2 > 14) && (Range2 < 15))
{
        X = -0.056 * Y *Y + 2.9536 * Y - 4.5333;
        X = X + ((-0.0768 * Y *Y + 2.9935 * Y - 1.7875) - X) * (Range2 - 14);
}
      else if (Range2 == 15)
{     
   X = -0.0768 * Y*Y + 2.9935 * Y - 1.7875;     
}
      else if ((Range2 > 15) && (Range2 < 16))
{

         X = -0.0768 * Y *Y + 2.9935 * Y - 1.7875;
        X = X + ((-0.0711 * Y *Y + 2.6521 * Y + 1.7938) - X) * (Range2 - 15);
}
      else if (Range2 == 16)
{     
   X = -0.0711 * Y *Y + 2.6521 * Y + 1.7938;     
}
      else if ((Range2 > 16) && (Range2 < 17))
{
        X = -0.0711 * Y *Y + 2.6521 * Y + 1.7938;
        X = X + ((-0.0729 * Y *Y + 2.4717 * Y + 4.4063) - X) * (Range2 - 16);
}
      else if (Range2 == 17)
{     
   X = -0.0729 * Y *Y + 2.4717 * Y + 4.4063;     
}
      else if ((Range2 > 17) && (Range2 < 18))
{
        X = -0.0729 * Y *Y + 2.4717 * Y + 4.4063;
        X = X + ((-0.0804 * Y *Y + 2.3946 * Y + 6.6321) - X) * (Range2 - 17);
}
      else if (Range2 == 18)
{     
   X = -0.0804 * Y *Y + 2.3946 * Y + 6.6321;     
}
      else if ((Range2 > 18) && (Range2 < 19))
{

        X = -0.0804 * Y *Y + 2.3946 * Y + 6.6321;
        X = X + ((-0.0607 * Y *Y + 2.1664 * Y + 8.7071) - X) * (Range2 - 18);
}
      else if (Range2 == 19)
{     
   X = -0.0607 * Y *Y + 2.1664 * Y + 8.7071;     
}
      else if ((Range2 > 19) && (Range2 < 20))
{
        X = -0.0607 * Y *Y + 2.1664 * Y + 8.7071;
        X = X + ((-0.05 * Y *Y + 1.93 * Y + 10.78) - X) * (Range2 - 19);
}
      else if (Range2 == 20)
{     
   X = -0.05 * Y *Y + 1.93 * Y + 10.78;     
}
      else if ((Range2 > 20) && (Range2 < 21))
{

        X = -0.05 * Y *Y + 1.93 * Y + 10.78;
        X = X + ((-0.0625 * Y *Y + 1.9125 * Y + 12.538) - X) * (Range2 - 20);
}
      else if (Range2 == 21)
{     
   X = -0.0625 * Y *Y + 1.9125 * Y + 12.538;     
}
      else if ((Range2 > 21) && (Range2 < 22))
{
// X =fx(R21)+[fx(R22)-fx(R21)](Range-R21)
        X = -0.0625 * Y *Y + 1.9125 * Y + 12.538;
        X = X + ((-0.05 * Y *Y + 1.8 * Y + 14.25) - X) * (Range2 - 21);
}
      else if (Range2 == 22)
{     
   X = -0.05 * Y *Y + 1.8 * Y + 14.25;     
}

//  if ((X < 0.)||(X > 18)){
//    alert( "Your Temp. Range " + Range2  +  "C  is out of the limit data." );
//    context.stop();
//}
     return X;
}

//... Find wet bulb line
if (form) {
form.addEventListener('submit', e => {
  e.preventDefault();
  
  console.log('Form submitted');


  var Qwlpm = parseFloat(QwlpmX.value.trim());
  var TwinC = parseFloat(TwinCX.value.trim());
  var TwoutC = parseFloat(TwoutCX.value.trim());
  var TwbC = parseFloat(TwbCX.value.trim());

var TotalQinLPM = Qwlpm;

var TinCC = parseFloat(TwinC);
var ToutCC = parseFloat(TwoutC);
var TwbC = parseFloat(TwbC);

  if ((!Qwlpm)||(!TwinC)||(!TwoutC)||(!TwbC)) {
    alert('请输入有效数字');
    }

var Appr =Math.round( (ToutCC -TwbC)*100)/100;
var Range =Math.round( (TinCC - ToutCC)*100)/100;

  if(Qwlpm < 0.9){
 alNote = "你的循环水量 [" + Qwlpm + " m³/hr] 过低, 请修正数据 (最低0.9 m³/hr)" ;
 alert(alNote);
 document.getElementById('result').innerHTML = alNote;
    return;
}

  if(Appr <= 0){
 alNote = "你的出口温度 [" + ToutCC + "°C] 不能低于湿球温度 " + TwbC + "°C" ;
 alert(alNote);
 document.getElementById('result').innerHTML = alNote;
    return;
}
  if(Range <= 1){
 alNote = "你的热水温度 [" + TinCC + "°C] 不能低于出口温度 " + ToutCC + "°C 或者温差低于 2°C";
 alert(alNote);
 document.getElementById('result').innerHTML = alNote;
    return;
}

  if ((TinCC < 30.)||(TinCC > 57.)||(TwbC < 24)||(TwbC > 31)){
   alNote = "你的湿球温度 [" + TwbC + "°C] 超出数据范围。请修正数据。";
 alert(alNote );
 document.getElementById('result').innerHTML = alNote;
    return;
}
var THeatLoad =  Qwlpm*4.19*(TinCC - ToutCC)/3.6;

// CT selection
TwbC =Math.round(TwbC *100)/100;
var Range2 = TinCC - ToutCC;
    Y = YQ1(TwbC, TinCC);
    X = XQ2(Y, Range2);
          X1 = X;
 Y = -0.0000249715 * Math.pow(X1, 4) + 0.000978 * Math.pow(X1, 3) - 0.01135 * X1 * X1 - 0.64567 * X1 + 17.74358;
          Y = Y*6/100;
var TRT = Math.round(TotalQinLPM/Y);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 确保变量有值
if (typeof THeatLoad === 'undefined' || isNaN(THeatLoad)) {
    THeatLoad = 0;
}
if (typeof TRT === 'undefined' || isNaN(TRT)) {
    TRT = 0;
}

// 显示结果
if (result) {
    result.innerHTML = `
        <div style="padding: 20px;">
            <p style="font-size: 18px; margin-bottom: 20px; color: #2c3e50;"><strong>总热负荷: </strong><span style="color: #3498db; font-size: 20px;">${Math.round(THeatLoad*100)/100} kW</span></p>
            
            <p style="font-size: 18px; margin-bottom: 20px; color: #2c3e50;"><strong>冷却塔容量: </strong><span style="color: #3498db; font-size: 20px;">${TRT} RT</span></p>
        </div>`;
} else {
    console.error('Result element not found!');
}

});
} else {
    console.error('Form element not found!');
}

}); 
