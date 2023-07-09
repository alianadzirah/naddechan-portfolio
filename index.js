/***********************************************
 * THIS IS DISABLE HIGHLIGHT TEXT SCRIPT
 * YOU CAN REMOVE THIS CODES IF YOU WANT
 * Credits http://www.dynamicdrive.com/
 ***********************************************/
//form tags to omit in NS6+:
var omitformtags = ["input", "textarea", "select"];
omitformtags = omitformtags.join("|");
function disableselect(e) {
  if (omitformtags.indexOf(e.target.tagName.toLowerCase()) == -1) return false;
}
function reEnable() {
  return true;
}
if (typeof document.onselectstart != "undefined")
  document.onselectstart = new Function("return false");
else {
  document.onmousedown = disableselect;
  document.onmouseup = reEnable;
}

    //By Dynamicdrive (renigade@nsimail.com)
    //For full source code, visit http://www.dynamicdrive.com
    var message="";
    ///////////////////////////////////
    function clickIE4(){
    if (event.button==2){return false;}}
    function clickNS4(e){
    if (document.layers||document.getElementById&&!document.all){
    if (e.which==2||e.which==3){return false;}}}
    if (document.layers){document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown=clickNS4;}
    else if (document.all&&!document.getElementById){document.onmousedown=clickIE4;}
    document.oncontextmenu=new Function("return false")

    $(function () {
      $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() != "0") {
          $(this).fadeIn("slow");
        }
        var scrollDiv = $(this);
        $(window).scroll(function () {
          if ($(window).scrollTop() == "0") {
            $(scrollDiv).fadeOut("slow");
          } else {
            $(scrollDiv).fadeIn("slow");
          }
        });
        $(this).click(function () {
          $("html, body").animate({ scrollTop: 0 }, "slow");
        });
      };
    });
    $(function () {
      $("#toTop").scrollToTop();
    });

    document.ondragstart = function () {
      return false;
    };