<template>
  <div class="prdBackgroud">
      <Row class-name="rowCssF" :gutter="2">
        <Col span="6" class-name="colCss" v-for="prd in prdList" :key="prd.id">
        <div>
          <Card style="height: 390px;border:none">
            <div class="card_title">
              <Icon type="ios-rose" color="#e23a3a" size="18"/>
              <span> S E A J A D E</span>
            </div>
            <div class="prdpic" @click="toPrdLsit(prd.id)">
              <img v-bind:src="prd.picPath">
            </div>
            <div class="price">
              <span>￥300</span>
            </div>
            <div class="prddesc">
              <span>描述，海洋灵玉正版出品，天然玉化材质，假一罚十</span>
            </div>
            <div class="prddesc">
              <Icon type="heart" color="#e23a3a"></Icon>
              <span>好评率：</span><span>99.8%</span>
            </div>
          </Card>

        </div>
        </Col>
      </Row>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          prdList: [
            {
            id:'group1',
            title:'手镯/手链',
            titleEn:'Just love you',
            iconTag:'android-radio-button-off',
            picPath:'http://ce-res.oss-cn-shanghai.aliyuncs.com/group/pic/bracelet/%E6%89%8B%E9%93%BE2.jpg?x-oss-process=style/cq'

          },
            {
              id:'group2',
              title:'玉牌',
              titleEn:'Culture、Connotation',
              iconTag:'social-vimeo',
              picPath:'http://ce-res.oss-cn-shanghai.aliyuncs.com/group/pic/JadeBrand/%E7%89%8C1.jpg?x-oss-process=style/cq'
            },
            {
              id:'group3',
              title:'项链/吊坠',
              titleEn:'Love you to my heart',
              iconTag:'ios-infinite',
              picPath:'http://ce-res.oss-cn-shanghai.aliyuncs.com/group/pic/necklace/%E4%BD%9B6.jpg?x-oss-process=style/cq'
            },
            {
              id:'group4',
              title:'其他',
              titleEn:'More love awaits you',
              iconTag:'ios-infinite',
              picPath:'http://ce-res.oss-cn-shanghai.aliyuncs.com/group/pic/other/bigPrd/bigPrd.jpg?x-oss-process=style/cq'
            }
          ]
        }
      }
    }
</script>

<style scoped>

  .prdBackgroud{
    background: white;
    min-height: 840px;
    overflow: hidden;
    padding: 0 5px;
  }
  .rowCssF{
    height: 400px;
  }
  .colCss{
    margin: 16px 0 0;
  }
  .card_title{
    margin-bottom: 10px;
  }
  .card_title span{
    margin-left: 5px;
    font-family:"Microsoft YaHei";
    font-style: normal;
    font-weight: bold;
  }
  .prdpic{
    height: 200px;
    /*box-shadow: 0 0 7px #000;*/
    cursor: pointer;
  }

  .prdpic img{
    width: 100%;
    height: 100%;
    /*min-width: 180px;*/
  }

  .price{
    margin-top: 10px;
  }
  .price span{
    font-size: 24px;
    color: red;
  }
  .prddesc{
    margin-top: 10px;
  }

  .prddesc span{
    font-family:"Microsoft YaHei";
  }

</style>
