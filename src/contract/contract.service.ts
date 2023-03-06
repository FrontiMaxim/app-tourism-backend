import { Injectable } from '@nestjs/common';
import { ContractRepository } from './contract.repository';
import { ContractModel } from './models/contract.model';
import { ClientModel } from 'src/client/models/client.model';
import { ContarctNotFoundException, ContractAlreadyExistsException, ContractCreatedException } from './errors';

@Injectable()
export class ContractService {

    constructor(private readonly contractRepository: ContractRepository) {}

    async getContractAllByClient(id_client: number): Promise<ContractModel[]> {
        return await this.contractRepository.findBy({
            client: {
                id: id_client
            }
        });
    }

    async getContract(id: number): Promise<ContractModel> {

        const contract: ContractModel =  await this.contractRepository.findOne({
            relations: {
                client: true
            },
            where: {
                id
            }
        });

        if(contract) {
            return contract;
        } 

        throw new ContarctNotFoundException();
    }

    async saveContract(newContract: ContractModel): Promise<void> {

        let contarct: ContractModel = await this.contractRepository.findOne({
            where: {
                ...newContract
            }
        });

        if(contarct) {
            throw new ContractAlreadyExistsException();
        }

        contarct = await this.contractRepository.save(newContract);

        if(!contarct) {
            throw new ContractCreatedException();
        }
    }
}
