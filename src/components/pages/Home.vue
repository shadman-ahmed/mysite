<template>
  <div class="container">
    <div class="columns" v-for="(projects, index) in chunkProjects" :key="index">
      <div class="column" v-for="project in projects" :key="project">
        <div class="card">
          <div class="card-image">
            <span class="image is-3by2">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </span>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="title is-size-5">Project {{ project }}</div>
              <div class="subtitle is-size-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectNumber: [1,2,3,4,5,6]
    }
  },
  methods: {
    chunk(arr, chunkSize) {
      let tmpArr = []

      for (let i = 0; i < arr.length; i += chunkSize) {
        let chunk = arr.slice(i, i + chunkSize)
        tmpArr.push(chunk)
      }

      return tmpArr
    }
  },
  computed: {
    chunkProjects() {
      return this.chunk(this.projectNumber, 3)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin-bottom: 2rem;
}
</style>
