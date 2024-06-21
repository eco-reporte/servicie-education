import AWS from 'aws-sdk';

export class S3Adapter {
    private s3: AWS.S3;

    constructor() {
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION
        });
    }

    async uploadFile(file: any) {
        const params = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: file.originalname,
            Body: file.buffer
        };

        return await this.s3.upload(params).promise();
    }
}
