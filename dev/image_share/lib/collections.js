Images = new Mongo.Collection("images");


Images.allow({
	insert:function(userId, doc) {
		console.log("testing security on image insert...");
		if(Meteor.user()) {
			console.log(doc);
			if(userId!=doc.createdBy) {
				return false;
			} else {
				return true;
			}
		} else {
			return true;

		}
	},
	remove: function(userId, doc) {
		return true;
	}
})