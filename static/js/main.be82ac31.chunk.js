(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Leonardo da Vinci","image":"images/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg","occupation":"Fry Cook","location":"A Pineapple Under the Sea"},{"id":2,"name":"Michelangelo","image":"images/michelangelo-facts-7.jpg","occupation":"Restaurant Owner","location":"A Giant Anchor"},{"id":3,"name":"Raphael","image":"images/800px-Raffaello_Sanzio.jpg","occupation":"Cashier","location":"An Easter Island Head"},{"id":4,"name":"Albrecht Durer","image":"images/800px-Albrecht_D\xfcrer_-_1500_self-portrait_(High_resolution_and_detail).jpg","occupation":"Boy Genius","location":"A Secret Laboratory"},{"id":5,"name":"Caravaggio","image":"images/800px-Bild-Ottavio_Leoni,_Caravaggio.jpg","occupation":"A Cowardly Dog","location":"Nowhere, Kansas"},{"id":6,"name":"Rembrandt","image":"images/800px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg","occupation":"Student","location":"Bluffington"},{"id":7,"name":"Botticelli","image":"images/Sandro_Botticelli_083.jpg","occupation":"Looney Toon","location":"A Rabbit Burrow"},{"id":8,"name":"Bougereau","image":"images/Self_portrait,_by_William_Bouguereau.jpg","occupation":"Ladies Man","location":"Aron City"},{"id":9,"name":"Waterhouse","image":"images/800px-John_William_Waterhouse_001.jpg","occupation":"Adventurer","location":"California"},{"id":10,"name":"Whistler","image":"images/800px-Whistler_Selbstportr\xe4t.jpg","occupation":"Cashier","location":"O-Town, California"},{"id":11,"name":"Jan van Eyck","image":"images/800px-Portrait_of_a_Man_in_a_Turban_(Jan_van_Eyck)_with_frame.jpg","occupation":"Superhero","location":"Earth"},{"id":12,"name":"Gainsborough","image":"images/800px-Thomas_Gainsborough_by_Thomas_Gainsborough.jpg","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump"}]')},,,,,,,,function(e,a,n){e.exports=n(20)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),i=n(3),r=n.n(i),c=(n(14),n(4)),l=n(5),s=n(7),m=n(6),u=n(8),g=(n(15),n(1));n(16);var h=function(e){return o.a.createElement("header",{className:""},o.a.createElement("nav",{className:"navbar navbar-expand-md h-font navbar-light ks-nav ",id:"hover-nav"},o.a.createElement("li",{className:"navbar-nav mr-auto py-2"},o.a.createElement("span",{className:"mr-auto"},"Clicky-Game")),o.a.createElement("li",{className:"navbar-nav mx-auto "},o.a.createElement("span",{className:"mx-auto"},e.message)),o.a.createElement("li",{className:"navbar-nav"},o.a.createElement("span",{className:"ml-auto"}," Score: ",e.score," \xa0\xa0\xa0| \xa0\xa0\xa0High Score: ",e.highscore))))};n(17);var d=function(e){return o.a.createElement("footer",{className:"text-center mt-auto"},o.a.createElement("div",{className:"h-font footerText"},"\xa9 2019 Kayleigh Starr"))};n(18);var p=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"img-container",onClick:function(){return e.handleClick(e.id)}},o.a.createElement("img",{className:"artist-img",alt:e.name,src:e.image})))};n(19);var _=function(e){return o.a.createElement("div",{className:"img-wrap"},e.children)},f=[],v="Click on an image to begin!",b=0,y=0,E=function(e){function a(){var e,n;Object(c.a)(this,a);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={images:g,clickedCards:f,score:b,highscore:y,message:v},n.shuffle=function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),t=[e[n],e[a]];e[a]=t[0],e[n]=t[1]}return e},n.handleClick=function(e){f.includes(e)?(b=0,v="You guessed incorrectly! Game over!",f=[]):(f.push(e),v="You guessed correctly!",(b+=1)>y&&(y=b,v="You guessed correctly and beat your high score! ")),n.shuffle(g),n.setState({images:g,score:b,highscore:y,message:v})},n}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(h,{score:b,highscore:y,message:v}),o.a.createElement(_,null,this.state.images.map(function(a){return o.a.createElement(p,{key:a.id,image:a.image,name:a.name,id:a.id,handleClick:e.handleClick})})),o.a.createElement(d,null))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.be82ac31.chunk.js.map