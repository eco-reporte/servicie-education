import AWS from 'aws-sdk';

export class S3Adapter {
    private s3: AWS.S3;

    constructor() {
        this.s3 = new AWS.S3();
    }

    async uploadFile(bucket: string, key: string, body: Buffer | Uint8Array | Blob | string) {
        const params = {
            Bucket: bucket,
            Key: key,
            Body: body
        };
        return this.s3.upload(params).promise();
    }

    async getFile(bucket: string, key: string) {
        const params = {
            Bucket: bucket,
            Key: key
        };
        return this.s3.getObject(params).promise();
    }
}
