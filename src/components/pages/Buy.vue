<template>
  <div>
    <div style=" background-color: whitesmoke">
      <div class="body-block">

        
        <el-table :data="data.slice((page-1)*limit, page*limit)"
        :row-class-name="tableRowClassName"
        :header-cell-style="{'font-size':'14px','font-weight':'500'}"
        max-height="3000px"
        >
          <el-table-column
            label="日期"
            prop="date"
            width="250"></el-table-column>
          <el-table-column
            label="公告类型"
            prop="type"
            width="170"
            style="margin-top: 150px;"></el-table-column>
          <el-table-column label="招标采购标题" prop="title"></el-table-column>
        </el-table>
        <!-- element组件表格 -->

        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            id="pagenumber"
            background
          >
          </el-pagination>
        </div>
        <!-- element pagination -->


      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const data = [
      {
        date: "2023-07-10 14:50:00",
        type: "终止公告",
        title: "海生活第三方聚合支付软件服务采购项目（终止公告",
      },
      {
        date: "2023-06-29 16:16:29",
        type: "竞争性磋商",
        title: "海生活第三方聚合支付软件服务采购项目竞争性磋商公告",
      },
      {
        date: "2023-06-29 15:07:38",
        type: "询价",
        title:
          "货物采购询价-海南省一体化大数据支撑体系（一期）项目-B包（电子印章客户端）",
      },
      {
        date: "2023-06-25 15:19:26",
        type: "竞争性磋商",
        title: "海政通一期项目（A包）专区专题运营实施推广采购磋商公告",
      },
      {
        date: "2023-06-21 17:13:26",
        type: "竞争性磋商",
        title: "海政通TVC片视频采购制作项目-成交公告",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "竞争性磋商",
        title: "海政通TVC片视频采购制作项目竞争性磋商公告",
      },
      {
        date: "2023-06-08 17:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      { date: "2023-06-01 15:00:02", type: "询价", title: "询价通知书" },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },   {
        date: "2023-07-10 14:50:00",
        type: "终止公告",
        title: "海生活第三方聚合支付软件服务采购项目（终止公告",
      },
      {
        date: "2023-06-29 16:16:29",
        type: "竞争性磋商",
        title: "海生活第三方聚合支付软件服务采购项目竞争性磋商公告",
      },
      {
        date: "2023-06-29 15:07:38",
        type: "询价",
        title:
          "货物采购询价-海南省一体化大数据支撑体系（一期）项目-B包（电子印章客户端）",
      },
      {
        date: "2023-06-25 15:19:26",
        type: "竞争性磋商",
        title: "海政通一期项目（A包）专区专题运营实施推广采购磋商公告",
      },
      {
        date: "2023-06-21 17:13:26",
        type: "竞争性磋商",
        title: "海政通TVC片视频采购制作项目-成交公告",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "竞争性磋商",
        title: "海政通TVC片视频采购制作项目竞争性磋商公告",
      },
      {
        date: "2023-06-08 17:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      { date: "2023-06-01 15:00:02", type: "询价", title: "询价通知书" },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },  {
        date: "2023-07-10 14:50:00",
        type: "终止公告",
        title: "海生活第三方聚合支付软件服务采购项目（终止公告",
      },
      {
        date: "2023-06-29 16:16:29",
        type: "竞争性磋商",
        title: "海生活第三方聚合支付软件服务采购项目竞争性磋商公告",
      },
      {
        date: "2023-06-29 15:07:38",
        type: "询价",
        title:
          "货物采购询价-海南省一体化大数据支撑体系（一期）项目-B包（电子印章客户端）",
      },
      {
        date: "2023-06-25 15:19:26",
        type: "竞争性磋商",
        title: "海政通一期项目（A包）专区专题运营实施推广采购磋商公告",
      },
      {
        date: "2023-06-21 17:13:26",
        type: "竞争性磋商",
        title: "海政通TVC片视频采购制作项目-成交公告",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "竞争性磋商",
        title: "海政通TVC片视频采购制作项目竞争性磋商公告",
      },
      {
        date: "2023-06-08 17:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      { date: "2023-06-01 15:00:02", type: "询价", title: "询价通知书" },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },   {
        date: "2023-07-10 14:50:00",
        type: "终止公告",
        title: "海生活第三方聚合支付软件服务采购项目（终止公告",
      },
      {
        date: "2023-06-29 16:16:29",
        type: "竞争性磋商",
        title: "海生活第三方聚合支付软件服务采购项目竞争性磋商公告",
      },
      {
        date: "2023-06-29 15:07:38",
        type: "询价",
        title:
          "货物采购询价-海南省一体化大数据支撑体系（一期）项目-B包（电子印章客户端）",
      },
      {
        date: "2023-06-25 15:19:26",
        type: "竞争性磋商",
        title: "海政通一期项目（A包）专区专题运营实施推广采购磋商公告",
      },
      {
        date: "2023-06-21 17:13:26",
        type: "竞争性磋商",
        title: "海政通TVC片视频采购制作项目-成交公告",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "竞争性磋商",
        title: "海政通TVC片视频采购制作项目竞争性磋商公告",
      },
      {
        date: "2023-06-08 17:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      { date: "2023-06-01 15:00:02", type: "询价", title: "询价通知书" },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
      {
        date: "2023-06-12 08:00:00",
        type: "其他公告",
        title: "数字海南有限公司购买技术服务（劳务服务）框架遴选项目",
      },
    ];

    let page = ref(1);
    //从第几页开始

    let limit = ref(10);
    //每页有几条

    let total = 80;
    //一共的数据量
   
    return {
      data,
      page,
      limit,
      total,

    };
  },

  mounted(){
    var button = document.querySelector('#pagenumber')
    button.addEventListener("click",function(e){
      console.log(e.target)
    })
  },


  methods:{
    handleSizeChange (val){
      this.limit = val
      console.log(val)
    },

    handleCurrentChange (val){
      console.log(val)
      this.page = val
    },

    tableRowClassName({row, rowIndex}) {
       
          return 'warning-row';
        
      },

  }
  
 
};
</script>

<style scoped>

.block{
  margin-top: 25px;
  margin-left: 450px;
}

.el-table >>> .warning-row {
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer; 
  color: black;
}


::v-deep .el-table tbody tr:hover>td {
    background-color: rgba(91, 149, 242,0.2) !important;
}

::v-deep .el-pagination{
  height: 800px;
  align-items:first baseline;
}

::v-deep .el-pagination.is-background .el-pager li:not(.disabled) {
  border-radius: 8px;
  font-weight: 600;
}

::v-deep .el-pagination.is-background .el-pager li:not(.disabled):focus {
  background-color: rgba(26, 93, 193, 0.8)!important;
}

::v-deep .el-pagination .el- {
  background: red;
}

</style>
