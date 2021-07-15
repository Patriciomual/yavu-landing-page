<template>
    <v-footer style="background: #1b244f" dark>
        <v-row>
        <v-col>
            <center>
            <img width="200"  style="border-radius:100px"
                    src="https://firebasestorage.googleapis.com/v0/b/trafla-24d65.appspot.com/o/trafla%2Fphoto_2020-07-20_17-14-31.jpg?alt=media&token=11df4044-12bd-47be-a799-ccb2ae68321a" alt="">
            <div>
                <p class="letra" style="color:white">Patricio Muñoz <br>
                    <span class="founder" style="color:#b60e0e;font-size:50px">Founder</span></p>
                <center>
            <q class="letra" style="color:white;font-size:2.5vh;">
            yavu es un sueño<br> que estoy  haciendo realidad, <br> déjame ayudar con el tuyo.</q><br><br>
                <span v-for="(icon,idx) in icons" :key="idx">
                    <v-btn
                    style="margin:2%"
                    :href="direccion[idx]"
                    icon>
                        <v-icon size="50px">{{ icon }}</v-icon>
                    </v-btn>
                </span>
                </center><br>
                <span  class="letra" style="font-size:25px">{{ new Date().getFullYear() }}</span> 
            </div>
            </center>
        </v-col>
        </v-row> 

    </v-footer>
</template>

<script>
export default {
    data : ()=>({
      icons: [
              'mdi-gmail',
              'mdi-linkedin',
              'mdi-instagram',
          ],
      direccion: [
        'mailto:patricio@yavu.org',
        'https://www.linkedin.com/in/patricio-nicol%C3%A1s-mu%C3%B1oz-alveal-08a5b9183/',
        'https://www.instagram.com/unpatriciomas/'

      ]
    })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
.founder{
font-family: 'Sacramento', cursive;
}
</style>