import request from "../../request/request";
const apis = {
    Notices(){
        return request({
            url:'/graduate/getMessage',
            method:'GET',
            
        })
    }
    

}
export default apis