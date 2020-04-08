export default {
  queryURL(url) {
    var arr1 = url.split("?");
    var params = arr1[1] ? arr1[1].split("&") : '';//进行分割成数组
    var obj = {};//声明对象
    if (params) {
      for (var i = 0;i < params.length;i++) {
        var param = params[i].split("=");//进行分割成数组
        obj[param[0]] = param[1];//为对象赋值
      }
    }
    return obj;
  }
}