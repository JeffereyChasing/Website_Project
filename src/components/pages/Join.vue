<template>
    <div>


        <div>
            <img src="@/assets/Join/bg3.png" style="width: 100%;"/>
        </div>
        <!-- 图片 -->


            <div style="position: sticky; top: 0;height: 55px;
            background-color: rgba(245,245,245,1); display: flex;gap:45px;
            padding-left: 30px; z-index: 9999999;" id="stickyline">
                <div id="c"  @click="goAnchor('#cul')"><p  style="cursor: pointer; pointer-events: none;">企业文化</p></div>
                <div id="c" @click="goAnchor('#honor')"><p  style="cursor: pointer; pointer-events: none;">荣誉资质</p></div>
                <div id="c" @click="goAnchor('#cor')"><p  style="cursor: pointer; pointer-events: none;" >合作伙伴</p></div>
                <div id="c" @click="goAnchor('#cont')" ><p style="cursor: pointer; pointer-events: none;">联系我们</p></div>
            </div>
        <!-- 第二标题 -->
    
        <div>
            <button>位置</button>
        </div>
        <!-- test -->

        <div style="height: 3750px; margin-top: 120px;" class="body-block">
            
            <div style="height: 200px; margin-left: 200px; margin-right: 160px;background-color: white;  text-align: center;">
                <p style="font-size: 30px;">公司简介</p>
                <p style="color: #888; font-size: 14px;line-height: 27px;">数字海南有限公司于2019年10月31日成立，由阿里巴巴（中国）网络技术有限公司（49%）、海南省大数据管理局（30%），天翼资本控股有限公司（10.5%）和太极计算机股份有限公司（10.5%）共同投资。数字海南主要承担全省电子政务基础设施、公共平台和共性平台的建设运维工作；充分利用现有各类电子政务资源，建立健全统一的标准规范和管理制度，推动电子政务有效整合资源
                ；建立兼容、开放、可扩展的政务服务大数据系统架构，支撑全省跨区域、跨部门的数据交换共享和系统应用，形成“上下左右”互通互联</p>
                <p style="color: #888; font-size: 14px;line-height: 27px;
                line-height: 5px;">共享共用的大数据应用环境。</p>
            </div>
            <!-- 公司简介 -->
            
            



            <div>
                <p style="font-size: 30px; margin-top: 140px;">公司发展历程</p>
                <div style="display: flex; gap:70px;font-size: 20px;color: #888;" id="textline">
                    <p id="p1" tabindex="1" class="f1">2019</p>
                    <p id="p1" tabindex="1" class="f2">2020</p>
                    <p id="p1" tabindex="1" class="f3">2021</p>
                </div>

                <img src="@/assets/Join/uparrow.png"  style="width:3%; 
                margin-top: 25px; cursor: pointer;" id="uparrow"/>

                <div style="display: column; background-color: transparent;
                overflow-y:scroll;margin-right: 0px; gap: 90px;color: #888;scroll-behavior:smooth;
                position: relative; height: 480px;" id="rolling">

                
                    <div style="height: 480px; display: flex; color: black; gap: 300px;align-items: center;">

                        <div style="margin-bottom: 50px;">
                            <p style="font-size: 60px; font-weight: bold; margin-bottom: 0px;transform: skew(-7deg)">2019</p>
                            <p style="font-size: 150px; margin-top:0px; transform: skew(-7deg);margin-bottom: 40px;
                            font-weight:600;">05.23</p>
                            <p style="margin-top: 0px;font-size: 20px;">海南省大数据管理局成立</p>
                        </div>
                        <div style="">
                            <img src="@/assets/Join/s1.png" width="360px"/>
                        </div>

                    </div>
                    <!-- 滚动板块 -->

              

                    <div style="height: 480px; display: flex; color: black; gap: 100px;align-items: center;">

                        <div style="margin-bottom: 50px;">
                            <p style="font-size: 60px; font-weight: bold; margin-bottom: 0px;transform: skew(-7deg)">2019</p>
                            <p style="font-size: 150px; margin-top:0px; transform: skew(-7deg);margin-bottom: 40px;
                            font-weight:600;">10.18</p>
                            <p style="margin-top: 0px;font-size: 20px;">《数字海南有限公司组建方案》通过海南省政府“两重一大”专题<br/>会议审议</p>
                        </div>
                        <div style="">
                            <img src="@/assets/Join/s1.png" width="360px"/>
                        </div>

                    </div>
                    <!-- 滚动板块 -->

                    <div style="height: 480px; display: flex; color: black; gap: 300px;align-items: center;">

                        <div style="margin-bottom: 50px;">
                            <p style="font-size: 60px; font-weight: bold; margin-bottom: 0px;transform: skew(-7deg)">2019</p>
                            <p style="font-size: 150px; margin-top:0px; transform: skew(-7deg);margin-bottom: 40px;
                            font-weight:600;">10.31</p>
                            <p style="margin-top: 0px;font-size: 20px;">数字海南有限公司正式注册成立</p>
                        </div>
                        <div style="">
                            <img src="@/assets/Join/s1.png" width="360px"/>
                        </div>

                    </div>
                    <!-- 滚动板块 -->


                    



          
                    
                </div>
                <!-- 走马灯 -->

                <img src="@/assets/Join/downarrow.png"  style="width:3%; 
                margin-top: 25px; cursor: pointer;" id="downarrow"/>


            </div>
            <!-- 公司发展历程 -->




            <div id="cul">

            </div>
            <!-- 跳转锚点 -->


            <div style="background-color: transparent; height: 600px;width: 100%; display: flex;
            margin-top: 100px; font-size: 29px;" >

                <div style="width: 360px; height: 400px;background-color: transparent;margin-top: 100px;
                margin-left: 80px;">
                    <p >企业文化</p>
                    <p style="font-size:23px;margin-top: 55px;">公司的使命<br/><span style="font-size:15px;color: #888;">让每个人享受数字化生活的便利</span></p>
                    <p style="font-size:23px;">公司的愿景<br/><span style="font-size:15px; color: #888">成为自贸港数字化服务创新的领跑者</span></p>
                    <p style="font-size:23px;">核心价值观<br/><span style="font-size:15px; color: #888">诚实可靠、高效协同、拥抱变化、快乐工作、创享美好</span></p>
                </div>
                <!-- 文本 -->

                <div style="height: 600px; background-color: transparent; width: 400px;
                margin-left: 50px;">
                    <img src="@/assets/Join/j2.png" style="width: 700px;height: 500px;position: relative;
                left: 10px;zoom: 1.2;"/>
                </div>

            </div>
            <!-- 企业文化 -->


            <div id="honor">

            </div>


            <div style="height: 250px; background-color: ;margin-top: 200px;
            display:flex;flex-direction:column;">
                
                <p style="font-size: 30px; margin-top: 0px;">荣誉资质</p>
                <!-- 标题 -->

                <div style="display: flex; padding-left: 50px;background-color: transparent;
                overflow-x: scroll;margin-right: 0px; gap: 90px;color: #888;scroll-behavior:smooth;position: relative;" id="logos" >
                    
                    <div style="text-align: center;">
                    <img src="@/assets/Join/CMMI.png" style="width: 600px;text-align: center;"/>
                    <p>CMMI3级认证</p>
                    </div>
                    <div style="text-align: center;">
                    <img src="@/assets/Join/ISO_9001.png" style="width: 170px;"/>
                    <p>ISO 9001</p>
                    </div>
                    <div style="text-align: center;">
                    <img src="@/assets/Join/ISO20000.png" style="width: 170px;"/>
                    <p>ISO20000</p>
                    </div>
                
                    <!-- 箭头 -->
                    <div>
                    <img src="@/assets/Join/iso45001.png" style="width: 150px;"/>
                    </div>
                    <div>
                    <img src="@/assets/Join/iso27001.png" style="width: 150px;"/>
                    </div>
                    <div>
                    <img src="@/assets/Join/iso14000.png" style="width: 150px;"/>
                    </div>
                    <div>
                    <img src="@/assets/Join/ten.png" style="width: 150px;"/>
                    </div>
                    <div style="visibility:hidden">
                    <img src="@/assets/Join/ten.png" style="width: 150px;"/>
                    </div>
                    <div style="visibility:hidden">
                    <img src="@/assets/Join/ten.png" style="width: 150px;"/>
                    </div>
                    <div style="visibility:hidden">
                    <img src="@/assets/Join/ten.png" style="width: 150px;"/>
                    </div>
                    <div style="visibility:hidden">
                    <img src="@/assets/Join/ten.png" style="width: 150px;"/>
                    </div>
              
              
                   
                  
                </div>
                <!-- 图片 -->

                <div style="position:absolute; right:30px; top: 2830px; background-color: white;width: 42px;height: 42px;border-radius: 50px;
                    box-shadow: 0px 0px 8px 3px rgb(153, 186, 205);display:none; cursor: pointer; z-index: 10000;"
                    id="rightarrow"  >
                        <img src="@/assets/Join/arrow.png" style="width: 100%;rotate: 180deg;"/>
                </div>
                <!-- 右箭头 -->

                <div style="position:absolute; left:30px; top: 2830px; background-color: white;width: 42px;height: 42px;border-radius: 50px;
                    box-shadow: 0px 0px 8px 3px rgb(153, 186, 205);display:none; cursor: pointer; z-index: ;"
                    id="leftarrow"  >
                        <img src="@/assets/Join/arrow.png" style="width: 100%;pointer-events: none;"/>
                </div>
                <!-- 左箭头 -->


            </div>
            <!-- 荣誉资质 -->

            <div style='display: flex;flex-direction: column;' id="cor">
                <p style="font-size: 30px; margin-top: 150px;margin-bottom: 60px;">合作伙伴</p>

                <div style="display: flex;gap: 100px;" id="cooperation">

                    <div style="display: flex; flex-direction: column; gap: 70px;">
                        <img src="@/assets/Join/hb1.png" width="85%"/>
                        <img src="@/assets/Join/hb6.png" width="85%"/>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 70px;">
                        <img src="@/assets/Join/hb2.png" width="100%"/>
                        <img src="@/assets/Join/hb7.png" width="100%"/>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 70px;">
                        <img src="@/assets/Join/hb3.png" width="100%"/>
                        <img src="@/assets/Join/hb8.png" width="110%"/>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 70px;">
                        <img src="@/assets/Join/hb4.png" width="85%"/>
                        <img src="@/assets/Join/hb9.png" width="75%"/>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 70px;">
                        <img src="@/assets/Join/hb5.png" width="85%"/>
                        <img src="@/assets/Join/hb10.png" width="85%"/>
                    </div>

                </div>
                <!-- 合作伙伴 -->

                <div id="cont">

                </div>
                <div style="background-color: transparent; width: 100%; margin-top: 0px;display: flex;" id="communication">
                    
                    <div style="width: 310px; height: 300px; background-color: transparent;margin-top: 170px;">
                        <p style="font-size: 30px;">联系我们</p>
                        <p style="font-size: 24px; margin-bottom: 0px;margin-top: 60px;">公司地址</p>
                        <p class="product-small-font" style="margin-top: 0px;" >海南省海口市美兰区海阔天空国瑞城B座西塔32层</p>
                        <p style="font-size: 24px; margin-bottom: 0px;">服务热线</p>
                        <p  class="product-small-font" style="margin-top: 0px;">0898-66212888</p>

                    </div>

                    <div style="width: 300px; height: 300px;margin-top: 120px; margin-left: 250px; background-color: transparent;">
                        <img src="@/assets/Join/hb11.png" width="400px"/>
                    </div>

                </div>


            </div>
            <!-- 合作伙伴 联系我们 -->




        </div>
        <!-- 正文 -->



        
    </div>
