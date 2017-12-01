<template>
  <div class="code">
    <h3>Student-Name</h3>
    <textarea class="code-sample box">
    export default {
      name: 'landing-page',
      methods: {
        open(link) {
          this.$electron.shell.openExternal(link);
        },
      },
    };
    </textarea>
    <button class="basic-button">Google Search</button>
    <textarea class="code-comment box">
    </textarea>
    <button class="basic-button">Add Comment</button>
  </div>
</template>

<script>
  export default {
    name: 'code',
  };
</script>
<style>
  h3 {
    color: #535559;
  }
  .code {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
  }
.code-sample {
    display: flex;
    flex: 1 1 60%;
    resize: none;
  }
  .code-comment {
    display: flex;
    flex: 1 1 20%;
    resize: none;
  }
  .basic-button {
    height: 36px;
    line-height: 27px;
    background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
    color: #757575;
    cursor: default;
    font-family: arial, sans-serif;
    font-size: 13px;
    font-weight: bold;
    margin: 11px 0px;
    min-width: 54px;
    padding: 0 16px;
    text-align: center;
  }
  .basic-button:hover {
    background-image: -webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));
    background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    background-color: #f8f8f8;
    background-image: linear-gradient(top,#f8f8f8,#f1f1f1);
    background-image: -o-linear-gradient(top,#f8f8f8,#f1f1f1);
    border: 1px solid #c6c6c6;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    color: #222;
  }

  .box {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    border: none;
  }
</style>
