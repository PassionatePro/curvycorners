var isIE=navigator.userAgent.toLowerCase().indexOf("msie")>-1;var isMoz=document.implementation&&document.implementation.createDocument;var isSafari=((navigator.userAgent.toLowerCase().indexOf("safari")!=-1))?true:false;var BackCompat=document.compatMode.indexOf("BackCompat")>-1;var isOp=window.opera?1:0;function init(){if(arguments.callee.done){return}arguments.callee.done=true;if(_timer){clearInterval(_timer)}styleit()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",init,false);
/*@cc_on @*/
/*@if (@_win32)
    document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
    var script = document.getElementById("__ie_onload");
    script.onreadystatechange = function() {
      if (this.readyState == "complete") {
        init(); // call the onload handler
      }
    };
  /*@end @*/
}if(/WebKit/i.test(navigator.userAgent)){var _timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){init()}},10)}window.onload=init;function styleit(){if(isIE){for(var I=0;I<document.styleSheets.length;I++){for(var G=0;G<document.styleSheets[I].rules.length;G++){var A=document.styleSheets[I].rules[G].style.CCborderRadius||0;var B=document.styleSheets[I].rules[G].style.CCborderRadiusTR||A;var F=document.styleSheets[I].rules[G].style.CCborderRadiusTL||A;var E=document.styleSheets[I].rules[G].style.CCborderRadiusBR||A;var H=document.styleSheets[I].rules[G].style.CCborderRadiusBL||A;if(A||B||B||E||H){var J=document.styleSheets[I].rules[G].selectorText;var D={tl:{radius:makeInt(F)},tr:{radius:makeInt(B)},bl:{radius:makeInt(H)},br:{radius:makeInt(E)},antiAlias:true,autoPad:true,validTags:["div"]};var C=new curvyCorners(D,replace(J,".",""));C.applyCornersToAll()}}}}}function makeInt(B){var D=new RegExp("([0-9]*)");var C=0;if(isNaN(B)){var A=D.exec(B);if(!isNaN(parseInt(A[1]))){C=A[1]}}else{C=B}return C}function right(B,A){return B.substr(B.length-A)}function left(B,A){return B.substr(0,A)}function reverse(C){var B="";var A=C.length;while(A>0){B+=C.substring(A-1,A);A--}return B}function replace(B,A,C){return B.replace(A,C)}function replaceall(C,B,A){while(C.indexOf(B)!=-1){C=C.replace(B,A)}return C}function middle(C,B,A){return C.substring(B-1,A)}function chopleft(C,B){var A="";if(C.search(B)<0){A=C}else{A=C.substring(C.search(B))}return A}function chopright(C,B){var A="";if(C.search(B)<0){A=C}else{A=C.substring(0,C.search(B))}return A}function ifTop(A,B){if(A.settings.tl||A.settings.tr){return B}else{return 0}}function ifBot(A,B){if(A.settings.bl||A.settings.br){return B}else{return 0}}function curvyCorners(){if(typeof(arguments[0])!="object"){throw newCurvyError("First parameter of curvyCorners() must be an object.")}if(typeof(arguments[1])!="object"&&typeof(arguments[1])!="string"){throw newCurvyError("Second parameter of curvyCorners() must be an object or a class name.")}if(typeof(arguments[1])=="string"){var G=0;var A=getElementsByClass(arguments[1])}else{var G=1;var A=arguments}var D=new Array();if(arguments[0].validTags){var F=arguments[0].validTags}else{var F=["div"]}for(var C=G,B=A.length;C<B;C++){var E=A[C].tagName.toLowerCase();if(inArray(F,E)!==false){if(!(A[C].style.IEborderRadius=="set")){A[C].style.IEborderRadius="set";D[D.length]=new curvyObject(arguments[0],A[C])}}}this.objects=D;this.applyCornersToAll=function(){for(var H=0,I=this.objects.length;H<I;H++){this.objects[H].applyCorners()}}}function curvyObject(){this.box=arguments[1];this.settings=arguments[0];this.topContainer=null;this.bottomContainer=null;this.shell=null;this.masterCorners=new Array();this.contentDIV=null;if(this.settings.tl.radius===false){this.settings.tl.radius=0}if(this.settings.tr.radius===false){this.settings.tr.radius=0}if(this.settings.bl.radius===false){this.settings.bl.radius=0}if(this.settings.br.radius===false){this.settings.br.radius=0}var U=get_style(this.box.parentNode,"height","height");if(typeof U=="undefined"){U="auto"}var K=get_style(this.box,"height","height");if(typeof K=="undefined"){K="auto"}if(isIE){var O=this.box.offsetWidth}else{var O=get_style(this.box,"width","width")}var f=get_style(this.box,"borderTopWidth","border-top-width");var N=get_style(this.box,"borderBottomWidth","border-bottom-width");var E=get_style(this.box.parentNode,"borderTopWidth","border-top-width");var H=get_style(this.box.parentNode,"borderBottomWidth","border-bottom-width");var F=get_style(this.box,"borderLeftWidth","border-left-width");var C=get_style(this.box,"borderRightWidth","border-right-width");var M=get_style(this.box,"borderTopColor","border-top-color");var I=get_style(this.box,"borderBottomColor","border-bottom-color");var B=get_style(this.box,"borderLeftColor","border-left-color");var e=get_style(this.box,"borderRightColor","border-right-color");var G=get_style(this.box,"backgroundColor","background-color");var D=get_style(this.box,"backgroundImage","background-image");var a=get_style(this.box,"backgroundRepeat","background-repeat");var X=get_style(this.box,"backgroundPositionX","background-position-x");var V=get_style(this.box,"backgroundPositionY","background-position-y");var T=get_style(this.box,"position","position");var S=get_style(this.box,"paddingTop","padding-top");var c=get_style(this.box,"paddingTop","padding-top");var g=get_style(this.box,"paddingBottom","padding-Bottom");var R=get_style(this.box.parentNode,"paddingTop","padding-top");var Z=get_style(this.box.parentNode,"paddingBottom","padding-Bottom");var W=get_style(this.box,"paddingLeft","padding-Left");var d=get_style(this.box,"paddingRight","padding-Right");var Y=get_style(this.box,"border","border");var A=get_style(this.box,"marginTop","margin-top");var J=get_style(this.box,"marginBottom","margin-bottom");var L=Math.max(this.settings.tl?this.settings.tl.radius:0,this.settings.tr?this.settings.tr.radius:0);var Q=Math.max(this.settings.bl?this.settings.bl.radius:0,this.settings.br?this.settings.br.radius:0);this.boxHeightP=parseInt(((U!=""&&U!="auto"&&U.indexOf("%")==-1)?U.substring(0,U.indexOf("px")):this.box.parentNode.offsetHeight));this.boxHeight=parseInt(((K!=""&&K!="auto"&&K.indexOf("%")==-1)?K.substring(0,K.indexOf("px")):this.box.offsetHeight));if(!isIE){this.boxWidth=parseInt(((O!=""&&O!="auto"&&O.indexOf("%")==-1)?O.substring(0,O.indexOf("px")):this.box.offsetWidth))}else{this.boxWidth=O}this.borderWidth=parseInt(((f!=""&&f.indexOf("px")!==-1)?f.slice(0,f.indexOf("px")):0));this.borderWidthB=parseInt(((N!=""&&N.indexOf("px")!==-1)?N.slice(0,N.indexOf("px")):0));this.borderWidthP=parseInt(((E!=""&&E.indexOf("px")!==-1)?E.slice(0,E.indexOf("px")):0));this.borderWidthBP=parseInt(((H!=""&&H.indexOf("px")!==-1)?H.slice(0,H.indexOf("px")):0));this.borderWidthL=parseInt(((F!=""&&F.indexOf("px")!==-1)?F.slice(0,F.indexOf("px")):0));this.borderWidthR=parseInt(((C!=""&&C.indexOf("px")!==-1)?C.slice(0,C.indexOf("px")):0));this.boxColour=format_colour(G);this.boxColourO=G;this.boxPadding=parseInt(((S!=""&&S.indexOf("px")!==-1)?S.slice(0,S.indexOf("px")):0));this.topPadding=parseInt(((c!=""&&c.indexOf("px")!==-1)?c.slice(0,c.indexOf("px")):0));this.bottomPadding=parseInt(((g!=""&&g.indexOf("px")!==-1)?g.slice(0,g.indexOf("px")):0));this.topPaddingP=parseInt(((R!=""&&R.indexOf("px")!==-1)?R.slice(0,R.indexOf("px")):0));this.bottomPaddingP=parseInt(((Z!=""&&Z.indexOf("px")!==-1)?Z.slice(0,Z.indexOf("px")):0));this.leftPadding=parseInt(((W!=""&&W.indexOf("px")!==-1)?W.slice(0,W.indexOf("px")):0));this.rightPadding=parseInt(((d!=""&&d.indexOf("px")!==-1)?d.slice(0,d.indexOf("px")):0));this.borderColour=format_colour(M);this.borderColourB=format_colour(I);this.borderColourL=format_colour(B);this.borderColourR=format_colour(e);this.borderString=this.borderWidth+"px solid "+this.borderColour;this.borderStringB=this.borderWidthB+"px solid "+this.borderColourB;this.backgroundImage=((D!="none")?D:"");this.backgroundRepeat=a;this.backgroundPosX=parseInt(((X!=""&&X.indexOf("px")!==-1)?X.slice(0,X.indexOf("px")):0));this.backgroundPosY=parseInt(((V!=""&&V.indexOf("px")!==-1)?V.slice(0,V.indexOf("px")):0));this.boxContent=this.box.innerHTML;this.topMargin=parseInt(((A!=""&&A.indexOf("px")!==-1)?A.slice(0,A.indexOf("px")):0));this.bottomMargin=parseInt(((J!=""&&J.indexOf("px")!==-1)?J.slice(0,J.indexOf("px")):0));this.box.innerHTML="";if(T!="absolute"){this.box.style.position="relative"}this.box.style.padding="0";this.box.style.border="none";this.box.style.backgroundColor="transparent";this.box.style.backgroundImage="none";if(isIE){if(BackCompat){this.box.style.width=parseInt(this.boxWidth)+"px";this.box.style.height=parseInt(this.boxHeight)+"px"}else{this.box.style.width=parseInt(this.boxWidth)+"px";this.box.style.height=parseInt(this.boxHeight)+"px"}}else{this.box.style.width=parseInt(this.boxWidth+this.leftPadding+this.rightPadding+this.borderWidthL+this.borderWidthR)+"px";this.box.style.height=parseInt(this.boxHeight+this.topPadding+this.bottomPadding+this.borderWidth+this.borderWidthB)+"px"}if(isIE){if(BackCompat){var P=document.createElement("DIV");P.style.width=parseInt(this.boxWidth)+"px";P.style.height=parseInt(this.boxHeight-L-Q)+"px"}else{var P=document.createElement("DIV");P.style.width=parseInt(this.boxWidth-this.borderWidthL-this.borderWidthR)+"px";var b=this.boxHeight-L-Q;if(b<0){b=0}P.style.height=parseInt(b)+"px"}}else{var P=document.createElement("DIV");P.style.width=parseInt(this.boxWidth+this.leftPadding+this.rightPadding)+"px";P.style.height=parseInt(this.boxHeight+this.topPadding+this.bottomPadding+this.borderWidth+this.borderWidthB-L-Q)+"px"}P.style.position="relative";P.style.padding="0";P.style.top=parseInt(L-this.borderWidth)+"px";P.style.left="0";P.style.border=parseInt(this.borderWidthL)+"px solid "+this.borderColourL;P.style.borderTopColor="transparent";P.style.borderBottomColor="transparent";P.style.backgroundColor=this.boxColourO;P.style.backgroundImage=this.backgroundImage;this.shell=this.box.appendChild(P);var O=get_style(this.shell,"width","width");this.boxWidth=parseInt(((O!=""&&O!="auto"&&O.indexOf("%")==-1)?O.substring(0,O.indexOf("px")):this.shell.offsetWidth));this.applyCorners=function(){for(var AB=0;AB<2;AB++){switch(AB){case 0:if(this.settings.tl||this.settings.tr){var y=document.createElement("DIV");if(isIE){y.style.width=parseInt(this.boxWidth)+"px"}else{y.style.width=parseInt(this.boxWidth)+"px"}y.style.fontSize="1px";y.style.overflow="hidden";y.style.position="absolute";y.style.paddingLeft=this.borderWidth+"px";y.style.paddingRight=this.borderWidth+"px";y.style.height=L+"px";y.style.top=parseInt(0-L)+"px";y.style.left=0-this.borderWidthL+"px";y.setAttribute("id","cctopcontainer");this.topContainer=this.shell.appendChild(y)}break;case 1:if(this.settings.bl||this.settings.br){var y=document.createElement("DIV");if(isIE){y.style.width=parseInt(this.boxWidth)+"px"}else{y.style.width=parseInt(this.boxWidth)+"px"}y.style.fontSize="1px";y.style.overflow="hidden";y.style.position="absolute";y.style.paddingLeft=this.borderWidthB+"px";y.style.paddingRight=this.borderWidthB+"px";y.style.height=parseInt(Q)+"px";y.style.bottom=parseInt(0-Q)+"px";y.style.left=parseInt(0-this.borderWidthL)+"px";y.setAttribute("id","ccbottomcontainer");this.bottomContainer=this.shell.appendChild(y)}break}}var AG=["tr","tl","br","bl"];for(var AL=0;AL<AG.length;AL++){if(AL>-1<4){var AE=AG[AL];if(AE=="tr"||AE=="tl"){var AF=this.borderWidth;var AH=this.borderColour}else{var AF=this.borderWidthB;var AH=this.borderColourB}var x=document.createElement("DIV");x.style.height=this.settings[AE].radius+"px";x.style.width=this.settings[AE].radius+"px";x.style.position="absolute";x.style.fontSize="1px";x.style.overflow="hidden";var o=parseInt(this.settings[AE].radius-this.borderWidth);for(var v=0,AK=this.settings[AE].radius;v<AK;v++){if((v+1)>=o){var q=-1}else{var q=(Math.floor(Math.sqrt(Math.pow(o,2)-Math.pow((v+1),2)))-1)}if(o!=AK){if((v)>=o){var n=-1}else{var n=Math.ceil(Math.sqrt(Math.pow(o,2)-Math.pow(v,2)))}if((v+1)>=AK){var l=-1}else{var l=(Math.floor(Math.sqrt(Math.pow(AK,2)-Math.pow((v+1),2)))-1)}}if((v)>=AK){var h=-1}else{var h=Math.ceil(Math.sqrt(Math.pow(AK,2)-Math.pow(v,2)))}if(q>-1){this.drawPixel(v,0,this.boxColour,100,(q+1),x,-1,this.settings[AE].radius)}if(o!=AK){for(var u=(q+1);u<n;u++){if(this.settings.antiAlias){if(this.backgroundImage!=""){var m=(pixelFraction(v,u,o)*100);if(m<30){this.drawPixel(v,u,AH,100,1,x,0,this.settings[AE].radius)}else{this.drawPixel(v,u,AH,100,1,x,-1,this.settings[AE].radius)}}else{var AD=BlendColour(this.boxColour,AH,pixelFraction(v,u,o));this.drawPixel(v,u,AD,100,1,x,0,this.settings[AE].radius,AE)}}}if(this.settings.antiAlias){if(l>=n){if(n==-1){n=0}this.drawPixel(v,n,AH,100,(l-n+1),x,0,0)}}else{if(l>=q){this.drawPixel(v,(q+1),AH,100,(l-q),x,0,0)}}var s=AH}else{var s=this.boxColour;var l=q}if(this.settings.antiAlias){for(var u=(l+1);u<h;u++){this.drawPixel(v,u,s,(pixelFraction(v,u,AK)*100),1,x,((this.borderWidth>0)?0:-1),this.settings[AE].radius)}}}this.masterCorners[this.settings[AE].radius]=x.cloneNode(true);for(var AB=0,AJ=x.childNodes.length;AB<AJ;AB++){var w=x.childNodes[AB];var AI=parseInt(w.style.top.substring(0,w.style.top.indexOf("px")));var AN=parseInt(w.style.left.substring(0,w.style.left.indexOf("px")));var AP=parseInt(w.style.height.substring(0,w.style.height.indexOf("px")));if(AE=="tl"||AE=="bl"){w.style.left=this.settings[AE].radius-AN-1+"px"}if(AE=="tr"||AE=="tl"){w.style.top=this.settings[AE].radius-AP-AI+"px"}w.style.backgroundRepeat=this.backgroundRepeat;switch(AE){case"tr":if(isIE&&BackCompat){w.style.backgroundPosition=parseInt(this.backgroundPosX-Math.abs(0-this.borderWidthL+this.boxWidth-this.settings[AE].radius+AN))+"px "+parseInt(this.backgroundPosY-Math.abs(this.settings[AE].radius-AP-AI-this.borderWidth))+"px"}else{w.style.backgroundPosition=parseInt(this.backgroundPosX-Math.abs(this.borderWidthR-this.borderWidthL+(this.boxWidth-this.settings[AE].radius+this.borderWidthR)+AN))+"px "+parseInt(this.backgroundPosY-Math.abs(this.settings[AE].radius-AP-AI-this.borderWidth))+"px"}break;case"tl":w.style.backgroundPosition=parseInt(this.backgroundPosX-Math.abs((this.settings[AE].radius-AN-1)-this.borderWidthL))+"px "+parseInt(this.backgroundPosY-Math.abs(this.settings[AE].radius-AP-AI-this.borderWidth))+"px";break;case"bl":if(isIE){w.style.backgroundPosition=parseInt(this.backgroundPosX-Math.abs((this.settings[AE].radius-AN-1)-this.borderWidthL))+"px "+parseInt(this.backgroundPosY-Math.abs((this.boxHeight+(this.borderWidth-this.topPadding-1)-this.settings[AE].radius+AI)))+"px"}else{w.style.backgroundPosition=parseInt(this.backgroundPosX-Math.abs((this.settings[AE].radius-AN-1)-this.borderWidthL))+"px "+parseInt(this.backgroundPosY-Math.abs((this.boxHeight+(this.borderWidth+this.topPadding+this.bottomPadding)-this.settings[AE].radius+AI)))+"px"}break;case"br":if(isIE){w.style.backgroundPosition=parseInt(this.backgroundPosX-Math.abs(1+this.leftPadding-this.borderWidthL+this.boxWidth-this.settings[AE].radius+AN))+"px "+parseInt(this.backgroundPosY-Math.abs((this.boxHeight+(this.borderWidth-this.topPadding-1)-this.settings[AE].radius+AI)))+"px"}else{w.style.backgroundPosition=parseInt(this.backgroundPosX-Math.abs(this.borderWidthR-this.borderWidthL+(this.boxWidth-this.settings[AE].radius+this.borderWidthR)+AN))+"px "+parseInt(this.backgroundPosY-Math.abs((this.boxHeight+(this.borderWidth+this.topPadding+this.bottomPadding)-this.settings[AE].radius+AI)))+"px"}break}}switch(AE){case"tl":if(x.style.position=="absolute"){x.style.top="0px"}if(x.style.position=="absolute"){x.style.left="0px"}if(this.topContainer){b=this.topContainer.appendChild(x)}b.setAttribute("id","cctl");break;case"tr":if(x.style.position=="absolute"){x.style.top="0px"}if(x.style.position=="absolute"){x.style.right="0px"}if(this.topContainer){b=this.topContainer.appendChild(x)}b.setAttribute("id","cctr");break;case"bl":if(x.style.position=="absolute"){x.style.bottom="0px"}if(x.style.position=="absolute"){x.style.left="0px"}if(this.bottomContainer){b=this.bottomContainer.appendChild(x)}b.setAttribute("id","ccbl");break;case"br":if(x.style.position=="absolute"){x.style.bottom="0px"}if(x.style.position=="absolute"){x.style.right="0px"}if(this.bottomContainer){b=this.bottomContainer.appendChild(x)}b.setAttribute("id","ccbr");break}}}var AA=new Array();AA.t=Math.abs(this.settings.tl.radius-this.settings.tr.radius);AA.b=Math.abs(this.settings.bl.radius-this.settings.br.radius);for(z in AA){if(z=="t"||z=="b"){if(AA[z]){var AM=((this.settings[z+"l"].radius<this.settings[z+"r"].radius)?z+"l":z+"r");var p=document.createElement("DIV");p.style.height=AA[z]+"px";p.style.width=this.settings[AM].radius+"px";p.style.position="absolute";p.style.fontSize="1px";p.style.overflow="hidden";p.style.backgroundColor=this.boxColour;switch(AM){case"tl":p.style.bottom="0px";p.style.left="0px";p.style.borderLeft=this.borderString;b=this.topContainer.appendChild(p);b.id="cctlfiller";break;case"tr":p.style.bottom="0px";p.style.right="0px";p.style.borderRight=this.borderString;b=this.topContainer.appendChild(p);b.id="cctrfiller";break;case"bl":p.style.top="0px";p.style.left="0px";p.style.borderLeft=this.borderStringB;b=this.bottomContainer.appendChild(p);b.id="ccblfiller";break;case"br":p.style.top="0px";p.style.right="0px";p.style.borderRight=this.borderStringB;b=this.bottomContainer.appendChild(p);b.id="ccbrfiller";break}}var r=document.createElement("DIV");r.style.position="relative";r.style.fontSize="1px";r.style.overflow="hidden";r.style.backgroundColor=this.boxColour;r.style.backgroundImage=this.backgroundImage;r.style.backgroundRepeat=this.backgroundRepeat;switch(z){case"t":if(this.topContainer){if(this.settings.tl.radius||this.settings.tr.radius){if(BackCompat){r.style.height=100+L+"px"}else{r.style.height=100+L-this.borderWidth+"px"}r.style.marginLeft=this.settings.tl.radius-this.borderWidthL+"px";r.style.marginRight=this.settings.tr.radius-this.borderWidthR+"px";r.style.borderTop=this.borderString;if(this.settings.tl.radius){if(this.backgroundImage!=""){r.style.backgroundPosition=parseInt(this.backgroundPosX-(L-this.borderWidthL))+"px "+parseInt(this.backgroundPosY)+"px"}}else{if(this.backgroundImage!=""){r.style.backgroundPosition=parseInt(this.backgroundPosX-this.borderWidthL)+"px "+parseInt(this.backgroundPosY)+"px"}}b=this.topContainer.appendChild(r);b.setAttribute("id","cctopmiddlefiller");this.shell.style.backgroundPosition=parseInt(this.backgroundPosX)+"px "+parseInt(this.backgroundPosY-(L-this.borderWidthL))+"px"}}break;case"b":if(this.bottomContainer){if(this.settings.bl.radius||this.settings.br.radius){if(BackCompat&&isIE){r.style.height=Q+"px"}else{r.style.height=Q-this.borderWidth+"px"}r.style.marginLeft=this.settings.bl.radius-this.borderWidth+"px";r.style.marginRight=this.settings.br.radius-this.borderWidth+"px";r.style.borderBottom=this.borderStringB;if(isIE){if(BackCompat){if(this.backgroundImage!=""){r.style.backgroundPosition=parseInt(this.backgroundPosX-(Q-this.borderWidthL))+"px "+parseInt(this.backgroundPosY-(this.boxHeight+this.borderWidth-Q))+"px"}}else{if(this.backgroundImage!=""){r.style.backgroundPosition=parseInt(this.backgroundPosX-(Q-this.borderWidthL))+"px "+parseInt((1+this.topPadding)+this.backgroundPosY-(this.boxHeight+this.borderWidth-Q))+"px"}}}else{if(this.backgroundImage!=""){if(this.settings.bl.radius){r.style.backgroundPosition=parseInt(this.backgroundPosX-(Q-this.borderWidthL))+"px "+parseInt(this.backgroundPosY-(this.boxHeight+this.topPadding+this.borderWidth+this.bottomPadding-Q))+"px"}else{r.style.backgroundPosition=parseInt(this.backgroundPosX-this.borderWidthL)+"px "+parseInt(this.backgroundPosY-(this.boxHeight+this.topPadding+this.borderWidth+this.bottomPadding-Q))+"px"}}}b=this.bottomContainer.appendChild(r);b.setAttribute("id","ccbottommiddlefiller")}}break}}}var AC=document.createElement("DIV");if(isIE){var AR=0}else{var AR=0}AC.style.position="absolute";AC.innerHTML=this.boxContent;AC.className="autoPadDiv";var AO=Math.abs(this.borderWidth+this.boxPadding);var AQ=Math.abs(this.borderWidthB+this.boxPadding);if(L<this.boxPadding){AC.style.paddingTop=parseInt(AR+AO)+"px"}else{AC.style.paddingTop="0";AC.style.top=parseInt(AR+AO)+"px"}if(Q<this.boxPadding){AC.style.paddingBottom=parseInt(AQ-Q)+"px"}else{AC.style.paddingBottom="0"}AC.style.paddingLeft=parseInt(this.borderWidthL+this.leftPadding)+"px";AC.style.paddingRight=this.rightPadding+"px";this.contentDIV=this.box.appendChild(AC)};this.drawPixel=function(s,p,h,o,q,r,l,n){var k=document.createElement("DIV");k.style.height=q+"px";k.style.width="1px";k.style.position="absolute";k.style.fontSize="1px";k.style.overflow="hidden";var m=Math.max(this.settings.tr.radius,this.settings.tl.radius);if(l==-1&&this.backgroundImage!=""){k.style.backgroundColor=h;k.style.backgroundImage=this.backgroundImage;k.style.backgroundPosition="-"+(this.boxWidth-(n-s)+this.borderWidth)+"px -"+((this.boxHeight+m+p)-this.borderWidth)+"px"}else{k.style.backgroundColor=h}if(o!=100){setOpacity(k,o)}k.style.top=p+"px";k.style.left=s+"px";r.appendChild(k)}}function insertAfter(B,C,A){B.insertBefore(C,A.nextSibling)}function BlendColour(L,J,G){var D=parseInt(L.substr(1,2),16);var K=parseInt(L.substr(3,2),16);var F=parseInt(L.substr(5,2),16);var C=parseInt(J.substr(1,2),16);var I=parseInt(J.substr(3,2),16);var E=parseInt(J.substr(5,2),16);if(G>1||G<0){G=1}var H=Math.round((D*G)+(C*(1-G)));if(H>255){H=255}if(H<0){H=0}var B=Math.round((K*G)+(I*(1-G)));if(B>255){B=255}if(B<0){B=0}var A=Math.round((F*G)+(E*(1-G)));if(A>255){A=255}if(A<0){A=0}return"#"+IntToHex(H)+IntToHex(B)+IntToHex(A)}function IntToHex(A){rem=A%16;base=Math.floor(A/16);baseS=MakeHex(base);remS=MakeHex(rem);return baseS+""+remS}function MakeHex(A){if((A>=0)&&(A<=9)){return A}else{switch(A){case 10:return"A";case 11:return"B";case 12:return"C";case 13:return"D";case 14:return"E";case 15:return"F"}}}function pixelFraction(H,G,A){var C=0;var B=new Array(1);var F=new Array(1);var I=0;var D="";var E=Math.sqrt((Math.pow(A,2)-Math.pow(H,2)));if((E>=G)&&(E<(G+1))){D="Left";B[I]=0;F[I]=E-G;I=I+1}var E=Math.sqrt((Math.pow(A,2)-Math.pow(G+1,2)));if((E>=H)&&(E<(H+1))){D=D+"Top";B[I]=E-H;F[I]=1;I=I+1}var E=Math.sqrt((Math.pow(A,2)-Math.pow(H+1,2)));if((E>=G)&&(E<(G+1))){D=D+"Right";B[I]=1;F[I]=E-G;I=I+1}var E=Math.sqrt((Math.pow(A,2)-Math.pow(G,2)));if((E>=H)&&(E<(H+1))){D=D+"Bottom";B[I]=E-H;F[I]=0}switch(D){case"LeftRight":C=Math.min(F[0],F[1])+((Math.max(F[0],F[1])-Math.min(F[0],F[1]))/2);break;case"TopRight":C=1-(((1-B[0])*(1-F[1]))/2);break;case"TopBottom":C=Math.min(B[0],B[1])+((Math.max(B[0],B[1])-Math.min(B[0],B[1]))/2);break;case"LeftBottom":C=(F[0]*B[1])/2;break;default:C=1}return C}function rgb2Hex(B){try{var C=rgb2Array(B);var G=parseInt(C[0]);var E=parseInt(C[1]);var A=parseInt(C[2]);var D="#"+IntToHex(G)+IntToHex(E)+IntToHex(A)}catch(F){alert("There was an error converting the RGB value to Hexadecimal in function rgb2Hex")}return D}function rgb2Array(A){var C=A.substring(4,A.indexOf(")"));var B=C.split(", ");return B}function setOpacity(F,C){C=(C==100)?99.999:C;if(isSafari&&F.tagName!="IFRAME"){var B=rgb2Array(F.style.backgroundColor);var E=parseInt(B[0]);var D=parseInt(B[1]);var A=parseInt(B[2]);F.style.backgroundColor="rgba("+E+", "+D+", "+A+", "+C/100+")"}else{if(typeof(F.style.opacity)!="undefined"){F.style.opacity=C/100}else{if(typeof(F.style.MozOpacity)!="undefined"){F.style.MozOpacity=C/100}else{if(typeof(F.style.filter)!="undefined"){F.style.filter="alpha(opacity:"+C+")"}else{if(typeof(F.style.KHTMLOpacity)!="undefined"){F.style.KHTMLOpacity=C/100}}}}}}function inArray(C,B){for(var A=0;A<C.length;A++){if(C[A]===B){return A}}return false}function inArrayKey(B,A){for(key in B){if(key===A){return true}}return false}function addEvent(E,D,B,A){if(E.addEventListener){E.addEventListener(D,B,A);return true}else{if(E.attachEvent){var C=E.attachEvent("on"+D,B);return C}else{E["on"+D]=B}}}function removeEvent(E,D,B,A){if(E.removeEventListener){E.removeEventListener(D,B,A);return true}else{if(E.detachEvent){var C=E.detachEvent("on"+D,B);return C}else{alert("Handler could not be removed")}}}function format_colour(B){var A="#ffffff";if(B!=""&&B!="transparent"){if(B.substr(0,3)=="rgb"){A=rgb2Hex(B)}else{if(B.length==4){A="#"+B.substring(1,2)+B.substring(1,2)+B.substring(2,3)+B.substring(2,3)+B.substring(3,4)+B.substring(3,4)}else{A=B}}}return A}function get_style(obj,property,propertyNS){try{if(obj.currentStyle){var returnVal=eval("obj.currentStyle."+property)}else{if(isSafari&&obj.style.display=="none"){obj.style.display="";var wasHidden=true}var returnVal=document.defaultView.getComputedStyle(obj,"").getPropertyValue(propertyNS);if(isSafari&&wasHidden){obj.style.display="none"}}}catch(e){}return returnVal}function getElementsByClass(G,E,A){var D=new Array();if(E==null){E=document}if(A==null){A="*"}var C=E.getElementsByTagName(A);var B=C.length;var F=new RegExp("(^|\\s)"+G+"(\\s|$)");for(i=0,j=0;i<B;i++){if(F.test(C[i].className)){D[j]=C[i];j++}}return D}function newCurvyError(A){return new Error("curvyCorners Error:\n"+A)};