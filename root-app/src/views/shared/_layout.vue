<template>
<el-container>
 <el-aside width="200px" style="height:98.3vh" >
      <el-row class="tac">
          <el-col :span="24">
             <div style="height:100px">
               授权认证
             </div>
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              theme="dark" 
              :default-openeds="openeds"
              @open="handleOpen"
              @close="handleClose" router>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>功能列表</span>
                </template>
                <el-menu-item-group>  
                  <el-menu-item index="/scope/list">区域列表</el-menu-item>
                  <el-menu-item index="/client/list">客户端列表</el-menu-item>
                  <el-menu-item index="/product/list">商品列表</el-menu-item>
                </el-menu-item-group>                
              </el-submenu>
            </el-menu>
          </el-col>
      </el-row>
    </el-aside>
  <el-container>
    <el-header style="padding-left: 0px;padding-right: 0px;" >
          <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
          <el-menu-item index="/home/index">首页</el-menu-item>    
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="/product">订单管理</el-menu-item>
          </el-menu>
        </el-header>
    <el-main>      	           
      <div  id="subapp-container">

      </div>
    </el-main>
    <el-footer>统一授权中心</el-footer>
  </el-container>
</el-container>
</template>
<script>
import { registerMicroApps, start, initGlobalState } from 'qiankun';
 import render from '../VueRender';
export default {     
      created(){      
         //  console.log(this.$refs.sxx);
          // this.loadSubApp();
      },    
      mounted(){
             console.log(this.$refs.sxx);
           this.loadSubApp();
      },
      methods:{          
           push(subapp) 
           { 
                 history.pushState(null, subapp, subapp) 
                 },
            ok() {       
            console.log(this.$refs.sxx);
        },
           loadSubApp(){
                 render({ loading: true });
                
                    const loader = loading => render({ loading });
         
                  registerMicroApps([ 
                        { 
                              name: 'product', 
                              entry: '//localhost:5001', 
                              container: '#subapp-viewport',
                              activeRule:'/product',
                              loader 
                        },
                  ]);
        
            const { onGlobalStateChange, setGlobalState } = initGlobalState({
                  user: 'qiankun',
            });

            onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

            setGlobalState({
                  ignore: 'master',
                  user: {
                  name: 'master',
                  },
            });

            start();    
           }
      }
}
</script>