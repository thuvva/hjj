let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	sns.unsubscribe({
		SubscriptionArn: 'arn:aws:sns:us-east-1:480964559519:mockT1:arn:aws:sns:us-east-1:480964559519:mockT1:a17b5ada-c672-432b-bb1d-f384a3fe289b'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});

	callback(null, 'Successfully executed');
}