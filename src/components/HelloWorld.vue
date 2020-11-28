<template>
  <v-card  :height="height" :width="width" style="  background: black;">
  <div class="padre">
    <img class="animacionH" width="40%" src="https://firebasestorage.googleapis.com/v0/b/trafla-24d65.appspot.com/o/trafla%2Flogo_yavu_waxe.png?alt=media&token=e85a1dc2-dd26-49ca-afb5-757cf6306051" alt="yavu-logo">
    
  </div>
  <div class="padre1">
    <p class="letra animacionQ" style="font-size:30px"><b>Sitio en construcción</b></p>
  </div>
  <div class="padre1" style="top:60%">
    <p class="letra">Puedes revisar nuestra aplicación para la Gestión de tiempo en <a href="https://trafla.org" style="text-decoration:none;color:#b60e0e">TRAFLA.ORG</a> </p>
  </div>
  </v-card>
</template>

<script>
  export default {
    name: 'HelloWorld',

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
.letra{
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-size: 20px;
  color: white;
}
.letra1{
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: white;

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
    -webkit-transform: translate(0px, 0px) rotate(10deg);
    -o-transform: translate(350px, -350px) rotate(360deg);
    -moz-transform: translate(350px, -350px) rotate(360deg);
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
</style>
