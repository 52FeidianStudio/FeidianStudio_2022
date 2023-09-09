import request from "../../request/request";
const apis = {
    Groups(){
        return request({
            url:'/department/getAllMessage',
            method:'GET', 
        })
    }
    

}
export default apis