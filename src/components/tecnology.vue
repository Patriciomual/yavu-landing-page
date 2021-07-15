<template>  
  <div style="color:#1b244f">
        <v-row style="padding:5%">
            <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                <h1  class="letterType"> <span style="color:#9b1616">#</span> Tecnologías que nos encantan
                    <b class="latidos"  style="margin-left:0%;color:#9b1616">_</b>
                </h1><br>
                <p class="letterType" style="font-size:4vh">
                  Para la construcción de tus proyectos.
                </p> <br>

                <p class="letra" style="font-size:3.5vh;text-align:justify;padding:3%">
                    Actualizamos de forma constante nuestras herramientas de trabajo, esforzándonos por estar  en la 
                    vanguardia del diseño obteniendo aplicaciones 100% personalizadas. 
                </p> <br>

            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                <v-treeview
                    v-model="tree"
                    :open="initiallyOpen"
                    :items="items"
                    activatable class="letra1" style="font-size:18px"
                    item-key="name"
                    open-on-click
                >
                    <template v-slot:prepend="{ item, open }">
                    <v-icon size="40" color="#1b244f" v-if="!item.file">
                        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
                    </v-icon>
                    <v-icon size="40" color="#1b244f" left v-else>
                        {{ files[item.file] }}
                    </v-icon>
                    </template>
                </v-treeview>
            </v-col>
        </v-row>


        <v-row style="padding:6%;background:#1b244f;color:#EAECEE"> 
          <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
            <p class="letterType" style="font-size:4vh;text-align:right">
              Asesorias personalizadas en informática para el uso posterior de un software (capacitación remota),
              mantenimiento e instalación de ecosistema trabajo remoto.
            </p> 
            <center>
              <img width="70px" src="../img/meetLogo.png" style="margin:3%;border-radius:5px"  alt="">
              <img width="70px" src="../img/zoomLogo.png" style="margin:3%;border-radius:5px"  alt="">
              <img width="70px" src="../img/teamLogo.png" style="margin:3%;border-radius:5px"  alt=""><br>
              <v-btn class="letterType" style="font-size: 3vh" dark color="#9b1616" rounded x-large>
                  agenda tu hora <v-icon size="30" right>mdi-chevron-right</v-icon>
              </v-btn>
            </center>
          </v-col>
          <v-col  cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="filter">
            <img width="100%" src="../img/Meet.gif" style="border-radius:10px"  alt="">
          </v-col>

        </v-row>

        <v-row style="padding:6%;margin-top:5%">
          <v-col  cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="filter">
            <img width="100%" src="../img/ph.gif" style="border-radius:10px"  alt="">
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
            <p class="letterType" style="font-size:5vh;padding:0%">
              Ilustraciones especialmente diseñadas para tu proyecto, deja que la 
              <b class="glitch" >imaginación vuele.</b>
            </p> <br>
            <center>
              <img width="70px" src="../img/photoshopLogo.png" style="margin:3%;border-radius:5px"  alt="">
              <img width="70px" src="../img/illustratorLogo.png" style="margin:3%;border-radius:5px"  alt="">
            </center>
          </v-col>
        </v-row>
    <tiempo></tiempo>
    <services></services>
  </div>
</template>

<script>
import services from './services.vue'
import tiempo from '../svg/tiempo.vue'
  export default {
    components:{
      services,tiempo
    },
    data: () => ({
      initiallyOpen: ['public'],
      files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-code-json',
        md: 'mdi-language-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel',
        vue: 'mdi-vuejs',
        css: 'mdi-language-css3',
        fire: 'mdi-firebase',
        py: 'mdi-language-python',
        lara: 'mdi-laravel',
        word: 'mdi-wordpress'
      },
      tree: [],
      items: [
        {
          name: 'public',
          children: [
            {
              name: 'HTML',
              file: 'html',
            },
            {
              name: 'CSS',
              file: 'css',
            },
            {
                name: 'JAVASCRIPT',
                file: 'js',
            },
            {
                name: 'VUE',
                file: 'vue',
            },
            {
                name: 'FIREBASE',
                file: 'fire',
            },
            {
                name: 'LARAVEL',
                file: 'lara',
            },
            {
                name: 'WORDPRESS',
                file: 'word',
            },
            {
                name: 'PYTHON',
                file: 'py',
            },
          ],

        },
      ],
    }),
  }
</script>

<style>
.filter{
  filter: drop-shadow(-8px 8px 1px #1B244F);
}
</style>