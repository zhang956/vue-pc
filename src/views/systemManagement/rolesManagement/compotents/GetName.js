/*
 * @Description: 
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-12-04 09:26:55
 * @LastEditors: Zhangwenzhe
 */
import{tiemCreat} from '@/utils/commonUtils'
export default{
  data(){
    return{
      time:Math.floor(Date.now() / 1000), // 初始化 Unix 时间戳
      shijiName:''
    }
  },
  filters:{
  },
  // watch是对象的存在，可以监听data中定义的数据变化
  watch:{
    getList:{
      handler(newVal,oldVal){
        console.log(newVal,oldVal)
      },
      deep:true,
      immediate:true  // 立即执行
    }
  },
  computed:{
    getData(){
      // 计算属性 不能使用箭头函数，因为箭头函数没有this，会报错
      return this.getList
    }
  },
  created(){

  },

  mounted() {
    
  },
  methods: {
    getName(){
      console.log('getName');
      let aaa = tiemCreat(this.time);
      this.shijiName = aaa;
      console.log(aaa);
    }
  },
  
}