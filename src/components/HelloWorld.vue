<template>
  <div>
    <v-row>
      <v-col cols="12">
          <logo style="margin-top:-2%"></logo>
      </v-col>
    </v-row>

    <v-row>
      <first-section></first-section>
    </v-row>

    <v-row>
      <v-col>
        <v-container>
          <v-timeline dense style="width:100%">
            <v-timeline-item 
              v-for="(item,id) in items"
              :key="id"  
              :icon="item.icon" fill-dot
              color="#b60e0e">
                <v-card elevation="10"
                  class="mx-auto" style="border-radius:20px"
                  color="grey lighten-4"
                  max-width="100%" dark
                >
                  <v-card-text class="letra"
                    style="position: relative;"
                  >
                    <br>
                    <div class="letra" v-html="item.item">
                    </div><br>
                  </v-card-text>
                </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </v-col>
    </v-row>

    
    <v-footer style="background: black;margin-top:10%" dark>
    <v-row>
      <v-col></v-col>
      <v-col>
        <center>
          <img width="200"  style="border-radius:100px"
                src="https://firebasestorage.googleapis.com/v0/b/trafla-24d65.appspot.com/o/trafla%2Fphoto_2020-07-20_17-14-31.jpg?alt=media&token=11df4044-12bd-47be-a799-ccb2ae68321a" alt="">

          <div>
            <span class="letra" style="color:#b60e0e"><b style="color:white">Patricio Muñoz </b><br> fundador</span>
            <center>
              <span>
                <v-btn
                class="mx-4"
                v-for="(icon,idx) in icons"
                :key="idx"
                :href="direccion[idx]"
                icon>
                  <v-icon size="30px">{{ icon }}</v-icon>
                </v-btn>
              </span>
            </center><br>
            <span  class="letra" style="margin-left:%">{{ new Date().getFullYear() }}</span> 
          </div>
          </center>
      </v-col><v-col></v-col>
    </v-row> 

    </v-footer>

  </div>
</template>

<script>
import FirstSection from './firstSection.vue'
import logo from './logo.vue'
  export default {
    name: 'HelloWorld',
    components: {
      logo, FirstSection
    },
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
      icons: [
              'mdi-gmail',
              'mdi-linkedin',
              'mdi-instagram',
          ],
      direccion: [
        'mailto:patricio.munoz@alu.ucm.cl',
        'https://www.linkedin.com/in/patricio-nicol%C3%A1s-mu%C3%B1oz-alveal-08a5b9183/',
        'https://www.instagram.com/unpatriciomas/'

      ]
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
</style>
