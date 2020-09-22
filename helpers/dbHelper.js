module.exports = {
  formatData: (data) => {
    if (Array.isArray(data)) {
      //data is an array
      let newDataList = [];
            for(value of data){
                let v = value.toObject();
                v['id'] = v._id;
                delete v['__v'];
                delete v['_id'];
                delete v['password'];
                newDataList.push(v);
            }
            return newDataList;

      
    }

    let v = data.toObject();
    v['id'] = v._id;
    delete v['__v'];
    delete v['password'];
    delete v['_id'];
    return v; 
  },
};
