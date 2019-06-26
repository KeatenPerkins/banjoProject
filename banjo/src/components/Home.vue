<template>
  <div class="map">

      <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px; margin:auto;">
    <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"/>
    </GmapMap>

  </div>
</template>

<script>
export default {
  data () {
    return {
      markers: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map{
  padding:4rem;
}

</style>
