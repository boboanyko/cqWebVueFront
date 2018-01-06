<template>
  <div class="rightQCodeImg">
    <img src="../assets/mine/qcode-min.jpg">

    <p>咨询微信</p>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          msg:'aaa'
        }
      }
    }
</script>

<style scoped>

  .rightQCodeImg{
    width: 100px;
    height: 100px;
    position: fixed;
    top: 300px;
    cursor: pointer;
    text-align: center;
    left: 10px;
  }
  .rightQCodeImg img{
    width: 100%;
    height: 100%;
  }

  .rightQCodeImg p{
    color: red;
    font-size: 18px;
  }

</style>
