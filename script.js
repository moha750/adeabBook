 var loader = document.getElementById("preloader");

 window.addEventListener("load", function(){
   loader.style.display = "none";
});

var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++)
    {
      var page = pages[i];
      if (i % 2 === 0)
        {
          page.style.zIndex = (pages.length - i);
        }
    }

  document.addEventListener('DOMContentLoaded', function(){
    for(var i = 0; i < pages.length; i++)
      {
        //Or var page = pages[i];
        pages[i].pageNum = i + 1;
        pages[i].onclick=function()
          {
            if (this.pageNum % 2 === 0)
              {
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
              }
            else
              {
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
              }
           }
        }
  })


// header ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var
  words = [
  'أهلا بكم في نادي أدِيب',
  'نضع بين أيديكم كُتيب التقرير السنوي',
  'لِنادي أدِيب بِنسخته الإلكترونية',
  'مُشاهدة مُمتعة',

],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 10,
  speed = 100;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
    	$('.word').text(part);
  },speed);
};

$(document).ready(function(){
  wordflick();
});












$("#click").click(function() {
  Swal.fire({
    title: '!!!صدناااك',
    text: 'الكُتيب لسى ماخلص شلون تحمله فهمني؟',
    imageUrl: 'https://media2.giphy.com/media/oPu2IgQHwb3Qk/giphy.gif?cid=ecf05e47p4zmoczpndkw4ctq01vz3alicsep6i6o9alxh954&ep=v1_gifs_related&rid=giphy.gif&ct=g',
    imageWidth: 330,
    imageHeight: 330,
    imageAlt: 'Custom image',
    confirmButtonText: 'اوميقاد ي إللهي'
  });
});



