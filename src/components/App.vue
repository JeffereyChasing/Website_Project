<template>
  <div id="body">

    <div id="nav">
      <img
        src="../assets/Home/logo.png"
        style="padding-left: 45px; width: 112px"
      />
      <!-- 背景图片 -->
      <ul id="list1">
        <li  v-for="(items,index) in data" :key="index"><router-link class="nav-item" :to="items.link">{{ items.name}}</router-link></li>
      </ul>
    </div>
    <!-- 页面导航 -->

    <router-view />
    <!-- 路由器 -->

    <div
      id="bottom1"
      style="background-color: transparent; height: 700px; width: 100%"
    >
      <div style="width: 100%;">
        <img
          src="@/assets/Home/wave.png"
          style="height: 130%; position: absolute; object-fit: cover;"
        />
      </div>
    </div>

    <div
      id="bottom1"
      style="
        background-color: transparent;
        height: 20px;
        width: 120%;
        display: flex;
        flex-direction: row;
        padding-left: 70px;
        font-size: 14px;
      "
    >
      <div style="background-color: transparent">
        <p style="font-weight: 500; font-size: 20px; padding-top: 0px">
          友情链接
        </p>
        <p style="font-weight: 100">海南省政务服务网</p>
        <p style="font-weight: 100">海南省大数据管理局</p>
      </div>

      <div style="padding-left: 50px">
        <p style="font-size: 20px">联系方式</p>

        <div style="display: flex; flex-direction: row">
          <img src="@/assets/Home/map.png" style="width: 20px; height: 20px" />
          <p style="margin-top: 0px; padding-left: 10px">
            海南省海口市美兰区海阔天空国瑞城B座西塔32层
          </p>
        </div>

        <div style="display: flex; flex-direction: row">
          <img
            src="@/assets/Home/phone.png"
            style="width: 20px; height: 20px"
          />
          <p style="margin-top: 0px; padding-left: 10px">0898-66212888</p>
        </div>
      </div>

      <div style="margin-left: 340px; font-weight: 500; font-size: 20px">
        <p>关注我们</p>
        <img src="@/assets/Code/c1.jpg" style="width: 80px" />
        <p style="font-size: 15px">数字海南公众号</p>
      </div>

      <div
        style="
          font-weight: 500;
          font-size: 20px;
          margin-left: 20px;
          background-color: transparent;
          text-align: center;
        "
      >
        <img
          src="@/assets/Code/c3.png"
          style="width: 80px; margin-top: 67px"
        />
        <p style="font-size: 15px">海易办APP</p>
      </div>

      <div
        style="
          font-weight: 500;
          font-size: 20px;
          margin-left: 25px;
          text-align: center;
        "
      >
        <img
          src="@/assets/Code/c2.jpg"
          style="width: 80px; margin-top: 67px"
        />
        <p style="font-size: 15px">海易办小程序</p>
      </div>
    </div>

    <div
      id="bottom1"
      style="
        background-color: transparent;
        height: 80px;
        width: 50%;
        display: flex;
        flex-direction: row;
        padding-left: 60px;
        justify-content: space-between;
      "
    >
      <div>
        <p style="padding-left: 10px; font-size: 14px">
          © 2020-2022 · 数字海南有限公司 · 版权所有
        </p>
      </div>
      
      <div>
        <p style="padding-right: 40px; font-size: 14px">
          ICP备案： 琼ICP备20000259号-1
        </p>
      </div>

    </div>
    <!-- 3个底部div (footer)-->


    
  </div>
</template>

<script>
export default {

  
  setup() {

    const data = [
      {
        name:"首页",
        link:'/'
      },
      {
        name:"企业动态",
        link:'/dynamic'
      },
      {
        name:"产品与方案",
        link:'/product'
      },
      {
        name:"产业落地",
        link:'/ground'
      },
      {
        name:"生态与合作",
        link:'/cooperation'
      },
      {
        name:"招采公告",
        link:'/buy'
      },
      {
        name:"关于我们",
        link:'/join'
      },
      {
        name:"加入我们",
        link:'/about'
      }]

    return{
      data
    }
  },

  mounted() {
    var navigations = document.querySelector("#list1");
    navigations.addEventListener("click", function (e) {
      if (e.target.nodeName == "A") {
        var options = document.querySelectorAll(".nav-item");
        for(let i = 0;i<options.length;i++){
          options[i].style.color = "rgb(203, 202, 202)"
        }
        e.target.style.color = "white";
      }
      //如果点击的是链接,先将所有的链接改为原色，在把点中的改为白色
    });
    //addeventlistener的时候不能调用setup的方法
  
  },



};
</script>







<style lang="scss">
/* App.Vue作为全局CSS导入点 */

@import '../stylesheet/css/sample.css';

.product-small-font {

  @include paragraphStyle()
  
}

.body-block {

  @include bodyBlockSize()

}
</style>
