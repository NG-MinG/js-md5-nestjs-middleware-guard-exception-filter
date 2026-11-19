import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {

  private readonly logger = new Logger(GlobalExceptionFilter.name);
  
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    console.log(exception)
    
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR; // 500 cho các lỗi không phải HTTP
    
        const message =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error'; // Không lộ thông tin lỗi nội bộ ra client
    
    this.logger.error(`[${request.method}] ${request.url}`, exception);
    response.status(status).json({
      success: false,
      statusCode: status,
      errorCode: exception.response.errorCode,
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
