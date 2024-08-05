<template>
  <div style="background-color;display: flex;flex-direction: column;min-height: 5000px;">

    <div>
      <img src="@/assets/Dynamic/channel.png" style="width: 100%" />
    </div>

    <div style=" background-color: transparent;">
      <!-- 主体 -->


      <div style="display: flex; justify-content: center">
        <div
          style="
            background-color: violet;
            margin-top: 120px;
            height: 400px;
            width: 550px;
            position: relative;
          "
        >
          <img
            src="@/assets/Dynamic/communication.jpg"
            style="width: 100%; height: 100%"
          />

          <div
            style="position: absolute; left: 0; bottom: 0; line-height: 0px"
          ></div>

          <p
            style="
              color: red;
              font-weight: 700;
              transform: skew(-10deg);
              font-size: 40px;
            "
          ></p>
        </div>
      </div>
      <!-- 上半部分 -->



      <div class="body-block">

        <div style="height: 180px; width: 800px; background-color: ; display: flex; margin-top: 200px;
        align-items: center; position: relative;background-color:transparent;
        cursor: pointer;" id="line">

         
          <div style="position: absolute;background-color: whitesmoke;
                 border-style: groove;border-bottom: 0;border-left:0;border-right: 0;
                 border-color: blue;height: 180px;width: 180px;z-index:-1;" class="move">
                 
           </div>
          <!-- 滚动盒子 -->
          


          <div style="background-color: ;height: 180px;width: 180px;text-align: center;
          padding-top: 100px;" id="bb1">
            <img src="@/assets/Dynamic/d1.png" width="48px" style="pointer-events: none;"/>
            <p style="pointer-events: none;">行业动态</p>
          </div>
          <div style="background-color: ;height: 100%;width: 180px;text-align: center;
          padding-top: 100px;"  id="bb2">
            <img src="@/assets/Dynamic/d2.png" width="48px" style="pointer-events: none;" />
            <p style="pointer-events: none;">产业咨讯</p>
          </div>
          <div style="background-color: ;height: 100%;width: 180px;text-align: center;
          padding-top: 100px; "  id="bb3">
            <img src="@/assets/Dynamic/d3.png" width="48px" style="pointer-events: none;"/>
            <p style="pointer-events: none;">产品动态</p>
          </div>
          <div style="background-color: ;height: 100%;width: 180px;text-align: center;
          padding-top: 100px;"  id="bb4">
            <img src="@/assets/Dynamic/d4.png" width="48px" style="pointer-events: none;"/>
            <p style="pointer-events: none;">团队文化</p>
          </div>

        </div>
        <!-- 图片 -->
      </div>



        <div style="display: flex; flex-direction: column;background-color:transparent; margin-left: 40px; margin-top: 20px;
        " >

          <div style="display: flex;justify-content:space-between;" v-for="(items,index) in data[page]" :key="index" v-show="index < loaded"
          id="switch"> 

            <div id="imageblock" style="max-width: 610px;">

            <p style="font-size: 20px; margin-top: 0px;">{{items.title}}</p>
            <p style="color: #888;">{{ items.time }}</p>
            <p style="margin-top: 80px; color: skyblue;font-size: 14px;">查看详情 
              <img :src="requireImg(data[0][0].imgtitle)" style="width: 20px;" id="arrow"/></p>
            </div>
            <!-- 文字 -->

            <div style="margin-right: 40px;">
              <img :src="requireImg(items.image)" :style="`width:460px; height:260px`"/>
            </div>
            <!-- 里图片 -->
          </div>
          
          <p style="text-align: center; font-size: 20px; color: blue;margin-right: 30px;
          cursor: pointer;" id="more" v-if="loaded == 5" @click="()=>{loaded=20}">查看更多</p>
          <!-- 必须使用v-on绑定事件，但是不幸的是如果载入时check变量为false，该button就会隐藏，即使后期check变为true而该button又显示出来，
            但是test按钮的click事件却只有在页面加载的时候绑定(不幸的是该button没有在dom中形成而导致事件绑定失败)，所以click事件不会响应，
            所以使用v-if绑定的事件需要使用另外一种方式来绑定click事件：v-on指令，通过v-on:click=“xx函数”来实现-->
          <!-- 显示区域 -->
          <p style="text-align: center; font-size: 20px; color: grey;margin-right: 30px;" v-else>暂无更多</p>
          <!-- 隐藏区域 -->
          
        </div>
        <!-- 文字 -->







    </div>



  </div>
</template>

<script>

import dynamicSub from '../subpages/dynamic-sub.vue';
import { ref,defineAsyncComponent,onMounted } from 'vue';
import arrow from '../../assets/Dynamic/arrow.png';
import { fadeIn, fadeInMultiple } from "../../utils/motion";

