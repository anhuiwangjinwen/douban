//配置全局请求
//引入axios
import axios from 'axios'

//配置
const api = {
    getDetail(item){
        return new Promise ((resolve,reject) =>{
            axios({
                method:item.method,
                url:item.url,
                params:item.params ? item.params : '',
                data:item.params ? item.params : '',
            }).then(
                (res)=>{
                    resolve(res)
                }
            )
        }).catch((err)=>{
            reject(err)    
        })
    }
}



//暴露出去
export default api