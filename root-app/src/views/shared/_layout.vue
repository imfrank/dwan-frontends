<template>
<el-container>
 <el-aside width="200px" style="height:98.3vh" >
      <el-row class="tac">
          <el-col :span="24">
             <div style="height:100px">
                  Micro frontend
               <div>
                  <el-avatar> user </el-avatar>
              </div>

             </div>
            <el-menu
              default-active="oauth"
              class="el-menu-vertical-demo"
              theme="dark" 
          
              @open="handleOpen"
              @close="handleClose" router>
              <el-menu-item index="/workbench/overview" >
              <i class="el-icon-document"></i>
              <span slot="title">概况</span>
            </el-menu-item>
              <el-submenu index="m_oauth">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>授权管理</span>
                </template>
                <el-menu-item-group>  
                  <el-menu-item index="/scope/list">区域列表</el-menu-item>
                  <el-menu-item index="/client/list">客户端列表</el-menu-item>                 
                </el-menu-item-group>                
              </el-submenu>
            <el-submenu index="m_product">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group> 
         <el-menu-item index="/product/list">商品列表</el-menu-item>
        </el-menu-item-group>       
      </el-submenu>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">系统设置</span>
            </el-menu-item>
            </el-menu>
            
          </el-col>
      </el-row>
    </el-aside>
  <el-container>
    <el-header style="padding-left: 0px;padding-right: 0px;" >
          <el-menu   class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
          <el-menu-item index="/">首页</el-menu-item>    
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="/ordering/list">订单管理</el-menu-item>
          </el-menu>
    </el-header>
    <el-main>      	           
      <div  id="subapp-container">

      </div>
      <router-view></router-view>
    </el-main>
    <el-footer>Copyright qinwei All Rights Reserved. </el-footer>
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
        },  handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
           loadSubApp(){
                 render({ loading: true });
                
                    const loader = loading => render({ loading });
         
                  registerMicroApps([ 
                        { 
                              name: 'product', 
                              entry: '//localhost:5001/product/list', 
                              container: '#subapp-viewport',
                              activeRule:'/product/list',
                              loader 
                        },
                         { 
                              name: 'ordering', 
                              entry: '//localhost:5006', 
                              container: '#subapp-viewport',
                              activeRule:'/ordering/list',
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