export default {
  
  setup(){

    const page = ref(0)
    //行业动态页数
    const loaded = ref(5)
    //每页展示个数
    const requireImg = (imgPath) => {
      return new URL(`../../assets/Dynamic/${imgPath}`, import.meta.url).href;
    };

    //获取图片地址
    const buttons = ["行业动态","产业咨讯","产品动态","团队文化"]
    //图标
    const data = [ 
      [
      {
        title:'我与自贸港这两年|吴敏：为自贸港封关运作提供信息化保障',
        time:"2022-06-01 19:00:00",
        image:"subimages/sub1.jpg",
        imgtitle:"arrow.png"
      },
      {
        title:'升级版“博鳌服务台”带你这样认识海南',
        time:"2022-04-18 08:00:00",
        image:"subimages/sub2.jpg",
        imgtitle:"arrow.png"
      },   
      {
        title:'回访丨“海易办”让办事更容易',
        time:"2022-04-12 18:10:00",
        image:"subimages/sub3.jpg"
      },
      {
        title:'数字海南公司召开2022年工作研讨会',
        time:"2022-03-17 18:29:01",
        image:"subimages/sub4.png"
      }, 
      {
        title:'数据集成创新助力疫情防控',
        time:"2022-03-04 08:00:00",
        image:"subimages/sub5.jpg"
      }, 
      {
        title:'省大数据产业联盟会员企业走访数字海南有限公司',
        time:"2021-06-17 18:15:00",
        image:"subimages/sub6.png"
      },
      {
        title:'数字海南召开工作部署会议 贯彻落实吴成董事长讲话精神',
        time:"2021-05-24 18:08:02",
        image:"subimages/sub7.png"
      }, 
      {
        title:'数字海南携手海南通服，助力海南信息化、数字化建设',
        time:"2021-01-27 17:30:05",
        image:"subimages/sub8.png"
      }, 
      {
        title:'数字海南与海南银行签署战略合作协议',
        time:"2020-12-15 18:09:020",
        image:"subimages/sub9.png"
      },
      {
        title:'多彩贵州网一行赴数字海南交流',
        time:"2020-11-11 18:01:09",
        image:"subimages/sub10.png"},
      ],
      [ 
        {
        title:'数字海南有限公司 以数字化手段构筑疫情防控坚实屏障',
        time:"2022-08-13 08:00:00",
        image:"subimages1/sub1.jpg",
        imgtitle:"arrow.png"
        },
        {
        title:'数字海南党支部组织学习习近平在庆祝中国共产主义青年团成立100周年大会上的重要讲话和省第八次党代会精神',
        time:"2022-05-23 14:00:00",
        image:"subimages1/sub2.jpg",
        imgtitle:"arrow.png"
        },
        {
        title:'上门答疑释惑 破解发展难题',
        time:"2022-05-08 20:00:00",
        image:"subimages1/sub3.jpg",
        imgtitle:"arrow.png"
        },
        {
        title:'新春走基层 | 守候“亮码”出行海南健康码团队24小时在线值班答疑解惑',
        time:"2022-01-29 18:00:00",
        image:"subimages1/sub4.jpg",
        imgtitle:"arrow.png"
        },
        {
        title:'码上办事平台上线一周年： 2355万用户感受政务服务“掌上办”',
        time:"2021-06-08 18:00:00",
        image:"subimages1/sub5.jpg",
        imgtitle:"arrow.png"
        },
        {
        title:'探秘城市“智慧大脑” 南国小记者在海南省大数据管理局长知识了！',
        time:"2021-06-08 18:00:00",
        image:"subimages1/sub6.jpg",
        imgtitle:"arrow.png"
        },
        {
        title:'数字海南有限公司携手河南农业大学 探索农业数字化发展新模式',
        time:"2020-11-11 18:10:08",
        image:"subimages1/sub7.png",
        imgtitle:"arrow.png"
        },
      
      ]
      //数据


    ]

    onMounted(()=>{

      {
      var line = document.querySelector("#line")
      var box = document.querySelector(".move")
      line.addEventListener("click",function(e){
        box.style.transform = `translateX(${e.target.offsetLeft}px)`
        box.style.transition = "all 0.4s"

        page.value=e.target.id[2]-1
        loaded.value = 5
        fadeIn("#switch",300,false,"#line")

      })

      

      }
      //改变主题

      var block = document.querySelector("#switch")
      console.log(block)
      fadeIn("#switch",300,true)


    })



    return{
      loaded,data,requireImg,arrow,page,buttons
    }




  },
  
  components:{
    dynamicSub,
  },


};



</script>

<style lang="scss" scoped>

#imageblock{
  height: 310px;
  background: transparent;
  display: flex; 
  flex-direction: column;
}

#arrow{
  margin-left: 5px;
  cursor:pointer;
  &:hover{
    transform: translateX(10px);
    transition: all 1s;
  }
}

</style>
