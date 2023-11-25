<template>
    <div style="background-color: whitesmoke;">

        <div>
            <img src="@/assets/About/banner.jpg" style="width: 110%;"/>
        </div>
        <!-- 背景 -->

        <div style="
        margin-left: 40px;
        margin-right: 40px;
        display: flex;
        flex-direction: column;
        margin-top: 60px; height: 1300px;">           
        <!-- 大的框架 -->
        


            <div style="display: flex; flex-direction: row;position: relative;" id="bigline" >
                
                <div style="position: absolute;background-color: white;
                 border-style: groove;border-bottom: 0;border-left: 0;border-right: 0;
                 border-color: blue;z-index: 1;" id="boxmodel1" class="move">
                    

                </div>

                <div id="boxmodel1" @click="one">
                    
                    <img src="@/assets/About/i1.png" style="width: 50px;height: 50px;
                    margin-top: 45px;pointer-events:none;"/>
                    <p style="pointer-events:none;">社会招聘</p>
                    
                </div>
                <!-- 社会招聘 -->

                <div id="boxmodel1" @click="two">
                    <img src="@/assets/About/i2.png" style="width: 50px;height: 50px;
                    margin-top: 45px;pointer-events: none;"/>
                    <p style="pointer-events:none;">校园招聘</p>
                </div>
                <!-- 校园招聘 -->

                <div id="boxmodel1" @click="three">
                    <img src="@/assets/About/i3.png" style="width: 50px;height: 50px;
                    margin-top: 45px; pointer-events: none;"/>
                    <p style="pointer-events:none;">实习岗位</p>
                </div>
                <!-- 实习岗位 -->

            

            </div>
            <!-- 岗位行 -->
            <!-- pointer-event很重要 用来是子元素不能被选中 -->



            
            
            <div    id="back">


            
            <div style="display: flex; flex-direction: row; gap: 60px;margin-top: 80px;">
                
                <div style="height: 280px;width: 350px;
                padding-left: 30px; display: flex; flex-direction: column;line-height: 2px;"
                id="she1" class="first">
                    <p style="font-size: 22px; padding-top: 20px;">{{msg[number].title}}</p>
                    <p style="color: #888;font-size: 14px;">{{msg[number].location}} </p>
                    <p style="color: #888;font-size: 14px;">{{msg[number].time}}</p>
                    <div style="display: flex; margin-top: 80px;">
                        <p style="font-size: 13px;color: blue;">查看详情</p>
                        <img src="@/assets/About/i4.png" style="width: 20px; height:10px;
                        margin-left: 10px; margin-top: 8px;" id="arrows"/>
                    </div>

                </div>

                <div style=" height: 280px;width: 350px;
                padding-left: 30px; display: flex; flex-direction: column;line-height: 2px; visibility:hidden ;"
                id="she1" class="second">
                    <p style="font-size: 22px;padding-top: 20px;">{{msg[3].title}}</p>
                    <p style="color: #888;font-size: 14px;">{{msg[3].location}} </p>
                    <p style="color: #888;font-size: 14px;">{{msg[3].time}}</p>
                    <div style="display: flex; margin-top: 80px;">
                        <p style="font-size: 13px;color: blue;">查看详情</p>
                        <img src="@/assets/About/i4.png" style="width: 20px; height:10px;
                        margin-left: 10px; margin-top: 8px;" id="arrows"/>
                    </div>
                </div>
                
            </div>
            <!-- 实习生行 -->

        </div>

        
        </div>



    </div>
</template>


<script>

import {ref} from 'vue'

    export default {

        
        setup(){
            
            
            let  number = ref(0);
            const msg = [
                    {title:"政务业务咨询师",location:"工作地点",time:"发布时间: 2021-08-22 14:52:55"},
                    {title:"初级开发工程师",location:"工作地点",time:"发布时间：2021-08-22 00:00:00"},
                    {title:"运营实习生",location:"工作地点",time:"发布时间：2021-07-19 14:13:49"},
                    {title:"开发实习生",location:"工作地点",time:"发布时间：2021-07-19 14:12:34"},];
            
            const two =()=>{
                const second = document.querySelector('.second')
                number.value = 1
                second.style.visibility = "hidden"
            }

            const one =()=>{
                const second = document.querySelector('.second')
                number.value = 0
                second.style.visibility = "hidden"
            }


            const three =()=>{
                const second = document.querySelector('.second')
                number.value = 2
                second.style.visibility = "initial"

            }
            
            //更新信息




            return{
                number,msg,two,one,three
            }
        },


        mounted(){

            const line = document.querySelector('#bigline')
            const move = document.querySelector('.move')
            line.addEventListener("click",function(e){
                move.style.transform = `translateX(${e.target.offsetLeft}px)`
                move.style.transition = "all 0.4s"
                //var sample = document.createElement("li")
                //line.insertBefore(sample,line.childNodes[0])
            })
            //白盒子移动  
        

         
        },

        // 选项式API


      


    }


</script>


<style lang="scss" scoped>


#boxmodel1{
    align-items: center;
    z-index: 100;
    /* z-index滑动盒子在后面 */
    cursor: pointer;
    @include boxModel($w:200px,$h:200px,$bc:transparent,$mt:0,$mb:0,$ml:0,$mr:0,$d:flex,$fd:column,$g:0px)
}
//滚动盒子

#she1{
    background-color: whitesmoke;
    transition: transform 0.5s;
    &:hover{
        box-shadow: 1px 1px 5px #888888;
        transform: translate(0px,-10px);
    }
}
//业务模块


#back{
    background: url('@/assets/About/people.png') center center;
    background-size: 100%;
}
/* 人像背景 */

#arrows{
    cursor: pointer;
    &:hover{
    transform: translateX(10px);
    transition: all 1s;
  }
}

</style>





































