<template>
    <div style="width:100%">
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
                        <v-btn style="font-size:4vh;padding-bottom:3%;padding-top:3%;border-radius:100px" x-large class="letterWaxe" color="#9b1616" dark :href="contacto">contacto</v-btn>
                    </center>
                </v-col>
            </v-row>
        </v-container>
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