import request from "../../request/request";
const apis = {
    Notices(pageNum:any,pageSize:any){
        return request({
            url:'/graduate/getMessage',
            method:'GET',
            pageNum:pageNum,
            pageSize:pageSize
        })
    }
    

}
export default apis