import amqp from 'amqplib';

export class RabbitMQAdapter {
    private connection: amqp.Connection | null = null;
    private channel: amqp.Channel | null = null;

    async connect() {
        this.connection = await amqp.connect('amqp://localhost');
        this.channel = await this.connection.createChannel();
    }

    async sendToQueue(queue: string, message: string) {
        if (this.channel) {
            await this.channel.assertQueue(queue);
            this.channel.sendToQueue(queue, Buffer.from(message));
        }
    }

    async close() {
        if (this.channel) {
            await this.channel.close();
        }
        if (this.connection) {
            await this.connection.close();
        }
    }
}
