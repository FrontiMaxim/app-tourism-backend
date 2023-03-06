import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Delete } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelModel } from './models/hotel.model';


@Controller('api/hotel')
export class HotelController {

    constructor(private readonly hotelService: HotelService) {}

    @Get()
    async readHotelAll(): Promise<HotelModel[]> {
        return await this.hotelService.getHotelAll();
    }

    @Get('/:id')
    async readHotel(@Param('id') id: number): Promise<HotelModel> {

        try {
            const client: HotelModel = await this.hotelService.getHotel(id);
            return client;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }    
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createHotel(@Body() client: HotelModel): Promise<void> {

        try {
            await this.hotelService.saveHotel(client);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async updateHotel(@Body() client: HotelModel): Promise<void> {
        try {
            await this.hotelService.changeHotel(client);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    async deleteHotel(@Param('id') id: number): Promise<void> {
        try {
            await this.hotelService.removeHotel(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }
}
