<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>Property One: {{ AComputed2 }}</div>
    <button @Click="doStuff">do stuff</button>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
