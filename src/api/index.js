//导入刚才写好的axios二次封装的requests
import requests from "./requests";
//三级联动接口
//localhost:8110/admin/core/integralGrade/list
//发请求：axios发请求返回结果promise对象
export const reqList = ()=>{
	//由于前面配置了基础路径，所以不用加/api
	return requests({url:'/integralGrade/list',method:'get'})
};
