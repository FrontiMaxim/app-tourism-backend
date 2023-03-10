import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { PermitService } from './permit.service';
import { PermitModel } from './models/permit.model';


@Controller('api/permit')
export class PermitController {

    constructor(private readonly permitService: PermitService) {}

    @Get()
    async readPermitAll(): Promise<PermitModel[]> {
        return await this.permitService.getPermitAll();
    }

    @Get('/hotel/:id')
    async readPermitAllByHotel(@Param('id') id: number): Promise<PermitModel[]> {
        return await this.permitService.getPermitAllByIdHotel(id);
    }

    @Get('/:id')
    async readPermit(@Param('id') id: number): Promise<PermitModel> {

        try {
            return await this.permitService.getPermit(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }    
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createPermit(@Body() client: PermitModel): Promise<void> {

        try {
            await this.permitService.savePermit(client);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async updatePermit(@Body() client: PermitModel): Promise<void> {
        try {
            await this.permitService.changePermit(client);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    async deletePermit(@Param('id') id: number): Promise<void> {
        try {
            await this.permitService.removePermit(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }
}
