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

// RT data arrays - placeholder implementations
var RTX = [];

function LRTdata() {
    // Large cooling tower data - placeholder values
    RTX = [0, 50, 75, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1200, 1500, 2000, 2500];
}

function SRTdata() {
    // Small cooling tower data - placeholder values
    RTX = [0, 5, 7.5, 10, 12.5, 15, 17.5, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 120, 150, 200, 250];
}

function MRTdata() {
    // Medium cooling tower data - placeholder values
    RTX = [0, 50, 75, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1200, 1500, 2000, 2500];
}

function getMaxMin(Y) {
    // Placeholder function to get range max and min based on Y value
    // This should return [maxRange, minRange]
    // Simplified implementation
    var maxRange = 20;
    var minRange = 2;
    return [maxRange, minRange];
}

//... Find wet bulb line Find parameter1
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

  // Convert water flow from m³/hr to LPM (liters per minute)
  // 1 m³/hr = 1000 L/hr = 1000/60 LPM
  var TotalQinLPM = Qwlpm * 1000 / 60;

var TinCC = parseFloat(TwinC);
var ToutCC = parseFloat(TwoutC);
var TwbC = parseFloat(TwbC);


  if ((!Qwlpm)||(!TwinC)||(!TwoutC)||(!TwbC)) {
    alert('Please type in the data.');
    }

var Appr =Math.round( (ToutCC -TwbC)*100)/100;
var Range =Math.round( (TinCC - ToutCC)*100)/100;

  if(Qwlpm < 0.9){
 alNote = "Your water flow rate [" + Qwlpm + " m³/hr] is lower than the min. limit." ;
 alert(alNote );
 document.getElementById('result').innerHTML = alNote;
    return;
}

  if(Appr <= 0){
 alNote = "Your outlet temp. [" + ToutCC + "°C] can not be lower than wet bulb temp. " + TwbC + "°C" ;
 alert(alNote );
 document.getElementById('result').innerHTML = alNote;
    return;
}
  if(Range <= 1){
 alNote = "Your hot water Temp. [" + TinCC + "°C] can not be lower than outlet temp. " + ToutCC + "°C or Range lower than 2°C";
 alert(alNote );
 document.getElementById('result').innerHTML = alNote;
    return;
}

  if ((TinCC < 30.)||(TinCC > 57.)||(TwbC < 24)||(TwbC > 31)){
   alNote = "Your Twb [" + TwbC + "°C] is out of the limit data. Please correct the data.";
 alert(alNote );
 document.getElementById('result').innerHTML = alNote;
    return;
}
var THeatLoad =  Qwlpm*4.19*(TinCC - ToutCC)/3.6;

// CT selection
TwbC =Math.round(TwbC *100)/100;
var Range2 = TinCC - ToutCC;
//... Find wet bulb line Find parameter1 from function YQ1(TwbC, TinCC)
    Y = YQ1(TwbC, TinCC);

