
var APP_ID = 'L2Ekpv1lcLVv7YlWo4wzRqpf-gzGzoHsz';
var APP_KEY = 'F84UauFgDqPdOAaGQEgqliQM';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

function add(addType, addContent) {
  // addType -> 
  // addContent -> 

  // 保存到数据库 -> response

  // return response

}

function remove() {}

function modify() {}

function getList() {}

export default{
 add(listName,listContent){
    var TestObject = AV.Object.extend(listName);
    var testObject = new TestObject();
    testObject.save({
     [listName]: listContent
    })  
  },
  getList(listName){
    let query = new AV.Query(listName);
    query.find().then(function (listName) {
      let array=listName.map(item=>item.attributes)
      let list=[]
      array.forEach(item=>{
        list.push(item.listName)
      })
      return list
    })
    // var query2 = new AV.Query('completeList');
    // query2.find().then(function (completeList) {
    //   let array2=completeList.map(item=>item.attributes)
    //   let completeEventList=[]
    //   array2.forEach(item=>{
    //     completeEventList.push(item.completeEventList)
    //   })
    //   console.log("test2",completeEventList)
    // })
  }
}