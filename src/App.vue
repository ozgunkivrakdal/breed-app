<template>
  <div id="app">
    <header id="header">
      <div id="head" class="parallax" parallax-speed="1" style="background-position: center -23px;">
        <h1 id="logo" class="text-center">
          <img class="img-circle" src="./assets/doglover.png"/>
          <span class="title">Dog Lover</span>
          <span class="tagline">Nice pictures about dog breeds</span>
        </h1>
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
    padding: 2rem 0rem;
  }
  html {
    font-size: 100%;
  }
  body {
    font-size: 15px;
    font-size: 0.9375rem;
    font-family: "Open sans", Helvetica, Arial, sans-serif;
    color: #666666;
    padding: 0;
  }
  HEADER
  **********************************************************************
  #head {
    background: #f4f4f4;
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
  .home #head {
    padding: 90px 0;
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
</style>
