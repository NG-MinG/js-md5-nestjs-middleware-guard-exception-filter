import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAllOrders(): string {
    return 'Danh sách orders'
  }

  getOrderDetail(id: string): string {
    return 'Chi tiết orders: ' + id
  }
}
