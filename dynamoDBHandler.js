// AWS SDK to declare DynamoDB Document Client
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

/**
 * DynamoDBHandler Class
*/
module.exports = class DynamoDBHandler {
    
    constructor() {
        this.tableName = 'DummyData';
    }
    
    getDummyItemById(itemId, callback) {
        
        const params = { TableName: this.tableName, Key: {id: itemId} };
        
        return new Promise((resolve, reject) => {
            documentClient.get(params, (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    throw(err);
                }
            });   
        });
    }
    
}
