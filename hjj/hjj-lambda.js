let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	sns.unsubscribe({
		SubscriptionArn: 'arn:aws:sns:us-east-1:480964559519:mockT1:a17b5ada-c672-432b-bb1d-f384a3fe289b'
	}).promise()
		.then(data => {
			console.log(data);
			callback(null,data);
 		})
		.catch(err => {
			console.log("error",err);
		});

	callback(null, 'Successfully executed');
}