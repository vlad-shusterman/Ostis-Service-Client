<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <input v-model="link"/>
        <button type="button" class="btn btn-primary" @click="search">Get document</button>
      </div >
    </div>
    <div class="row justify-content-center mt-5">
      <button type="button" class="btn btn-primary" @click="downloadFile(data, 'classicEssay')" v-if="data">Download</button>
    </div>
    <div class="row justify-content-center mt-5">
      <button type="button" class="btn btn-primary" @click="downloadFile(data1, 'keyEssay')" v-if="data1">Download</button>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
import getSmth from '@/services/UserService'

export default {
  name: 'StartPage',
  data () {
    return {
      link: '',
      data: '',
      data1: ''
    }
  },
  methods: {
    async search () {
      UserService.getFile(this.link).then((result) => {
        console.log(result.data)
        UserService.getSmth(result.data).then((smth) => {
          console.log(smth)
          UserService.getSmth1(result.data).then((smth1) => {
            console.log(smth1)
            this.data = smth.data.result
            this.data1 += smth1.data.result
            console.log(this.data)
          })
        })
      })
    },
    downloadFile (data, title) {
      if (data) {
        this.download(title, data)
      }
    },
    download (filename, text) {
      const element = document.createElement('a')
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + text)
      element.setAttribute('download', filename)

      element.style.display = 'none'
      document.body.appendChild(element)
      element.click()

      document.body.removeChild(element)
    }
  }
}
</script>

<style scoped>

</style>
