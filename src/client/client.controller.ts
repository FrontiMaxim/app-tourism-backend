import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientModel } from './models/client.model';

@Controller('api/client')
export class ClientController {

    constructor(private readonly clientService: ClientService) {}

    @Get()
    async readClientAll(): Promise<ClientModel[]> {
        return await this.clientService.getClientAll();
    }

    @Get('/:id')
    async readClient(@Param('id') id: number): Promise<ClientModel> {

        try {
            const client: ClientModel = await this.clientService.getClient(id);
            return client;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }    
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createClient(@Body() client: ClientModel): Promise<void> {

        try {
            await this.clientService.saveClient(client);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async updateClient(@Body() client: ClientModel): Promise<void> {
        try {
            await this.clientService.changeClient(client);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    async deleteClient(@Param('id') id: number): Promise<void> {
        try {
            await this.clientService.removeClient(id);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }
}
