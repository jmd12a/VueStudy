<script>
export default {
  name: "MyCard",
  props:{
    user: Object
  }

}
</script>

<template>
  <div class="card">
    <a :href="user.html_url" target="_blank">
      <img :src="user.avatar_url" style="width: 100px"/>
      <p class="card-text">{{user.login}}</p>
    </a>
  </div>
</template>

<style scoped>
    .album {
      min-height: 50rem; /* Can be removed; just added for demo purposes */
      padding-top: 3rem;
      padding-bottom: 3rem;
      background-color: #f7f7f7;
    }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>