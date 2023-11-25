<template>
  <div>
    <div>
      <img src="@/assets/Product/possibility.png" style="width: 100%" />
    </div>
    <!-- 主题图片 -->

    <div class="body-block">
      <!-- 给这个div加height属性会导致底部的div失效 -->

      <div>
        <p class="title1">1个基础设施运维保障</p>
      </div>
      <!-- 文本div -->

      <div
        style="display: flex; flex-direction: row; gap: 100px; margin-top: 20px" id="textandimage1">
        <img
          src="@/assets/Product/requirement.png"
          style="width: 45%; margin-top: 20px; height: 88%"
        />
        <!-- 图片 -->

        <div class="product-small-font">
          <p style="font-size: 24px; color: black">
            基础设施运维及信息安全保障机制
          </p>
          <p>
            配合政府数字化转型实际需求，以集约化建设思路，构建全省统一的电子政务公共基础设施运维平台，提供信息化基础保障，提升电子政务基础性服务能力，为政务部门履行公共服务、社会管理、市场监管和宏观调控等职能提供有效支撑。
            构建了稳定的1-2-3线技术支撑团队以及成熟的运维保障机制，保证系统稳定运行，延长系统使用生命周期，保障前期的建设投资充分发挥价值，增强行政效率，降低行政成本。
          </p>
          <ul
            style="padding-left: 0px; line-height: 20px; list-style-type: none"
          >
            <li>
              服务接入
              7*24小时统一呼叫中心坐席、多样化服务接入渠道、线上线下有效协同、专家人
              才库建设；
            </li>
            <li>统一运维 统一运维管理、统一运维监控；</li>
            <li>资产管理 形成了资产管理规范、备件库管理、供应商管理；</li>
            <li>
              规范流程
              制定了客服服务规范、运维管理规范、知识库管理规范、SLA和交付管理规范、运维外包管理规范；
            </li>
          </ul>
        </div>
        <!-- 文本区 -->
      </div>
      <!-- 图片和文字 -->

      <div
        style="height: 700px; background-color: transparent; margin-top: 95px" id = "textandimage2"
      >
        <div>
          <p class="title1">2个能力支撑平台</p>
        </div>

        <div
          style="
            display: flex;
            flex-direction: row;
            position: relative;
            margin-top: 60px;
          " 
        >
          <div
            style="
              position: absolute;
              border-style: groove;
              border-bottom: 0;
              border-left: 0;
              border-right: 1;
              border-top: 0;
              border-color: rgb(73, 145, 227);
              height: 30px;
              width: 184px;
              pointer-events: none;
            "
            id="slide1"
          ></div>
          <!--滑动背景 -->

          <div
            style="
              background-color: ;
              padding-left: 40px;
              width: 270px;
              font-size: 24px;
              height: 550px;
              border-color: rgb(225, 237, 249);
              border-width: 1px;
              border-style: groove;
              border-left: 0;
              border-top: 0;
              border-bottom: 0;
            "
            id="box1"
          >
            <div style="cursor: pointer" id="button1">
              <p
                style="
                  margin-top: 0px;
                  cursor: pointer;
                  color: rgb(73, 145, 227);
                "
                id="word1"
                @click="change"
              >
                政务中心
              </p>
            </div>

            <div id="button2" style="margin-top: 40px">
              <p style="cursor: pointer" id="word2" @click="change">数据中心</p>
            </div>
          </div>

          <div
            style="
              margin-left: 55px;
              display: flex;
              flex-direction: column;
              background-color: transparent;
              margin-right: 150px;
              width: 1500px;
            "
            class="product-small-font"
          >
            <img style="width: 100%" :src="bg2" id="i1" />

            <p>{{ msg[number] }}</p>

            <div style="line-height: 35px" id="p1">
              <p>·全省支撑 面向全省各类政务服务系统提供支撑；</p>
              <p>·事项统管 全省政务事项标准管理平台，提供事项统一接入管理；</p>
              <p>
                ·能力输出
                支持支付、邮寄、电子签章、电子证照、电子签名等政务基础能力输出；
              </p>
              <p>·业务并联 支持跨系统、跨部门事项表单融合，实现一件事办理；</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 2个能力 -->

      <div
        style="height: 500px; background-color: transparent; margin-top: 300px" id = "textandimage3"
      >
        <div>
          <p class="title1">2个服务输出端</p>
        </div>

        <div style="display: flex; flex-direction: row">
          <div
            style="
              height: 270px;
              width: 48%;
              background-color: #0b6dff;
              display: flex;
              border-width: 5px;
              border-color: #0b6dff;
              border-style: groove;
              border-top: 0;
              border-right: 0;
              border-bottom: 0;
            "
            id="responsive1"
          >
            <div
              style="
                background-color: transparent;
                margin-top: 0px;
                padding-left: 30px;
                font-size: 14px;
                color: white;
                width: 800px;
              "
              id="responsive1-text"
            >
              <p style="font-size: 22px">海易办</p>
              <p style="margin-top: -10px">全岛政务生活服务聚合平台</p>

              <div id="hidden1">
                <p>
                  以创新型的交互模式，整合各类实体卡/证及各类二维码，融合政务、公共服务、生活、购物等场景，实现凭码通行、凭码消费、
                  码上亮证等服务
                </p>

                <div style="display: flex">
                  <img src="@/assets/Code/c3.png" width="80px" height="80px" />
                  <p
                    style="
                      padding-top: 45px;
                      padding-left: 5px;
                      font-size: 10px;
                    "
                  >
                    支付宝/微信<br />扫一扫立即体验
                  </p>
                </div>
              </div>
              <!-- 隐藏部分 -->
            </div>

            <div style="background-color: transparent; width: 550px">
              <img
                src="@/assets/Product/phone3.png/"
                height="270px"
                id="responsive1-image"
              />
            </div>
          </div>
          <!-- 海易办 -->

          <div
            style="
              height: 270px;
              width: 48%;
              background-color: #0b6dff;
              display: flex;
              margin-left: 50px;
              border-width: 5px;
              border-color: #0b6dff;
              border-style: groove;
              border-top: 0;
              border-right: 0;
              border-bottom: 0;
            "
            id="responsive2"
          >
            <div
              style="
                background-color: transparent;
                margin-top: 0px;
                padding-left: 30px;
                font-size: 14px;
                width: 800px;
                color: white;
              "
              id="responsive2-text"
            >
              <p style="font-size: 22px">海政通</p>
              <p style="margin-top: -10px">全省政务掌上办公服务平台</p>

              <div id="hidden2">
                <p>
                  支持政务工作人员跨部门、跨系统、跨地域、跨层级、跨业务协同办公，实现政府各级部门高效沟通
                </p>

                <div style="display: flex; margin-top: 38px">
                  <img
                    src="@/assets/Product/qr1.png"
                    width="80px"
                    height="80px"
                  />
                  <p
                    style="
                      padding-top: 45px;
                      padding-left: 5px;
                      font-size: 10px;
                    "
                  >
                    支付宝/微信<br />扫一扫立即体验
                  </p>
                </div>
                <!-- QR Coe -->
              </div>
            </div>

            <div style="background-color: transparent; width: 550px">
              <img
                src="@/assets/Product/phone4.png/"
                height="270px"
                id="responsive2-image"
              />
            </div>
          </div>
          <!-- 海政通 -->
        </div>
      </div>
      <!-- 两个输出服务端 -->

      <div style="background-color: transparent; height: 1900px" id = "textandimage4">
        <div>
          <p class="title1">N个行业智能应用</p>
        </div>

        <div style="display: flex; flex-direction: column; margin-top: 70px">

          <div style="display: flex; flex-direction: row; margin-left: 20px">

            <div id="smallbox">
              <img src="@/assets/Product/nine1.png/" width="100%" />
              <div id="smallerbox">
                <p>海南省一体化在线政务服务平台</p>
                <p class="product-small-font">
                  打造海南省一体化在线政务服务平台，实现全省政务服务“一网通办”，深化“放管服”改革和极简审批改革，不断提升海南省政务服务水平，优化营商环境。
                </p>
              </div>
            </div>

            <div id="smallbox">
              <img src="@/assets/Product/nine2.png/" width="100%" />
              <div id="smallerbox">
                <p>海南省人才服务一体化平台（一期）</p>
                <p class="product-small-font">
                  全国首创的全省集中管理的人才大数据服务平台，利用大数据手段实现数与人的精准匹配。建立人才数字标签管理机制，绘制全省人才全息地图和画像。
                </p>
              </div>
            </div>

            <div id="smallbox">
              <img src="@/assets/Product/nine3.png/" width="100%" />
              <div id="smallerbox">
                <p>海南省市场监管综合业务平台（二期）</p>
                <p class="product-small-font">
                  汇聚省级市场监管业务全量数据，打造市场准入、市场监管、行政执法、综合管理、市场监管基础设施五大业务平台，形成智慧监管体系。
                </p>
              </div>
            </div>
          </div>
          <!-- 第一行 -->

          <div
            style="
              display: flex;
              flex-direction: row;
              margin-top: 30px;
              margin-left: 20px;
            "
          >
            <div id="smallbox">
              <img src="@/assets/Product/nine4.png/" width="100%" />
              <div id="smallerbox">
                <p>“互联网+监管”系统</p>
                <p class="product-small-font">
                  监管事项全覆盖、监管过程全纪录、监管数据可共享、
                  支撑“双随机、一公开”监管、重点监管、信用监管和综合监管、协同监管、智慧监管事前事中事后。
                </p>
              </div>
            </div>

            <div id="smallbox">
              <img src="@/assets/Product/nine5.png/" width="100%" />
              <div id="smallerbox">
                <p>海南省工程建设项目审批管理系统</p>
                <p class="product-small-font">
                  围绕工程建设项目领域“全流程、全覆盖”改革，进行了统一审批流程、统一信息数据平台、统一审批管理体系、统一监管方式“四个统一”的建设。
                </p>
              </div>
            </div>

            <div id="smallbox">
              <img src="@/assets/Product/nine6.png/" width="100%" />
              <div id="smallerbox">
                <p>海南国际投资单一窗口</p>
                <p class="product-small-font">
                  全国首家投资者全流程“套餐式”服务平台。投资便利化系统集成创新，将投资业务审批系统整合到一个窗口，实现企业开办最多跑一次，最快2日办结。
                </p>
              </div>
            </div>
          </div>

          <div
            style="
              display: flex;
              flex-direction: row;
              margin-top: 30px;
              margin-left: 20px;
              background-color: ;
            "
          >
            <div id="smallbox">
              <img src="@/assets/Product/nine7.png/" width="100%" />
              <div id="smallerbox">
                <p>海南省健康一码通系统（健康码）</p>
                <p class="product-small-font">
                  汇聚省级市场监管业务全量数据，打造市场准入、市场监管、行政执法、综合管理、市场监管基础设施五大业务平台，形成智慧监管体系。
                </p>
              </div>
            </div>
            <div id="smallbox">
              <img src="@/assets/Product/nine8.png/" width="100%" />
              <div id="smallerbox">
                <p>中小学新生入学学位申请应用</p>
                <p class="product-small-font">
                  打破传统繁杂而冗长的线下申请模式，突破创新，协同资规、住建、公安、卫健等多部门信息自动对比校验，申请信息的审核过程缩短至秒级。
                </p>
              </div>
            </div>
          </div>
          <div style="margin-top: 75px; " id = "textandimage5">
            <p style="font-size: 24px;">我们的客户</p>

            <div style="display: flex;gap: 20px;">

              <div class="customerbox" style="padding-left: 20px;">
                  <p>中共海南省委人才发展局</p>
                  <p>海南省旅游和文化广电体育厅</p>
              </div>

              <div class="customerbox">
                  <p>海南省商务厅</p>
                  <p>海南省人力资源开发局</p>
              </div>
              <div class="customerbox">
                  <p>海南省大数据管理局</p>
                  <p>海南省社会保障卡一卡通中心</p>
              </div>  
              <div class="customerbox">
                  <p>海南省市场监督管理局</p>
              </div>

            </div>

          
          </div>
          <!-- 我们的客户 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { bg2 } from "../../assets/Product";
