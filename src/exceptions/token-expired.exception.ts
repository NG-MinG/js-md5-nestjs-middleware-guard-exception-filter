import { HttpStatus } from "@nestjs/common";
import { BusinessException } from "./business.exception.js";

export class TokenExpiredException extends BusinessException {
  constructor() {
    super('Phiên đăng nhập không hợp lệ', '1004', HttpStatus.UNAUTHORIZED)
  }
}
