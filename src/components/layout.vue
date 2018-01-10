<style>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    left: 20px;
    float:left;
    position: absolute;
    top: 7px;
  }
  .logoImg{
    height: 70px;
    width: 70px;
  }

  .layout-title{
    position: absolute;
    top: 15px;
    left:100px;
    /*line-height: 60px;*/
    color:white;
    /*font-family: "Microsoft Himalaya";*/
    font-family: "Microsoft YaHei";
    font-size: 20px;
    cursor: default;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
  }

  .layout-content{
    margin: 80px auto 0 auto ;
    min-height: 840px;
    width: 62%;
    overflow: hidden;
    background: #f5f7f9;
    border-radius: 4px;
    padding-bottom: 60px;
  }

  .layout-copy{
    text-align: center;
    color: #9ea7b4;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #495060;
    height: 50px;
    display: inline-block;
  }

  .headerHeight{
    height:80px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .footerItem{
    height: 50px;
    padding: 17px 0;
  }

  .top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }

</style>
<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" :active-name="activeVar" class="headerHeight">
      <div class="layout-logo"><img class="logoImg" src="../assets/cqIcon.png"/></div>
      <div class="layout-title">海洋灵玉</div>
      <div class="layout-nav" >
        <MenuItem name="1" @click.native="toGroupList('/1/')">
          <Icon type="home"></Icon>
          主页
        </MenuItem>
        <MenuItem name="2" @click.native="toGroupList('/prdList/2/group')">
          <Icon type="heart"></Icon>
          结缘堂
        </MenuItem>
        <MenuItem name="3">
          <Icon type="videocamera"></Icon>
          加工影像
        </MenuItem>
      </div>
    </Menu>
    <div class="layout-content">

        <keep-alive>
          <router-view></router-view>
        </keep-alive>



    </div>


    <div class="layout-copy" >
      <MenuItem name="2" class="footerItem" @click.native="toBottom()">
        <Icon type="email"></Icon>
        微信号 : boboanyko
      </MenuItem>
    </div>
    <rightqode></rightqode>
    <BackTop :height="100" :bottom="100">
    </BackTop>
  </div>
</template>
<script>
  import rightqode from '../pages/rightQCode'

  export default {
    components:{rightqode},
    data() {
      return {
        msg: 'aaa',
        activeVar:JSON.stringify(this.$route.params) === '{}'?1:this.$route.params.active
      }
    },
    methods:{
      toBottom: function () {
        document.body.scrollTop=document.body.clientHeight;
      },
      toGroupList:function (url) {
        window.location.href=url;
      },


    },
    mounted () {
      // console.log(JSON.stringify(this.$route.params) === '{}');
      // console.log(this.$data.activeVar);
      // this.activeVar = this.$route.params.active;
    }
  }
</script>
