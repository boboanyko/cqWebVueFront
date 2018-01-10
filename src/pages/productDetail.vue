<template>
  <div class="productDiv">
    <Row type="flex"  justify="center" align="middle" >
      <Col span="14" class="productCol allWidth">
      <div>
        <div class="prductHeadPicDiv">
          <img :id="cqPrd.id" :src="cqPrd.prdHeadPicPath">
        </div>

        <Row  class="gallery">
          <Col span="4" @mouseover.native="choosePic(cqPrd.id)">
            <img :id="cqPrd.id" :src="cqPrd.prdHeadPicPath">
          </Col>
          <Col span="4" v-for="prdPic in picList" @mouseover.native="choosePic(prdPic.id)" :key="prdPic.id">
            <img :id="prdPic.id" :src="prdPic.prdPicPath">
          </Col>
        </Row>
      </div>

      </Col>
      <br/>
      <Col span="14" class="productDesc allWidth">
      <span class="recommend">海洋灵玉</span>
      <span class="recommend">店长推荐</span>
      <span class="recommend">精品</span>
      <span class="productDescSpan">{{cqPrd.prdDesc}}</span>
      </Col>
      <br/>
      <Col span="14" class="priceCol allWidth">
      <span class="priceNew">￥{{cqPrd.prdPrice}}.00</span>
      <span class="priceOrg">￥{{cqPrd.prdPrice * 1.2}}.00</span>
      </Col>
      <!--<Col span="14">-->
      <!--col-6-->
      <!--</Col>-->

      <Col span="14" class="toQcode allWidth">
      <span>
          客官如看上小灵的产品~，可速速快马加鞭联系微信，点击页面底部，可找到本灵的微信二维码，扫码添加，优惠多多哦~
        </span>
      </Col>
      <Col span="14" class="qcodeCol allWidth">
      <img src="http://ce-res.oss-cn-shanghai.aliyuncs.com/group/common/qcode/boboanyko.png?x-oss-process=style/cq"/>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        picList:[],
        cqPrd:{}
      }
    },
    methods:{
      choosePic:function (picId) {
        let tmpPic = document.getElementById(picId).getAttribute('src');
        console.log(tmpPic);
        document.getElementById('prductHeadPicImg').setAttribute('src',tmpPic);
      },
      getPrdPicList:function (prdId) {
        this.$ajax.get('http://localhost:8080/prd/getPrdPicList.do?prdId='+prdId).then(response =>{
          console.log(response);
          console.log(prdId)
          if(response.data.result === 'SUCCESS'){
            this.picList = response.data.picList;
            this.cqPrd = response.data.cqPrd;
            console.log(this.picList);
          }else{
            console.error(response.reason);
          }
        },response =>{
          console.error("获取数据失败！")
        })
      }
    },
    created(){
      this.getPrdPicList(this.$route.params.productId);
    }
  }
</script>

<style scoped>
  .allWidth{
    width: 605px;
  }
  .productDiv{
    width: 90%;
    margin-left: 5%;
  }

  .productDesc{
    border-top: 1px solid #cacaca;
    padding-top: 20px;
  }

  .productDesc .recommend {
    height: 20px;
    width: 50px;
    background: #e13c13;
    color: white;
    padding: 2px 4px;
    margin-right: 5px;
  }

  .productDesc .productDescSpan{
    font-family: "Microsoft YaHei";
    font-size: 16px;
  }
  .prductHeadPicDiv{
    /*width: 590px;*/
    height: 550px;
    margin: 1%;
    padding: 10px;
    border: 1px solid #cacaca;
  }
  .prductHeadPicDiv img{
    width: 100%;
    height: 100%;
  }

  .priceCol{
    margin-top: 10px;
  }
  .priceCol .priceNew{
    font-family: "Microsoft YaHei";
    font-size: 24px;
    color: #e13c13;
    margin-right: 20px;
  }

  .priceCol .priceOrg{
    font-family: "Microsoft YaHei";
    font-size: 16px;
    color: #9ea7b4;
    text-decoration:line-through;
  }

  .gallery{
    margin-bottom: 10px;
  }
  .gallery div:hover{
    border: 2px solid #e13c13;
    z-index: 2;
  }
  .gallery div img{
    width: 90%;
    height: 90%;
    margin: 5%;
  }

  .toQcode{
    border-top: 1px solid #cacaca;
    padding-top: 20px;
  }

  .toQcode span{
    font-family: "Microsoft YaHei";
    font-size: 16px;
    color: #363e4f;
  }

  .qcodeCol{
    margin-top: 20px;
  }

  .qcodeCol img{
    margin-left: 20%;
    width: 60%;
  }
</style>
