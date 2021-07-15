<template>
    <v-container class="center">
        <h3 class="letra" style="font-size: 3em;">{{text}}</h3><br>
        <center>
            <v-text-field class="center letra" style="width:80%" outlined label="Dale busca algún servicio" 
            rounded append-icon="mdi-magnify" v-model="busqueda"></v-text-field>
        </center>
        <v-row align="center">
            <v-item-group
            v-model="window"
            class="shrink mr-1"
            mandatory
            tag="v-flex"
            >
            <v-item
                v-for="n in length"
                :key="n"
                v-slot="{ active, toggle }"
            >
                <div>
                <v-btn
                    :input-value="active"
                    icon
                    @click="toggle"
                >
                    <v-icon>mdi-record</v-icon>
                </v-btn>
                </div>
            </v-item>
            </v-item-group>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, consectetur reprehenderit! Vitae recusandae id accusantium laborum facere fugiat molestias rem qui eos, ex quaerat sit voluptas distinctio quae dolorum enim!</p>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        text: 'Servicios y productos',
        busqueda: '',
        length: 3,
        window: 0,
    })
}
</script>

<style>
.center{
    text-align: center;
}
</style>