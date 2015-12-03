// if(Meteor.isServer) {
Meteor.startup(function() {
	console.log("I, too, am the server.")
	if(Images.find().count()==0) {
		Images.insert(
			{
				img_src: "copy-2014-11-21.jpg",
				img_alt: "My Nafi"
			});
		Images.insert(
			{
				img_src: "copy-20141129_101805-MIX.jpg",
				img_alt: "Nafi again."
			}
		);
	}

});
// }