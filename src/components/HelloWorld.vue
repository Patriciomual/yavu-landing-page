<template>
  <v-container>
      <center>
        <p class="letra animacionQ" style="margin-top:1%"><i>Aquí se construye el futuro</i></p>
          <img class="animacionH" width="60%" src="https://firebasestorage.googleapis.com/v0/b/trafla-24d65.appspot.com/o/trafla%2Flogo_yavu_waxe.png?alt=media&token=e85a1dc2-dd26-49ca-afb5-757cf6306051" alt="yavu-logo">
        <br>
        <div class="animacionQ">
        <v-divider style="width:50%"></v-divider>
          <v-timeline  style="width:80%">
            <v-timeline-item 
              v-for="(item,id) in items"
              :key="id"  class="text-right"
              :icon="item.icon" fill-dot
              color="#b60e0e">
              <div>
                <p class="letra" v-html="item.item"></p>
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </center>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      height: null,
      width: null,
      items:[
        {
          item: 'Échale un ojo a nuestro ERP en construcción  <a href="https://ruil.yavu.org/signin" style="text-decoration:none;color:#b60e0e"><b>RUIL</b></a>',
          icon: 'mdi-point-of-sale'
        },
        {
          item: 'Puedes revisar nuestra aplicación para la Gestión de tiempo en   <a href="https://trafla.org" style="text-decoration:none;color:#b60e0e"><b>TRAFLA</b></a>',
          icon: 'mdi-note'
        },
        {
          item: '<a href="https://pangloss.yavu.org/" style="text-decoration:none;color:#b60e0e"><b>PANGLOSS</b></a> un pequeño componente npm para crear tutoriales dinámicos.',
          icon: 'mdi-grid-large'
        },
      ],
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