import { bg } from "../../assets/Product";
import { fadeIn, fadeInMultiple } from "../../utils/motion";

export default {

  setup() {
    var number = ref(0);
    const msg = [
      "对政府部门提供的政务服务共性能力支撑平台，通过构建微服务开放平台，帮助实现跨技术平台、跨应用系统、跨部门组织的业务能力互通，支持业务能力的统一数字化管理和控制。",
      "政务大数据公共服务平台的建设按照“模块（组件化）规划、分层构建”的思想，具有“松散耦合、结构开放、功能可扩展”的优势，平台承载全省政务公共数据汇聚、存储计算、治理、分析挖掘、数据管理、数据服务等全流程的功能，建立“政策解析-模型分析-数据产品”流水线，为社会公众提供数据产品服务，实现数据的“全面化、实时化、标准化、关系化、标签化、指标化、资产化、安全化及服务化”，最终赋能业务，同时平台也提供了租户服务能力，包含了数据采集、数据存储计算、数据融合分析、数据资产管理、数据分析、应用支撑、数据服务能力，为全省大数据公共服务提供支撑。",
    ];
    var imgurl = ["/bg2.png", "@/assets/Product/bg1.png"];
    //定义数据

    const change = () => {
      var i1 = document.querySelector("#i1");
      var p1 = document.querySelector("#p1");
      if (String(i1.src).substring(41) == "bg2.png") {
        i1.src = bg;
        number.value = 1;
        p1.style.display = "none";
      } else {
        i1.src = bg2;
        number.value = 0;
        p1.style.display = "initial";
      }
    };
    //改变图片(2个能力支撑平台)

    //定义方法

    return {
      msg,
      number,
      imgurl,
      change,
      bg,
      bg2,
    };
  },

  mounted() {


    fadeIn('#textandimage1',500,true)
    fadeIn('#textandimage2',500,true)
    fadeIn('#textandimage3',700,true)
    fadeIn('#textandimage4',500,true)
    fadeIn('#textandimage5',500,true)

    //传入动画

    {
      var slide1 = document.querySelector("#slide1");
      var button1 = document.querySelector("#button1");
      var button2 = document.querySelector("#button2");
      var word1 = document.querySelector("#word1");
      var word2 = document.querySelector("#word2");

      button1.addEventListener("click", function () {
        slide1.style.transform = "translateY(0px)";
        word1.style.color = "rgb(73, 145, 227)";
        word2.style.color = "";
      });

      button2.addEventListener("click", function () {
        slide1.style.transform = "translateY(75px)";
        slide1.style.transition = "all 0.5s";
        word2.style.color = "rgb(73, 145, 227)";
        word1.style.color = "";
      });
    }

    //2个能力 (上下滚动条和变色)

    {
      var responsive1 = document.querySelector("#responsive1");
      var responsive2 = document.querySelector("#responsive2");

      var responsive1text = document.querySelector("#responsive1-text");
      var responsive1image = document.querySelector("#responsive1-image");
      var hidden1 = document.querySelector("#hidden1");

      var responsive2text = document.querySelector("#responsive2-text");
      var responsive2image = document.querySelector("#responsive2-image");
      var hidden2 = document.querySelector("#hidden2");
    }
    //定义盒子变量

    responsive2.addEventListener("mouseenter", function (e) {
      responsive1.style.backgroundColor = "white";
      responsive1.style.boxShadow = "0px 2px 15px 0px rgba(11,63,141,0.2)";
      responsive1text.style.color = "black";
      responsive1text.style.width = "100px";
      responsive1image.style.display = "none";
      hidden1.style.display = "none";
      responsive1.style.transition = "all 0.5s";
      //改变第一个盒子

      responsive2.style.backgroundColor = "#0b6dff";
      responsive2.style.boxShadow = "";
      responsive2text.style.color = "white";
      responsive2text.style.width = "800px";
      hidden2.style.display = "initial";
      responsive2image.style.display = "initial";
      responsive2.style.transition = "all 0.5s";
      //还原第二个盒子
    });

    responsive1.addEventListener("mouseenter", function (e) {
      responsive2.style.backgroundColor = "white";
      responsive2.style.boxShadow = "0px 2px 15px 0px rgba(11,63,141,0.2)";
      responsive2text.style.color = "black";
      responsive2text.style.width = "100px";
      responsive2image.style.display = "none";
      hidden2.style.display = "none";
      responsive2.style.transition = "all 0.5s";
      //改变第二个盒子

      responsive1.style.backgroundColor = "#0b6dff";
      responsive1.style.boxShadow = "";
      responsive1text.style.color = "white";
      responsive1text.style.width = "800px";
      hidden1.style.display = "initial";
      responsive1image.style.display = "initial";
      responsive1.style.transition = "all 0.5s";
      //还原第一个盒子
    });
    //盒子切换


   
  },
};
</script>

<style lang="scss" scoped>

ul li{
  margin-bottom: 30px;
  &:beofre{
    content: "•";
    font-size: 7pt;
  }
}
//文本中

#smallbox {
  @include boxModel(31%,300px,$mr:20px,$fd:column);
  box-shadow: 3px 2px 15px 2px rgba(11, 63, 141, 0.2);
  #smallerbox{
    padding-left: 20px;
  }
  &:hover{
    box-shadow: 3px 2px 15px 10px rgba(11, 63, 141, 0.2);
    transform: translate(0px, -10px);
    transition: all 0.3s;
  }
}
//9格子

#word2:hover {
  color: rgb(73, 145, 227);
}
#word1:hover {
  color: rgb(73, 145, 227);
}
//2个中心

.title1 {
  font-size: 30px;
  margin-top: 0px;
}
//标题

.customerbox{
  @include boxModel($w:280px,$h:150px,$d:flex,$fd:column);
  p{
    color:$paragraph-font-color;
    font-size:18px;
    margin-top:10px
  }
}
//我们的客户




</style>
