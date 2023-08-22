module.exports.homeList= function(req,res){
  res.render('location-list',{title:'Home'});
};

module.exports.locationInfo= function(req,res){
  res.render('location-info',{title:'Tulips'});
};
module.exports.locationInfo1= function(req,res){
  res.render('location-info1',{title:'Novotel'});
};
module.exports.locationInfo2= function(req,res){
  res.render('location-info2',{title:'ITC kakatiya'});
};

module.exports.addReview= function(req,res){
  res.render('location-review-form',{title:'Add review'});
};