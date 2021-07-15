<template>
  <div>
    <v-row style="padding:3%">
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
          <idea style="width:100%"></idea>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
          <br>
          <h1 style="padding:2%;color:#333652" class="letterType">Proyectos en desarrollo
              <b class="latidos"  style="margin-left:0%;color:#9b1616">_</b></h1>

            <h4 class="letra" style="color:#9b1616;padding:0%;font-size:5vh">Unos en estado beta y otros aún reposando en su cascarón. <br></h4><br>
            <center> <br>

              <v-card style="padding:4%;border-radius:10px" class="estiloTarjeta" color="#E9EAEC">
                <b class="letra" style="font-size:20px;color:#333652">
                  Cada proyecto que soñamos nace de instantes donde todo parece inmóvil y oscuro,
                  su construcción representa la bienvenida a nuestra realidad donde todo el trabajo
                  y lo que dejamos de nosotros en él, constituye nuestra forma de aprender y enfrentar la vida.  
                </b>  
              </v-card>
              
            </center>
        </v-col>
    </v-row>
    <center>
    <v-card style="border-radius:0px;padding:0%" width="100%" class="backLogo"><br>
        <v-row style="padding: 3%">
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
            <v-icon dark size="70">mdi-shopping</v-icon><br>
            <v-btn rounded x-large class="letterType" text dark to="/store">
              ir a Store <v-icon right>mdi-chevron-right</v-icon> 
            </v-btn> 
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3"
            v-for="(item,id) in items" :key="id" style="padding:2%">
            <v-card class="tarjetaMarket" color="#FAD02C" style="border-radius:15px" height="100" width="80%"><br>
                <v-icon size="55" color="#A32828">{{item.icon}}</v-icon>
            </v-card>
          </v-col>
        </v-row>
    </v-card></center>
  </div>
</template>

<script>
import idea from '../svg/idea.vue'
export default {
    components:{
      idea
    },
    data: () => ({
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      items:[
        {
          title: '<span style="font-size:25px" class="letterType">SUCURSAL DIGITAL</span><br><br>',
          icon: 'mdi-point-of-sale',
        },
        {
          title: '<span style="font-size:30px" class="letterType">TRAFLA</span><br><br>',
          icon: 'mdi-note',
        },
        {
          title: '<span style="font-size:30px" class="letterType">PANGLOSS</span><br><br>',
          icon: 'mdi-grid-large',
        },
      ],
    }),
    watch: {
      model: function(val){
        alert(val)
      }
    }
}
</script>

<style>
.tarjetaMarket{
  background: rgb(245,139,68);
  background: -moz-linear-gradient(306deg, rgba(245,139,68,1) 0%, rgba(255,204,33,1) 100%);
  background: -webkit-linear-gradient(306deg, rgba(245,139,68,1) 0%, rgba(255,204,33,1) 100%);
  background: linear-gradient(306deg, rgba(245,139,68,1) 0%, rgba(255,204,33,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f58b44",endColorstr="#ffcc21",GradientType=1); 
  filter: drop-shadow(0px 0px 0px #A32828);
}
.tarjeta {
  -webkit-filter: blur(2px);
  filter        : blur(2px);
  padding: 1%;
  margin: 1%;
}
.estiloTarjeta{
  padding: auto;
  filter: drop-shadow(-7px 7px 1px #444343);
}
</style>