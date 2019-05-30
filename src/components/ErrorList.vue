<!-- This is the ErrorList Component. It takes whatever errors were passed on the API call and outputs them to the user. 

It receives, as input, an array of errors: errorList.-->

<template>
  <div>
    <div v-if="errorList.length > 0">
      <h2>There was an error fetching data.</h2>
      <ul class="errors">
        <li v-for="error in errorList">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ErrorList',
  data () {
    return {

    }
  },
  props: {
    errorList: []
  }
}
</script>

<style scoped>
  .errors li {
    color: red;
    border: solid red 1px;
    padding: 5px;
  }
</style>