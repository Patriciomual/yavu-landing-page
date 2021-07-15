<template>
    <div style="background: #CFDB7C;margin-top:-10px">
        <v-row v-for="(item,id) in services" :key="id" class="scale">
            <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                <v-container>
                    <p class="letterType" style="font-size:4vh;text-align:right;padding:1%">
                    <v-icon style="float:left" right color="#9B1616 " size="50">mdi-check-circle-outline</v-icon>
                        {{item.text}}
                    </p>
                </v-container>
            </v-col>  
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                <center>
                    <span  v-for="(icon,idx) in item.icons" :key="idx">
                        <v-icon  :color="icon.color" left :size="icon.size">{{icon.name}}</v-icon>       
                    </span>
                </center>
            </v-col>
        </v-row>
        <center>
            <v-btn class="letterType" style="font-size: 3.5vh" dark color="#9b1616" to="/construction" rounded x-large>
                cotiza ahora <v-icon size="30" right>mdi-chevron-right</v-icon>
            </v-btn>
        </center>
        <br><br><br>
    </div>
</template>

<script>
export default {
    data(){
        return{
        services: [
            {
                text: 'Diseño 100% adaptativo, tu página o software funciona perfecto en cualquier pantalla.',
                icons: [
                    {
                        name: 'mdi-tablet-cellphone',
                        color: '#1b244f',
                        size: '120'
                    },
                ]
            },
            {
                text: 'Construimos páginas web de presentación, corporativas, blogs, e-commerce, aplicacion móvil o software web especializado.',
                icons: [
                    {
                        name: 'mdi-desktop-classic',
                        color: '#1b244f',
                        size: '120'      
                    },
                ]
            },
            {
                text: 'Branding. Nos preocupamos de que construyas la identidad de tú marca o idea, ser auténtico es una ventaja competitiva.',
                icons: [
                    {
                        name: 'mdi-head-heart',
                        color: '#1b244f',
                        size: '120'      
                    },
                ]
            },
            {
                text: 'Ilustraciones y logos. Desde el boceto hasta la formalización del diseño.',
                icons: [
                    {
                        name: 'mdi-draw',
                        color: '#1b244f',
                        size: '120'      
                    },
                ]
            },
            {
                text: 'Asesorías remotas de tecnología en general.',
                icons: [
                    {
                        name: 'mdi-account-voice',
                        color: '#1b244f',
                        size: '120'      
                    },
                ]
            },
        ],
        active : true,
        }
    }
}
</script>

<style>
.scale{
    transform: scale(0.85);
}
</style>