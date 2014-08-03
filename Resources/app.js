var Admob = require('ti.admob');
var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

var admobView = Admob.createView({
	bottom : 0,
	width : 320,
	height : 50,
	adUnitId : 'ca-app-pub-5412085694258626/7839972995', // You can get your own at http: //www.admob.com/
	adBackgroundColor : 'black',
	dateOfBirth : new Date(2008, 10, 1, 12, 1, 1),
});
win.add(admobView);
var iAd = Ti.UI.iOS.createAdView({
	bottom : 0,
	height : 50,
	width : 320,
	zIndex : 1
});
win.add(iAd);
iAd.addEventListener('error', function(e) {
	iAd.hide();
});
iAd.addEventListener('load', function() {
	iAd.show();
});
iAd.hide();
win.open();
