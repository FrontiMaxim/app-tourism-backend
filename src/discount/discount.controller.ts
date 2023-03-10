import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Delete } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountWithoutPermitsModel } from './models/discountWithoutPermits.model';

@Controller('api/discount')
export class DiscountController {

    constructor(private readonly discountService: DiscountService) {}

    @Get()
    async readDiscountAll(): Promise<DiscountWithoutPermitsModel[]> {
        return await this.discountService.getDiscountAll();
    }

    @Get('/:id')
    async read(@Param('id') id: number): Promise<DiscountWithoutPermitsModel> {

        try {
            return  await this.discountService.getDiscount(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }    
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createDiscount(@Body() discount: DiscountWithoutPermitsModel): Promise<void> {

        try {
            await this.discountService.saveDiscount(discount);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async updateDiscount(@Body() discount: DiscountWithoutPermitsModel): Promise<void> {
        try {
            await this.discountService.changeDiscount(discount);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    async deleteDiscount(@Param('id') id: number): Promise<void> {
        try {
            await this.discountService.removeDiscount(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }
}
