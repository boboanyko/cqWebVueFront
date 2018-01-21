<template>
  <div class="prdBackgroud">
      <Row class-name="rowCssF" :gutter="2" >
        <Col span="6" class-name="colCss" v-for="prd in prdList" :key="prd.id">
        <div>
          <Card style="height: 400px;border:none" @click.native="toProductDetail(prd.id)">
            <div class="card_title">
              <Icon type="ios-rose" color="#e23a3a" size="18"/>
              <span> S E A J A D E</span>
            </div>
            <div class="prdpic" @click="toPrdLsit(prd.id)">
              <img v-bind:src="prd.prdHeadPicPath">
            </div>
            <div class="price">
              <span>￥{{prd.prdPrice}}.00</span>
            </div>
            <div class="prddesc">
              <span>{{prd.prdDesc}}</span>
            </div>
            <div class="prddesc">
              <Icon type="heart" color="#e23a3a"></Icon>
              <span>好评率：</span><span>{{prd.prdRate}}%</span>
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
          prdList:[]

        }
      },
      methods:{
        toProductDetail:function (id) {
          window.location.href='/prdDetail/2/'+ id +'/'
        },
        getPrdList:function () {
          this.$ajax.get('http://116.196.94.79:8080/cqWebVue/prd/getPrdList').then(response =>{
            console.log(response);

            if(response.data.result === 'SUCCESS'){
              this.prdList = response.data.cqPrdList;
            }else{
              console.error(response.reason);
            }
          },response =>{
            console.error("获取数据失败！")
          })
        }
      },
      created(){
        this.getPrdList();
        // console.log(this.prdList);
      }
    }
</script>

<style scoped>

  .prdBackgroud{
    background: white;
    min-height: 840px;
    overflow: hidden;
    padding: 0 5px 10px;
    max-width: 80%;
  }
  .rowCssF{
    /*height: 400px;*/
  }
  .colCss{
    margin: 16px 0 0;
    min-width: 220px;
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
    margin-top: 6px;
  }

  .prddesc span{
    font-family:"Microsoft YaHei";
  }

</style>
