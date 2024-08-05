<template>
  <div>
    <div>
      <img src="@/assets/Coopearation/bg4.png" style="width: 100%" />
    </div>
    <!-- 背景 -->

    <div class="body-block" style="margin-top: 0px;">
      <div
        style=" margin-top: 120px; background-color: transparent"
      >
        <div class="product-small-font"  id="box1">
          <p style="font-size: 24px; line-height: 0px; font-weight: 500;color:black; ">
            大数据生态的凝聚者
          </p>
          <p>
            构建可持续发展的生态体系，让广大合作伙伴实现资源共享、能力互通、互利共赢。共同打造更具竞争力的行业解决方案，为客户创造价值。
          </p>
        </div>
        <!-- 小文本 -->
        <img src="@/assets/Coopearation/graph.png" style="width: 68%" />
        <!-- 小背景1 -->
      </div>
      <!-- 文本 -->







<div class="container" style="display: flex; justify-content: flex-end; margin-top: 95px; ">
        

        

        <div >
            <p style="line-height: 35px; font-size: 15px">
              第二届 <br /><span style="font-size: 22px"
                >海南大数据创新应用大赛</span
              >
            </p>
            <p style="">105万元奖金 1664支参赛团队</p>
            <p style="color: #888">
              为释放技术创新红利，数字海南承办第二届海南大数据创新应用大赛，旨在吸引全国大数据优秀应用落地海南。
              大赛将“海南人才知识图谱构建”作为智能算法赛的赛题，并组织“农业”、“教育就业”、“医疗健康”应用创新赛，与由国内科研院所、企业、省直单位的专家学者组成的评委团保障了赛事的公平、合理、专业。
            </p>
            <p style="color: #888">
              最终海南新境界荣获算法赛冠军，“农业”、“教育就业”、“医疗健康”的金奖分别由海南普适智能科技有限公司的橡胶林智能管理平台、广州影新教育科技有限公司的影新AR奇妙学堂、上海普现医疗科技有限公司的基于大数据模型的DRG分组应用项目获得。
            </p>
        </div>
<img
          src="@/assets/Coopearation/graph2.png" 
        />
      </div>
      <!-- 第二部分 -->







      <div style=" background-color: transparent;display: flex; flex-direction: column;position: relative; margin-bottom:10%">

        <div id="bj4">
            <img src="@/assets/Coopearation/img1.jpg" />
        </div>

        <div style="position: absolute;left: 50px; top:270px;">
          <p style="font-size: 22px; color: white;">创新性人才的培养者</p>
          <p style="color: white; font-size: 14px;">优化人才培养模式，促进信息化产业人才聚集，推动重点产业领域的产教融合， 为全面建成自由贸易港提供强有力人才保障。</p>
        </div>
        <!-- 大图片 -->


        <div style="display: flex; gap:20px; margin-top:50px" id="bj5">

            <div style="width: 33%;background-color: white;">
                <img src="@/assets/Coopearation/img2.png"/>
                <p style="font-size: 18px;">建设实习基地</p>
                <p class="pt">为实现校企资源优势互补、互利共赢，数字海南与本地技术类院校密切合作，开展实习基地建设，吸引近百余同学加入，逐步培养人才，投身海南自贸港建设。 构建多元主体共享共赢的生态链，我们正在建立合作育人、合作就业的长效机制，不断探索更多更好的校企合作模式。</p>
            </div>
            <!-- 1 -->
            <div style="width: 33%;background-color: white;">
                <img src="@/assets/Coopearation/img3.png"/>
                <p style="font-size: 18px;">前沿技术进校园</p>
                <p class="pt">基于对前沿技术研究及自贸岛数字化建设的充分实践，数字海南开展了涵盖智慧城市建设、区块链科技等方向技术交流会及行业分享会，为同学们提供与技术大牛零距离的交流机会，带来一次次工程级别的知识盛宴。</p>
            </div>
            <!-- 2 -->   
            <div style="width: 33%;background-color: white;">
                <img src="@/assets/Coopearation/img4.png" />
                <p style="font-size: 18px;">深化产学研融合</p>
                <p class="pt">致力于促进科研成果与企业应用的成果转换，数字海南与本地高校进一步探索联合培育大数据类人才。</p>
            </div>
            <!-- 3 -->

        </div>

      </div>

    </div>



  </div>
</template>

<script>
import {fadeIn} from '../../utils/motion';
export default {

  mounted(){
    fadeIn("#bj3",650,true)
    fadeIn("#bj4",650,true)
  }

};
</script>

<style lang="scss" scoped>

#box1{

  @include boxModel($w:420px,$h:400px,$bc:white,$mt:50px,$mb:0,$mr:0,$d:flex,$fd:column,$g:0px);
  position: absolute;
  justify-content: center;
  padding-left: 40px;
  line-height: 25px;
  right:10%;
}

#box2{

            position: absolute;
            left: 0px;
            height: 400px;
            width: 550px;
            margin-top: 50px;
            padding-left: 40px;
            display: flex;
            flex-direction: column;
            line-height: 10px;
            font-size: 14px;
            line-height: 28px;
            background-color: white;





          
}

.pt{
  @include paragraphStyle(13px,28px)
}
//文字

#bj5 div img{
  width:100%
}
//图片的大小


</style>

















