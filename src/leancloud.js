
var APP_ID = 'L2Ekpv1lcLVv7YlWo4wzRqpf-gzGzoHsz';
var APP_KEY = 'F84UauFgDqPdOAaGQEgqliQM';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// function add(addType, addContent) {
  // addType -> 
  // addContent -> 

  // 保存到数据库 -> response

  // return response

// }

// function remove() {}

// function modify() {}

// function getList() {}

function add(listName,listContent){
  var TestObject = AV.Object.extend(listName);
  var testObject = new TestObject();
  testObject.save({
   listName: listContent
  })  
}

function getList(xxx){ // params
  let query = new AV.Query(xxx);
  return query.find().then(function (yyy) { // response
    let array=yyy.map(item => {
      let obj = {}
      obj.key = item.attributes
      obj.id = item.id
      return obj
    })
    let list=[]
    array.forEach(item=>{
      list.push(item)
    })
    return list
  }) 
}
function remove(name,complete){
  var todo = AV.Object.createWithoutData(name, complete.id);
  todo.destroy()
  // .then(function () {
    // 删除成功
  // });
}
export default{
  add,
  getList,
  remove
}