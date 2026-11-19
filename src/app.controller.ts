import { BadRequestException, Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service.js';
import { UsersService } from './users/users.service.js';
import { AuthGuard } from './guards/auth.guard.js';
import { create } from 'domain';
import { Roles } from './decorators/roles.decorator.js';
import { Role } from './enum/role.enum.js';
import { TokenExpiredException } from './exceptions/token-expired.exception.js';

@Controller('/orders')
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UsersService) {}

  // get all orders
  @Get()
  getAllOrders(): string {
    throw new TokenExpiredException();
    console.log('Xử lý lấy danh sách sản phẩm')
    return this.appService.getAllOrders();
  }

  // get order detail
  @Get(":id")
  getOrderDetail(@Param("id") id: string): string {
    console.log('Xử lý lấy chi   tiết sản phẩm')
    return this.appService.getOrderDetail(id)
  }

  // create order
  @Post()
  @Roles(Role.Admin)
  createOrder(@Body("data") data: string) {
    console.log('Tạo order')
    return 'Tạo order';
  }

  // delete order
  @Delete(":id")
  deleteOrder(@Param("id") id: string) {
    console.log('Xóa sản phẩm: ' + id)
    return 'Xóa sản phẩm'
  }
}
