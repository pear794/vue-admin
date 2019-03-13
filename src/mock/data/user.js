 import Mock from 'mockjs' //引入mock.js,主要用于模拟前后台交互

 const LoginUsers = [
     {
         id : 1,
         username : "admin",
         password : "123456",
         avatar : "https://wx.qlogo.cn/mmopen/vi_32/Pj1FD5JTX1MI8pdcyDjbmeLuvT1iaiacXTkdBUCHvjnNtClyv0BMUnKsoldyu7XnicBFmIvhAjhfREM44TKqWFPAw/132",
         name : "不爱梨"
     }
 ]

 const Users = [];

 for (let i = 0; i < 86; i++) {
    Users.push(Mock.mock({
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      addr: Mock.mock('@county(true)'),
      'age|18-60': 1,
      birth: Mock.Random.date(),
      sex: Mock.Random.integer(0, 1)
    }));
  }
  
  export { LoginUsers, Users };