<template>
    <v-row>
        <v-col>
            <div>
                <p class="letterType" style="font-size:10vw">
                    working
                </p>
                <v-icon class="relojContinuo" style="margin-top:3%;color:#9b1616"  size="300%">mdi-nut</v-icon>
            </div>
        </v-col>

        <center>
            <p class="letra" style="margin-left:10%;margin-right:10%;">
                Sección en construcción. Queremos entregar una herramienta fácil y rápida de utilizar para que cotices 
                el valor de tus ideas las veces que quieras. <br> <br> Por el momento contactate directamente y conversemos.
            </p><br>
            <div >
                <v-btn style="border-radius:100px;font-size: 4vh" 
                    x-large class="letterType"   color="#9b1616" dark :href="contacto">contacto
                    <v-icon style="margin-left:5%">mdi-email</v-icon>
                </v-btn>
            </div><br>
                <v-btn color="#9b1616" dark rounded outlined x-large to="/">
                <v-icon left>mdi-chevron-left</v-icon> volver
                </v-btn>
        </center>
    </v-row>
</template>

<script>
export default {
    data(){
        return{
            contacto: 'mailto:patricio@yavu.org',
        }
    }
}
</script>

<style scoped>
div{
    padding: 2%;
    display:flex;
    justify-content: center;
    align-items: center;
}
.relojContinuo {
    -webkit-animation: rotation 5s infinite linear;
}
@-webkit-keyframes rotation {
    from {-webkit-transform: rotate(0deg);}
    to   {-webkit-transform: rotate(360deg);}
}
</style>