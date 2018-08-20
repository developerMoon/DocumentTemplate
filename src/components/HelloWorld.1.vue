<template>
  <div class="col-md-3">
    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.3.0/css/font-awesome.min.css">
    <nav class="docs-sidebar" data-spy="affix" data-offset-top="300" data-offset-bottom="200" role="navigation">
      <img src="/dist/images/upload/plugin3.png">
        <ul class="nav">
            <li><a href="#line1">Getting Started</a></li>
            <li><a href="#line2">How to Install WordPress</a></li>
            <li><a href="#line3">How to Install Theme</a></li>
            <li><a href="#line4">Necessary Plugins</a></li>
            <li><a href="#line5">Creating Blog Pages</a></li>
            <li><a href="#line6">Revolution Slider</a></li>
         
        </ul>
    </nav >
</div>

</template>

<script>
export default {
  name: 'HelloWorld1',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
