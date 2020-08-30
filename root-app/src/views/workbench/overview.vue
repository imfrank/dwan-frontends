<template>
    <el-row :gutter="12">
  <el-col :span="8">
    <el-card shadow="always">
      待我处理
        <ul>
           <li>权限审批</li>
       </ul>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="hover">
         销售统计
     <ul>
       <li>代发货:50</li>
         <li>销售额:50</li>
     </ul>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="never">
      版本信息
      <ul>
        <li>当前版本:v1.0.0</li>
        <li>更新时间:2020-08-30</li>
      </ul>
    </el-card>
  </el-col>
</el-row>
</template>