</template>



<script>

import {ref,onMounted} from 'vue'
import { fadeIn, fadeInMultiple } from "../../utils/motion";

    export default {

        setup(){

            const count = ref(0)
            //计数

            const counter =()=>{
                return count
            }
        
            return{
                count,counter
            }
            
        },

        mounted() {

            fadeIn("#cooperation",500,true)
            fadeIn("#communication",500,true)

            {
            const logos = document.querySelector('#logos')
            const rightarrow = document.querySelector('#rightarrow')
            const leftarrow = document.querySelector('#leftarrow')
    
            logos.addEventListener("mouseenter",function(){
                leftarrow.style.display = 'initial'
                rightarrow.style.display = 'initial'
            })
         
            logos.addEventListener("mouseleave",function(){
                rightarrow.style.display = 'none'  
                leftarrow.style.display = 'none'      
            })
            rightarrow.addEventListener('mouseenter',function(){
                rightarrow.style.display='initial'
            })
            leftarrow.addEventListener('mouseenter',function(){
                leftarrow.style.display='initial'
            })
            //显示右滑键,左滑键


            rightarrow.addEventListener('click',function(e){
                logos.scrollLeft += 720;
            })
            // 右滑
            leftarrow.addEventListener('click',function(e){
                logos.scrollLeft -= 720;
            })
            // 右滑
            }
            //箭头

            {
            const rolling = document.querySelector('#rolling')
            const uparrow = document.querySelector('#uparrow')
            const downarrow = document.querySelector('#downarrow')

            uparrow.addEventListener('click',function(e){
                rolling.scrollTop -= 500;
                console.log(rolling.scrollTop)
            })
            // 上滑
            downarrow.addEventListener('click',function(e){
                rolling.scrollTop += 500;
                console.log(rolling.scrollTop)
            })
            // 下滑
            
            rolling.addEventListener("mousewheel",function(e){
                e.preventDefault()
                e.stopPropagation()
            })
            }
            //滑动bankuai

            {
            var jump1 = document.querySelector(".f1")
            var jump2 = document.querySelector(".f2")
            var jump3 = document.querySelector(".f3")
                
            jump1.addEventListener("click",function(){
                rolling.scrollTop = 0
            })

            jump2.addEventListener("click",function(){
                rolling.scrollTop = 500
            })
            jump3.addEventListener("click",function(){
                rolling.scrollTop = 1000
            })
       
       
            }
            //跳转

            {
            var stickyline = document.querySelector("#stickyline")
            var stickylineitems = document.querySelectorAll("#c")

            stickyline.addEventListener("click",function(e){
                for(let i = 0;i<stickylineitems.length;i++){
                    stickylineitems[i].style.borderColor= "transparent"
                }
                e.target.style.borderColor = "blue"
            })

            var textline = document.querySelector("#textline")
            var p1 = document.querySelectorAll("#p1")

            textline.addEventListener("click",function(e){
                for(let i = 0;i<p1.length;i++){
                        p1[i].style.borderColor= "transparent"
                }
                e.target.style.borderColor = "blue"
            })
            }
            //点击换颜色



         
        

    




       

        },
        methods:{
            goAnchor(selector){
                document.querySelector(selector).scrollIntoView({
                    behavior:"instant"
                })
            }
            //页面跳转

        }

        
    }


</script>


<style lang="scss" scoped>


#c{

    border: groove;
    border-color: transparent;
    border: {
        top:transparent;
        left:transparent;
        right:transparent;
            
    }    



}
</style>