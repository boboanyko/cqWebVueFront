<template>
    <Row :gutter="16" class-name="rowCssF">
      <Col span="12" class-name="colCss" v-for="group in groupList" :key="group.id">
      <div>
        <Card style="height: 390px">
          <p slot="title">
            <Icon :type="group.iconTag"></Icon>
            {{group.title}}
            {{group.titleEn}}
          </p>
          <div class="grouppic" @click="toPrdLsit(group.id)">
            <img v-bind:src="group.picPath">
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
          groupList: [
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
      },
      methods:{
        toPrdLsit:function (id) {
          window.location.href="/prdList/2/" + id;
        }
      }
    }
</script>

<style scoped>
  .rowCssF{
    height: 400px;
  }
  .colCss{
    margin: 16px 0 0;
    /*max-width: 430px;*/
  }

  .grouppic{
    height: 310px;
    /*border: 1px solid #363e4f;*/
    box-shadow: 0 0 7px #000;
    cursor: pointer;
  }

  .grouppic img{
    /*max-width:100%;*/
    /*max-height:100%;*/
    /*width:auto;*/
    /*height:auto;*/
    width:100%;
    height:100%;
  }
</style>
