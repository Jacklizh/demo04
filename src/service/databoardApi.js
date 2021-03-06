const DATABOARD_API = {
    //登录系统
    loginInfo:{
        method:'post',
        url:'https://elm.cangdu.org/admin/login'
    },
    //退出系统
    exitSystem:{
       method:'get',
       url:'https://elm.cangdu.org/admin/singout'
    },
    //获取用户列表的数据
    getDataboard:{
        method:'get',
        url:'https://elm.cangdu.org/v1/users/list'
    },
    //获取商家列表数据
    merchantList:{
        method:'get',
        url:'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762'
    },
    //获取食品列表数据
    getfoodlist:{
       method:'get',
       url:'https://elm.cangdu.org/shopping/v2/foods'
    },
    //获取dialog下拉框里的数据
    getfoodSort:{
       method:'get',
       url:'https://elm.cangdu.org/shopping/getcategory/2'
    },
    //更新编辑食品的数据
    submitfood:{
        method:'post',
        url:'https://elm.cangdu.org/shopping/v2/updatefood'
    },
    //获取订单列表
    getOrderList:{
        method:'get',
        url:'https://elm.cangdu.org/bos/orders'
    },
    //获取管理员列表
    getAdmin:{
       method:'get', 
       url:'https://elm.cangdu.org/admin/all'
    },
    getCurrentCity: {
        method:'get',
        url:'https://elm.cangdu.org/v1/cities?type=guess'
    }
}
export default DATABOARD_API