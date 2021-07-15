<template>
    <div class="backFirst">
        <v-container>
            <v-row style="margin:2%">
                <v-col>
                    <p class="letterType">Creamos nuevas <br><span class="glitch" style="font-size: 10vw;">EXPERIENCIAS</span> <br>
                    <span style="font-size:9vw">tecnológicas.</span> </p>
                </v-col>
                <v-col>
                    <center>
                    <p class="letterLato">
                        💡 -  "Con el diseño adecuado, cualquiera se convierte en nativo digital"  
                    </p><br><br>
                        <v-btn style="border-radius:100px;font-size: 4vh" 
                            x-large class="letterType"   color="#9b1616" dark :href="contacto">contacto
                            <v-icon style="margin-left:5%">mdi-email</v-icon>
                            </v-btn>
                    </center>
                </v-col>
            </v-row>
        </v-container><br>
    </div>
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.letterType{
    font-family: 'Archivo Black', sans-serif;
    font-size: 5vw;
    text-align: left;
}
.letterLato{
    font-family: 'Lato', sans-serif;
    font-size: 3vh;
    text-align: right;
}
</style>