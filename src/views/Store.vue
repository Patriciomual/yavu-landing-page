<template>
    <div class="backLogo">
        <br>
        <center>
            <p class="letterType" style="font-size:10vw;color:white;margin-left:5%">
                <v-btn dark text rounded x-large to="/"><v-icon size="50">mdi-arrow-left-circle</v-icon></v-btn>
                     Tienda 
                <v-icon dark style="margin-top:-2%;border-radius:20px" size="80%">mdi-shopping</v-icon> 
            </p>

        <v-row style="padding:5%">
            <p class="letra" style="color:white;padding-bottom:5%;margin-top:-5%">
                Constantemente adjuntamos nuevos proyectos en sus distintas versiones, algunos software libres en el cual
                se adjunta el código y/o proyecto github. <br><br>
                ¿Eres desarrollador? <br>Puedes ver el código de esta misma página en  <br>
                quizás encuentres algo que te sirva en <a href="">aprende</a>
            </p> 
            <v-col  cols="12" xs="12" sm="12" md="4" lg="4" xl="3"  v-for="(item,id) in items" :key="id">
                <v-card elevation="10" style="border-radius:10px"
                    class="mx-auto my-12 filter"
                    max-width="374">
                    <div style="height: 150px" class="cardBack">
                        <v-card-title style="color:white" v-html="item.title"></v-card-title>                        
                    </div>
                    <v-card-text>
                        <v-icon style="float:right;padding:3%;color:white;border-radius:100px" class="cardBack" size="40">{{item.icon}}</v-icon>     
                        <p  style="color:#b60e0e;font-size:20px" v-html="item.price"></p>
                        <p style="color:green;float:left" v-html="item.ava"></p> <br>
                        <div class="letra" style="text-align:justify" v-html="item.text"></div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        color="deep-purple lighten-2" rounded 
                        outlined :href="item.href"  style="margin-left:2%"
                        @click="reserve">
                        ver en web <v-icon right>mdi-web</v-icon>
                    </v-btn>
                    <v-btn :href="item.git" v-if="item.git != ''" color="deep-purple lighten-2" rounded
                        outlined  style="margin-left:2%">
                        git <v-icon right>mdi-github</v-icon>
                    </v-btn> 
                    <v-btn :href="item.git" v-else disabled color="deep-purple lighten-2" rounded
                        outlined  style="margin-left:2%">
                        git <v-icon right>mdi-github</v-icon>
                    </v-btn> 
                    </v-card-actions> <br>
                </v-card>
            </v-col>
        </v-row>
        </center>
    </div>

</template>

<script>
export default {
    data(){
        return{
            loading: false,
            selection: 1,
            items:[
                {
                    title: '<span style="font-size:25px" class="letterType">SUCURSAL DIGITAL</span><br><br>',
                    text: 'Es quizás el proyecto más ambicioso hasta la fecha.<br> Un ecosistema digital que incorpora un punto de venta inclusivo enfocado a pequeñas pymes. <br>',
                    ava: 'Estado Beta',
                    price: 'Pay',
                    href: 'https://ruil.yavu.org/signin',
                    icon: 'mdi-point-of-sale',
                    img: '',
                    git: ''
                },
                {
                    title: '<span style="font-size:30px" class="letterType">TRAFLA</span><br><br>',
                    text: 'Aplicación para la Gestión de tiempo basado en la distribución de tareas en notas y métodos de control como Pomodoro. <br>Se encuentra en estado beta, especialemente enfocado a estudiantes y empresa.<br>',
                    ava: 'Estado Beta',
                    price: 'Free',
                    href: 'https://trafla.org/login',
                    icon: 'mdi-note',
                    img: 'https://firebasestorage.googleapis.com/v0/b/ruil-e616a.appspot.com/o/trafla.png?alt=media&token=2c1c3fa7-6d0c-4ead-b1f6-0edc3bdeeaab',
                    git: ''
                },
                {
                    title: '<span style="font-size:30px" class="letterType">PANGLOSS</span><br><br>',
                    text: 'Pequeña incursión en la creación de un componente npm para crear tutoriales dinámicos construido en base a vuetify.<br> ',
                    ava: 'Disponible',
                    price: 'Free',
                    href: 'https://pangloss.yavu.org/',
                    icon: 'mdi-grid-large',
                    img: '',
                    git: 'https://github.com/Patriciomual/pangloss'
                },
            ],
        }
    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    }
}
</script>

<style>
.cardBack{
background: rgb(222,137,0);
background: -moz-radial-gradient(circle, rgba(222,137,0,1) 0%, rgba(175,22,107,1) 61%, rgba(86,15,144,1) 100%);
background: -webkit-radial-gradient(circle, rgba(222,137,0,1) 0%, rgba(175,22,107,1) 61%, rgba(86,15,144,1) 100%);
background: radial-gradient(circle, rgba(222,137,0,1) 0%, rgba(175,22,107,1) 61%, rgba(86,15,144,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#de8900",endColorstr="#560f90",GradientType=1);
}
</style>