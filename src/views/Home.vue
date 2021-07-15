<template>
    <div>
      <v-row class="backLogo">
        <v-col cols="12">
            <logo style="margin-top:-2%"></logo>
            <center>
              <v-icon class="down" style="margin-top:-7%;color:#9b1616" large>mdi-chevron-down</v-icon>
            </center>
        </v-col>
      </v-row>
      <v-row>
        <first-section></first-section>
      </v-row>
      <v-row class="backSecond">
        <secondSection></secondSection>
      </v-row>
      <v-row class="backThird">
        <thirdSection></thirdSection>
      </v-row>
      <v-row class="backThird">
        <tecnology></tecnology>
      </v-row>
      <v-row>
        <ecology></ecology>
      </v-row>
      <footerComponent></footerComponent>
      <router-view></router-view>
    </div>
</template>

<script>
import FirstSection from '../components/firstSection.vue'
import footerComponent from '../components/footer.vue'
import logo from '../components/logo.vue'
import secondSection from '../components/secondSection.vue'
import thirdSection from '../components/thirdSection.vue'
import tecnology from '../components/tecnology.vue'
import ecology from '../components/ecology.vue'
  export default {
    name: 'Home',
    components: {
      logo, FirstSection,footerComponent,secondSection,thirdSection,
      tecnology,ecology
    },
    data: () => ({
      height: null,
      width: null,
    }),
    mounted(){
      this.height = screen.height -90
      this.width = screen.width

    },
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Open+Sans:wght@300&display=swap');

@font-face {
  font-family: Waxe;
  src: url('../fonts/Waxe.otf');
}
.letterWaxe{
  font-family: waxe;
}
.gradient{
background: rgb(0,0,0);
background: linear-gradient(29deg, rgba(0,0,0,1) 0%, rgba(66,17,17,1) 51%, rgba(54,20,20,1) 100%);
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.letra{
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-size: 20px;
}
.letra1{
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;

}
.padre{
  /*IMPORTANTE*/
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.padre1{
  /*IMPORTANTE*/
  position: absolute;
  top:30%;
  left:0;
  right:0;
  bottom:0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.animacionH {
    transition: all 4s ease-in-out;
    -webkit-transition: all 1s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all 2s ease-in-out; /** Firefox **/
    -o-transition: all 2s ease-in-out; /** Opera **/
}
:hover .animacionH {
    transform: translate(60px, 0px) rotate(360deg);
    -webkit-transform: translate(0px, 0px) rotate(-5deg);
    -o-transform: translate(0px, 0px) rotate(-5deg);
    -moz-transform: translate(0px, 0px) rotate(-3deg);
}
.animacionQ {
    transition: all 4s ease-in-out;
    -webkit-transition: all 1s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all 2s ease-in-out; /** Firefox **/
    -o-transition: all 2s ease-in-out; /** Opera **/
}
:hover .animacionQ {
    transform: translate(0px, 0px) rotate(360deg);
    -webkit-transform: translate(0px, 10px) rotate(0deg);
    -o-transform: translate(350px, -350px) rotate(360deg);
    -moz-transform: translate(350px, -350px) rotate(360deg);
}
.glitch {
  font-weight: bold;
  position: relative;
  text-shadow: 0.05em 0 0 rgba(160, 32, 32, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

  animation: glitch 3s infinite;
}
@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 rgba(179, 255, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  
  25% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(172, 20, 66, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 
      0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  
  75% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
}
.latidos {
	display: inline-block;
	animation: ani_latidos 4s infinite;
	transform-origin: center;
}
@keyframes ani_latidos {
  0%, 50%, 100% {
  opacity: 1;
  }
  25%, 75% {
  opacity: 0;
  }
}
.down{
    animation: down 3s infinite;
}
@keyframes down{
  0%   {top:-40px;}
  50% {top: 0px}
  75% {top: 0px}
  100% {top:-40px;}

}
.backLogo{
 background: rgb(94,22,70);
background: -moz-linear-gradient(16deg, rgba(94,22,70,1) 0%, rgba(27,36,79,1) 100%);
background: -webkit-linear-gradient(16deg, rgba(94,22,70,1) 0%, rgba(27,36,79,1) 100%);
background: linear-gradient(16deg, rgba(94,22,70,1) 0%, rgba(27,36,79,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5e1646",endColorstr="#1b244f",GradientType=1); 
}
.backFirst{
  width:100%;
  color:#1B244F;
  background: rgb(255,204,33);
  background: -moz-linear-gradient(2deg, rgba(255,204,33,1) 10%, rgba(233,234,236,1) 10%);
  background: -webkit-linear-gradient(2deg, rgba(255,204,33,1) 10%, rgba(233,234,236,1) 10%);
  background: linear-gradient(2deg, rgba(255,204,33,1) 10%, rgba(233,234,236,1) 10%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffcc21",endColorstr="#e9eaec",GradientType=1); 
}
.backSecond{
 background: rgb(233,234,236);
background: -moz-linear-gradient(2deg, rgba(233,234,236,1) 8%, rgba(255,204,33,1) 8%);
background: -webkit-linear-gradient(2deg, rgba(233,234,236,1) 8%, rgba(255,204,33,1) 8%);
background: linear-gradient(2deg, rgba(233,234,236,1) 8%, rgba(255,204,33,1) 8%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e9eaec",endColorstr="#ffcc21",GradientType=1); 
}
.backThird{
background: #E9EAEC;
}
</style>
