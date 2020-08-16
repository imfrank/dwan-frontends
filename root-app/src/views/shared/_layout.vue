<template>
      <div > 
           <p ref='sxx' >test</p>
            <button @click="ok()">确定</button>
           
<div  id="subapp-container">

</div>
            <ul class="mainapp-sidemenu">
                  <li @click="push('/product')">React16</li>
            </ul> 
      </div>         
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