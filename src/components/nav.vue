<template>
    <div>
        <v-btn text fab style="position:fixed;right: 0;margin-right:1%;color: #9b1616"   
        @click.stop="drawer = !drawer">
            <v-icon  style="color: #9b1616" large>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-navigation-drawer
        v-model="drawer" class="letra"
        temporary app style="border-top-right-radius:10px;border-bottom-right-radius:10px;"
        >
    
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 260 130" style="enable-background:new 0 0 240 120;" xml:space="preserve"  width="100%">  
            <path class="st0" d="M-113.2,641.8C-5.5,561.4,102.3,481,210,400.6c70-52.2,140.3-104.6,217.5-145.4
                C589.6,169.5,775,138.7,957.7,122.9c190.5-16.5,390.1-16.5,562.9,65.2c171.1,80.9,297.5,233.7,397.2,394.5
                c48.2,77.8,91.6,158.5,129.8,241.6"/>
            <text transform="matrix(1 0 0 1 65 70)" class="st0 ani st11">yavu</text>
            <text transform="matrix(1 0 0 1 200 70)" class="st2 st0 st3">.</text>
        </svg>


        <v-list nav >
            <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            >
            <v-list-item>
                <v-list-item-title>Aprende</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>Proyectos</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title>Podcast</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title>Servicios</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>Contacto</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>

        <p style="padding:10%">De la séptima región de chile pal mundo.</p>      

        </v-navigation-drawer>

    </div>

</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style>
#v-list-item-title{
    color:red
}

</style>