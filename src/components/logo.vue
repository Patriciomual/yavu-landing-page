<template>
   <!-- <svg xmlns="http://www.w3.org/2000/svg" width="80%"  viewBox="0 0 1000 500">
        <text id="yavu" class="cls-1 ani" transform="translate(99 329.365) scale(0.865 0.866)">yavu</text>
        <text id="_." data-name="." class="cls-2" transform="translate(901 329.206) scale(0.838 0.922)">.</text>
        <path fill="transparent" stroke="#000000" stroke-width="4"     
        d="M 10,10 h 10
          m  0,10 h 10
          m  0,10 h 10
          M 40,20 h 10
          m  0,10 h 10
          m  10,10 h 500
          m  0,10 h 10
          M 50,50 h 10
          m-50,10 h 10
          m-20,10 h 10
          m-20,10 h 10" 
       class="path"></path>

      <rect x="50" y="50" width="100" height="100" class="cls-2"></rect>

    </svg>-->

  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 240 120" style="enable-background:new 0 0 240 120;" xml:space="preserve"  width="100%" > 

      <circle cx="20" cy="50" r="20" class="cls-4"></circle>
      <circle cx="20" cy="50" r="40" class="cls-3"></circle>
      
      <circle cx="20" cy="50" r="15" class="cls-5"></circle>
      <circle cx="20" cy="50" r="10" class="cls-6"></circle>

      <text transform="matrix(1 0 0 1 65 70)" class="st0 ani st1">yavu</text>
      <text transform="matrix(1 0 0 1 173 70)" class="st2 st0 st3">.</text>
      
  </svg>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style>
.st0{font-family:'Waxe';}
.st1{
  font-size:3em;
  
}
.st2{fill:#9B1616;}
.st3{font-size:92.2484px;}
.ani{
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation: texto 2s ease-in forwards;
}

@keyframes texto {
  to{
    stroke-dashoffset: 0;
  }
}

.cls-1, .cls-2, .cls-3 {
    font-size: 416.667px;
    font-family: Waxe;
}
.cls-2 {
    fill: #9B1616;
    offset-path: path('m10 50 Q 50 10, 15 80 T 30 80  50 20 T 20 30');
    offset-distance: 0%;
    animation: red-ball 15s alternate infinite;
    opacity: 0.5;
}   

@keyframes red-ball {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}
.cls-3 {
    fill: rgb(245, 247, 137);
    offset-path: path('m20 40 Q 20 20, 25 40 T 20 50 T 20 20 T 10 10');
    offset-distance: 0%;
    animation: red-ball0 15s alternate infinite;
    opacity: 1;
}   

@keyframes red-ball0 {
  from {
    offset-distance: 0%;
  }
  50%{
    offset-distance: 100%;
  }
  to {
    offset-distance: 0%;
  }

}
.cls-4 {
    fill: rgb(180, 236, 147);
    offset-path: path('m20 50 Q 50 10, 25 40 T 80 20 T 100 50 T 100 50');
    offset-distance: 0%;
    animation: red-ball1 20s alternate infinite;
    opacity: 0.2;
}   

@keyframes red-ball1 {
  from {
    offset-distance: 0%;
  }
  50%{
    offset-distance: 100%;
  }
  to {
    offset-distance: 0%;
  }
}
.cls-5 {
    fill: rgb(143, 141, 241);
    offset-path: path('m20 40 Q 20 10, 55 40 T 60 20 T 10 20 T 10 10');
    offset-distance: 0%;
    animation: red-ball2 10s alternate infinite;
    opacity: 0.4;
}   

@keyframes red-ball2 {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}
.cls-6 {
    fill: rgb(212, 93, 93);
    offset-path: path('m20 80 Q 50 30, 70 70 T 0 40 T 0 0 T 90 60');
    offset-distance: 0%;
    animation: red-ball3 20s alternate infinite;
    opacity: 1;
}   

@keyframes red-ball3 {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}
</style>