<template>
  <div id="app">
    <header id="header" class="head">
      <div id="head" class="parallax" parallax-speed="1" style="background-position: center -23px;">
        <h1 id="logo" class="text-center">
          <img class="img-circle" src="./assets/dogLogo.png"/>
          <span class="title">Dog Lover</span>
          <span class="tagline">Nice pictures about dog breeds</span>
        </h1>
      </div>
      <div class ="center-link">
        <router-link v-if="!$route.meta.hideBackButton" to="/">Go Back</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  @import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
  body{
    background-color: #ced4da;
  }
  HEADER
  **********************************************************************
  #head .head{
    background: #b9cded;
    background-size: cover;
    color: #7C7C7C;
    padding: 30px 0 35px 0;
  }
  #head img.img-circle {
    display: block;
    width: 140px;
    height: 140px;
    overflow: hidden;
    border: 9px solid rgba(0, 0, 0, 0.05);
    margin: 0 auto;
    border-radius: 50%;
  }
  #head .title {
    font-family: Alice, Georgia, serif;
    font-size: 49px;
    font-size: 3.0625rem;
  }
  #head .title a {
    text-decoration: none;
    color: #333333;
  }
  #head .tagline {
    display: block;
    font-size: 14px;
    font-size: 0.875rem;
    line-height: 1.2em;
    color: #7C7C7C;
    margin: 5px 0 0;
  }
  #head .tagline b {
    font-weight: normal;
  }
  #head .tagline a {
    color: #5E5E5E;
  }
  .home #head .title {
    font-size: 49px;
    font-size: 3.0625rem;
  }
  .home #head .tagline {
    font-size: 16px;
    font-size: 1rem;
    margin: 15px 0 0;
  }
  .center-link {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    text-align: center;
  }
</style>
