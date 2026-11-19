import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // console.log(req)
    const { method, originalUrl } = req;
    const start = Date.now();
    console.log('Chạy vào middleware')
    // Lắng nghe sự kiện 'finish' để log sau khi response hoàn tất
    res.on('finish', () => {
      const duration = Date.now() - start;
      const { statusCode } = res;
      console.log(
        `[${new Date().toISOString()}] ${method} ${originalUrl} ${statusCode} - ${duration}ms`,
      );
    });
    next();
  }
}
