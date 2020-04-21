import Mock from "mockjs";
let swiper=Mock.mock('/api/swiper','get',{
    "list|6":[
        {
            "img":"@image('440x200','@color','我是自定义图片')"
        }
    ]
});
export default{swiper}