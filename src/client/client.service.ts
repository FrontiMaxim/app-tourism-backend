import { Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { ClientModel } from './models/client.model';
import { ClientAlreadyExistsException } from './errors/clientAlreadyExists.error';
import { СlientCreatedException } from './errors/clientCreated.error';
import { СlientUpdatedException } from './errors/clientUpdated.error';
import { DeleteResult, UpdateResult } from 'typeorm';
import { СlientDeletedException } from './errors/clientDeleted.error';
import { ClientNotFoundException } from './errors/clientNotFound.error';

@Injectable()
export class ClientService {

    constructor(private readonly clientRepository: ClientRepository) {}

    async getClientAll(): Promise<ClientModel[]> {
        return await this.clientRepository.find();
    }

    async getClient(id: number): Promise<ClientModel> {

        const client: ClientModel =  await this.clientRepository.findOneBy({
            id
        });

        if(client) {
            return client;
        } 

        throw new ClientNotFoundException();
    }

    async saveClient(newClient: ClientModel): Promise<void> {

        let client: ClientModel = await this.clientRepository.findOneBy({
            passportNumber: newClient.passportNumber,
            passportSeries: newClient.passportSeries
        });

        if(client) {
            throw new ClientAlreadyExistsException();
        }

        client = await this.clientRepository.save(newClient);

        if(!client) {
            throw new СlientCreatedException();
        }
    }


    async changeClient(changedClient: ClientModel): Promise<void> {
        
        const result: UpdateResult = await this.clientRepository.update({
            id: changedClient.id
        }, changedClient);

        if(!result.affected) {
            throw new СlientUpdatedException();
        }
    }


    async removeClient(id: number): Promise<void> {
        
        const result: DeleteResult = await this.clientRepository.delete({
            id
        });

        if(!result.affected) {
            throw new СlientDeletedException();
        }
    }
}
