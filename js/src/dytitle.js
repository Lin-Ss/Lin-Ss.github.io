//崩溃欺骗

var OriginTitile = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/cat.png");
         document.title = ' ╭(°A°`)╮ 页面崩溃啦 ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/cat.png");
         document.title = ' (ฅ>ω<*ฅ) 噫又好了~ ' + OriginTitile;
         titleTime = setTimeout(function () {
             document.title = OriginTitile;
         }, 2000);
     }
 });

//作者：luosv
//链接：https://www.jianshu.com/p/e8e5addbbcfd
//來源：简书
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。