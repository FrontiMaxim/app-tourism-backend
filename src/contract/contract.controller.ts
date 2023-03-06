import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractModel } from './models/contract.model';

@Controller('api/contract')
export class ContractController {

    constructor(private readonly contarctService: ContractService) {}

    @Get()
    async readContractAllByIdClient(@Query('id_client') id_client: number): Promise<ContractModel[]> {
        return await this.contarctService.getContractAllByClient(id_client);
    }

    @Get('/:id')
    async readContract(@Param('id') id: number): Promise<ContractModel> {
        try {
            const client: ContractModel = await this.contarctService.getContract(id);
            return client;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }    
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createContract(@Body() contratc: ContractModel): Promise<void> {

        try {
            await this.contarctService.saveContract(contratc);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.EXPECTATION_FAILED);
        }       
    }
}
