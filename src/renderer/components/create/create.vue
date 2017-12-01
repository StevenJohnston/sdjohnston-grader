<template>
  <div class="create">
    <div class="top">
      <router-link to="/" class="back">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 20 20">
            <g id="arrow-back"><path d="M20,11H7.8l5.6-5.6L12,4l-8,8l8,8l1.4-1.4L7.8,13H20V11z"/></g>
          </svg>
      </router-link>
      <h3 class="title-top">Create Comment Macro</h3>
    </div>
    <h5>Title</h5>
    <input class="title box"/>
    <h5>Comment</h5>
    <textarea class="comment-edit box"></textarea>
    <router-link to="/" class="create-route">
      <button class="basic-button">Create Macro</button>
    </router-link>
  </div>  
  
</template>

<script>
  export default {
    name: 'create',
  };
</script>

<style>
  .top {
    display: flex;
    margin-bottom: 10px;
  }
  .back {
    display: flex;
    align-items: center;
    border-radius: 30px;
  }
  .back > svg{
    margin: -5px 0 0 3px;
    height: 30px;
    width: 30px;
    fill: #535559;
  }
  .title-top {
    color: #535559;
    align-self: center;
    font-size: 30px;
    line-height: 0;
    padding-left: 30px;
  }
  .create-route {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }
  .create {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
  .title {
    line-height: 30px;
    font-size: 20px;
    display: flex;
    resize: none;
  }
  .comment-edit {
    display: flex;
    flex: 1 1 80%;
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
