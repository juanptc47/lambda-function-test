// DynamoDB Handler
const DynamoDBHandler = require('./dynamoDBHandler');
const dynamoDBHandler = new DynamoDBHandler();

/**
 * getDataFromDynamoD
 * 
*/
exports.handler = async (event) => {
    
    let dummyItem = null;
    let response = null;
    
    try {
        dummyItem = await dynamoDBHandler.getDummyItemById('123456');
        response = {
            status: 200,
            body: JSON.stringify(dummyItem),
        }
    } catch(e) {
        response = {
            status: 500,
            body: JSON.stringify('Sorry, something went wrong on our side...'),
        }
    }

    return response;
};