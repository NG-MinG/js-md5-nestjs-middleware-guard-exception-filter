import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {

  getConnection() {
    return "Database connection"
  }
}
