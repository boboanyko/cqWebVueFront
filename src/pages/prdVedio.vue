<template>
    <Row :gutter="16" class-name="rowCssF">
      <Col span="8" class-name="colCss" v-for="film in filmList" :key="film.id">
      <div>
        <Card style="height: 490px;">
          <p slot="title">
            {{film.filmName}} -
            {{film.filmDesc}}
          </p>
          <div class="filmDiv">
            <!--<a v-bind:href="film.filmPath" target="_blank"></a>-->
            <video  :id="film.id" controls="controls" @loadeddata.native="getFirstVedioPic(film.id)">
              <source v-bind:src="film.filmPath" type="video/mp4">
            </video>
          </div>
        </Card>

      </div>
      </Col>

    </Row>
</template>

<script>
    export default {
      data() {
        return {
          filmList: []
        }
      },
      methods:{

        getPrdFilmList:function () {
          this.$ajax.get('http://116.196.94.79:8080/cqWebVue/prd/getPrdFilmList').then(response =>{
          // this.$ajax.get('http://localhost:8080/prd/getPrdFilmList').then(response =>{
            console.log(response);
            if(response.data.result === 'SUCCESS'){
              this.filmList = response.data.cqPrdFilmList;
              console.log(this.filmList);
            }else{
              console.error(response.reason);
            }
          },response =>{
            console.error("获取数据失败！")
          })
        }
      },
      created(){
        this.getPrdFilmList();
      },
      mounted(){
      }
    }
</script>

<style scoped>
  .rowCssF{
    /*height: 500px; */
    width: 100%;
  }
  .colCss{
    margin: 16px 0 0;
    /*max-width: 430px;*/
    min-width: 321px;
  }

  .filmDiv a{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    text-decoration: none;
    color: #fff;
    z-index: 2;
  }
  .filmDiv video{
    width: 100%;
    height: 410px;
  }
  .filmDiv img{
    /*max-width:100%;*/
    /*max-height:100%;*/
    /*width:auto;*/
    /*height:auto;*/
    width:100%;
    height:100%;
  }
</style>
