import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Admin, Kafka } from 'kafkajs';

@Injectable()
export class AppService {

  private admin: Admin;
  constructor(@Inject('backend') private client: ClientKafka) {}

  async getUserList() {
    try{
    const data = await this.getUserListResult();
    return data;
    }catch(err) {
      console.error(err);
    }
  }

  private getUserListResult() {
    return new Promise((resolve) => {
      this.client
        .send('user-details',{})
        .subscribe((result: number) => {
          resolve(result);
        });
    });
  }
  async saveUser(item) {
    try{
      const data = await this.saveUserResult(item);
      return 'successfully saved data';
      }catch(err) {
        console.error(err);
      }
  }

  private saveUserResult(item) {
    return new Promise((resolve) => {
      this.client
        .send('save-user',JSON.stringify(item))
        .subscribe((result: any) => {
          resolve(result);
        });
    });
  }

  async onModuleInit() {
    this.client.subscribeToResponseOf('user-details');
    this.client.subscribeToResponseOf('save-user');
    const kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092'],
    });
    this.admin = kafka.admin();
    const topics = await this.admin.listTopics();

    const topicList = [];
    if (!topics.includes('user-details')) {
      topicList.push({
        topic: 'user-details',
        numPartitions: 10,
        replicationFactor: 1,
      });
    }

    if (!topics.includes('user-details.reply')) {
      topicList.push({
        topic: 'user-details.reply',
        numPartitions: 10,
        replicationFactor: 1,
      });
    }

    if (!topics.includes('save-user')) {
      topicList.push({
        topic: 'save-user',
        numPartitions: 10,
        replicationFactor: 1,
      });
    }

    if (!topics.includes('save-user.reply')) {
      topicList.push({
        topic: 'save-user.reply',
        numPartitions: 10,
        replicationFactor: 1,
      });
    }

    if (topicList.length) {
      await this.admin.createTopics({
        topics: topicList,
      });
    }
  }
}