//... Find wet bulb line from function
    X = XQ2(Y, Range2);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   var NOTEB = ""
   var NOTEB2 = ""
        var TotalRTi = [];
            TotalRTi[0] = 0;
        var SumTRT = 0;
        var SumTinCi = 0;
   var AvgTRT = 0;
  if ((X < 0.)||(X > 18)){
//Find Range max min from function RangeMaxMin(Y, TinCC)
 var RangeMaxMin = getMaxMin(Y);
const RMax1 =  RangeMaxMin[0];
const RMin1 =  RangeMaxMin[1];  
      var NRange = RMax1 - RMin1;
     ii = 0;
     RCM = 1.;
// for NRange
   for (var i = 0 ; i <= (NRange); ++i) {
var Rangei = RMin1 + i;
var Rangeii =Math.abs(Range2 - Rangei);
var TinCi = TinCC - Rangei;
     if (Range2 < RMin1){TinCi = TinCC - Range2;
                                         RCM = -1.;}
    Yi = YQ1(TwbC, TinCi);
    Xi = XQ2(Yi, Rangeii);

//  if ((Xi > 0.)&&(Xi < 18))
  if ((Xi > 0.)&&(Xi < 18)){
//     alert( "TinCi = " + TinCi  +  "Rangeii = " + Rangeii + " x ="+Xi);
     ii = ii+1;
          X1 = Xi;
 Yi = -0.0000249715 * Math.pow(X1, 4) + 0.000978 * Math.pow(X1, 3) - 0.01135 * X1 * X1 - 0.64567 * X1 + 17.74358;
          Yi = Yi*6/100;
var TRTi = Math.round(TotalQinLPM/Yi);
//     alert( "i = " +ii +"TinCi = " + TinCi  +  "ToutCi = " + (TinCi - Rangeii) + " Twbi ="+TwbC + " RTi = "+ TRTi);
// NOTEB = NOTEB +"i = " +ii +"TinCi = " + TinCi  +  "ToutCi = " + (TinCi - Rangeii) + " Twbi ="+TwbC + " RTi = "+ TRTi+"<br>";
// second CT size
    Xii = XQ2(Y, Rangei);
          X1 = Xii;
 Yii = -0.0000249715 * Math.pow(X1, 4) + 0.000978 * Math.pow(X1, 3) - 0.01135 * X1 * X1 - 0.64567 * X1 + 17.74358;
          Yii = Yii*6/100;
var TRTii = Math.round(TotalQinLPM/Yii);

    TotalRTi[ii] = (TRTii +TRTi*RCM);
    SumTRT = TotalRTi[ii] + SumTRT;
    if (ToutCC < TinCi){SumTinCi = TinCi + SumTinCi;

}                                           
    else  {SumTinCi = TinCi + SumTinCi - Rangeii;

}
}
//  if ((Xi > 0.)&&(Xi < 18))
}
// for NRange
    AvgTRT = SumTRT/ii;
   SumTinCi = SumTinCi/ii;
   for (var i = 1 ; i <= (ii); ++i) {
  ERR = (Math.abs(TotalRTi[i] - AvgTRT)/AvgTRT)*100.
  ERR = Math.round(ERR*100.)/100.;
 AvgTRT = Math.round(AvgTRT*100.)/100.;

//   alert( "i = " + i  +  "TotalRT " + TotalRTi[i]  + " Avg. RT" + AvgTRT + " ERR % ="+ ERR);
// NOTEB = NOTEB +"TinCi = " + SumTinCi +"<br>";
    if (ERR > 24.){
      SumTRT = SumTRT - TotalRTi[i];
      ii = ii -1; 
    AvgTRT = SumTRT/ii;
    AvgTRT = Math.round(AvgTRT*100.)/100.;
                           }

// reject if ERR >24%
   }


}

          X1 = X;
 Y = -0.0000249715 * Math.pow(X1, 4) + 0.000978 * Math.pow(X1, 3) - 0.01135 * X1 * X1 - 0.64567 * X1 + 17.74358;
          Y = Y*6/100;
var TRT = Math.round(TotalQinLPM/Y);
 if (AvgTRT > 0) {TRT = AvgTRT;}
  var TotalRT = TRT


// CT selection
    LRTdata();
var RTMin = RTX[1];
 NEXT ="<a href=\CTSelectionChartL.html?TinCC="+TinCC+"&ToutCC="+ToutCC+"&TwbC="+TwbC+"&Qwlpm="+Qwlpm+"&TRT="+TRT+"&TinCi="+SumTinCi+"  target=_blank\>Print Chart</a>";
    if (TotalQinLPM < 90){ SRTdata();
                                               var RTMin = RTX[8];
NEXT ="<a href=\CTSelectionChartS.html?TinCC="+TinCC+"&ToutCC="+ToutCC+"&TwbC="+TwbC+"&Qwlpm="+Qwlpm+"&TRT="+TRT+"&TinCi="+SumTinCi+"  target=_blank\>Print Chart</a>";
                                             }
    else if (TotalQinLPM < 2100){ MRTdata();
                                               var RTMin = RTX[1];
NEXT ="<a href=\CTSelectionChartM.html?TinCC="+TinCC+"&ToutCC="+ToutCC+"&TwbC="+TwbC+"&Qwlpm="+Qwlpm+"&TRT="+TRT+"&TinCi="+SumTinCi+"  target=_blank\>Print Chart</a>";
                                             }

var RTMax = RTX[20];
var NRT = 1;
     if  (TRT > RTMax)
{
var NRT = TRT/RTMax;
}
    else if (TRT < RTMin)
{
var NRT = TRT/RTMin;
}
    else
{
var NRT = 1;
}
NRT = Math.round(NRT);
var TOTALRT = Math.round(TRT/NRT);
var k=0;
var RT=0;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 for (var j=NRT; j <36; ++j) {

    if (k>15){break;}
TOTALRT = Math.round(TRT/j); 
    if (TOTALRT+5<RTMin){break;}
for (var i=1; i <23; ++i) {
 if (RTX[i] >=  TOTALRT ) {
                   if (RT != RTX[i]) {
    k = k+1;
    RT=RTX[i];
      if (k==1){
    var selTOTALRT = Math.round(TRT/j);
     NRT=j;
                        }
    if (TRT>Math.round(RT*j)){k = k -1;
                                                    break;}
NOTEB2 = NOTEB2 + k +". " + RT +" RT x " +j+" CELLS = "+ Math.round(RT*j) +" RT"+"<br>";
//alert( k +". " + RT +" RT x " +j+" CELLS = "+ Math.round(RT*j) +" RT"+"<br>");
    break;

// if RT!=
} else {
//k=k-1;
break;}
}
} 
}

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

}); // 结束 DOMContentLoaded 事件监听器
