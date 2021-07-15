<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 240 120" style="enable-background:new 0 0 240 120;" xml:space="preserve"  width="100%"> 
      <circle cx="20" cy="50" r="20" class="cls-4"></circle>
      <circle cx="20" cy="50" r="40" class="cls-3"></circle>  
      <path class="st0" d="M-113.2,641.8C-5.5,561.4,102.3,481,210,400.6c70-52.2,140.3-104.6,217.5-145.4
        C589.6,169.5,775,138.7,957.7,122.9c190.5-16.5,390.1-16.5,562.9,65.2c171.1,80.9,297.5,233.7,397.2,394.5
        c48.2,77.8,91.6,158.5,129.8,241.6"/>¿
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
.st0{
  font-family:'Waxe';}
.st1{
  font-size:3em;
  fill: #e9eaec;
}
.st11{
  font-size:3em;
  fill: rgb(0, 0, 0);
}
.st2{
  fill:#9B1616;
	display: inline-block;
	animation: color 4s infinite;
	transform-origin: center;
}
@keyframes color {
  0%, 100% {
    fill:#9B1616;
  }
  25%, 75% {
    fill:#cc3131;
  }
  50%{
    fill:#690707;
  }

}
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
    fill: rgb(250, 228, 28);
    offset-path: path('M-113.2,641.8C-5.5,561.4,102.3,481,210,400.6c70-52.2,140.3-104.6,217.5-145.4 C589.6,169.5,775,138.7,957.7,122.9c190.5-16.5,390.1-16.5,562.9,65.2c171.1,80.9,297.5,233.7,397.2,394.5 c48.2,77.8,91.6,158.5,129.8,241.6');
    offset-distance: 0%;
    animation: red-ball0 15s alternate infinite;
    opacity: 1;

    
}   

@keyframes red-ball0 {
  from {
    offset-distance: 0%;
    box-shadow: -0.5rem 0 0.3rem salmon;
  }
  50%{
    box-shadow: -0.5rem 0 0.3rem salmon;
    offset-distance: 100%;
  }
  to {
    offset-distance: 0%;
  }

}
.cls-4 {
    fill: rgb(246, 233, 47);
    offset-path: path('m20 50 Q 50 10, 25 40 T 80 20 T 100 50 T 100 50');
    offset-distance: 0%;
    animation: red-ball1 20s alternate infinite;
    opacity: 0.5;
    -webkit-filter: blur(2px);
    filter        : blur(2px);
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
    opacity: 0.5;
    -webkit-filter: blur(2px);
    filter        : blur(2px);
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
    -webkit-filter: blur(2px);
    filter        : blur(2px);
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