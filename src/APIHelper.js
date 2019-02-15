
const HelperFunctions = {
  getHouses: new Promise(function(res){
    var json = {houses:[{"HouseName":"Loading"}]};
    fetch('https://us-central1-purdue-hcr-test.cloudfunctions.net/webApi/api/v1/houses')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      res(data);
    })
  })
};


export default HelperFunctions
