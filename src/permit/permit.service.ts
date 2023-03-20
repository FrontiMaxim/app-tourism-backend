import { Injectable } from '@nestjs/common';
import { PermitRepository } from './permit.repository';
import { PermitModel } from './models/permit.model';
import { DeleteResult, UpdateResult } from 'typeorm';
import { PermitAlreadyExistsException, PermitCreatedException, PermitDeletedException, PermitNotFoundException, PermitUpdatedException } from './errors';


@Injectable()
export class PermitService {

    constructor(private readonly permitRepository: PermitRepository) {}

    async getPermitAll(): Promise<PermitModel[]> {
        return await this.permitRepository.find({
            relations: {
                hotel: true,
                discount: true
            }
        });
    }

    async getPermit(id: number): Promise<PermitModel> {

        const permit: PermitModel =  await this.permitRepository.findOne({
            relations: {
                hotel: true,
                discount: true
            },
            where: {
                id
            }  
        });

        if(permit) {
            return permit;
        } 

        throw new PermitNotFoundException();
    }

    
    async getPermitAllByIdHotel(id: number): Promise<PermitModel[]> {
        return await this.permitRepository.find({
            relations: {
                hotel: true,
                discount: true
            },
            where: {
                hotel: {
                    id
                }
            }
        });
    }

    async savePermit(newPermit: PermitModel): Promise<void> {

        let permit: PermitModel = await this.permitRepository.findOne({
            where: {
                hotel: {
                    name: newPermit.hotel.name
                },
                timeStart: newPermit.timeStart,
                timeFinish: newPermit.timeFinish
            }
        });

        if(permit) {
            throw new PermitAlreadyExistsException();
        }

        permit = await this.permitRepository.save(newPermit);

        if(!permit) {
            throw new PermitCreatedException();
        }
    }


    async changePermit(changedPermit: PermitModel): Promise<void> {

        const result: UpdateResult = await this.permitRepository.update({
            id: changedPermit.id
        }, {
            ...changedPermit,
            discount: changedPermit.discount
        },
        
        );

        if(!result.affected) {
            throw new PermitUpdatedException();
        }
    }


    async removePermit(id: number): Promise<void> {
        
        const result: DeleteResult = await this.permitRepository.delete({
            id
        });

        if(!result.affected) {
            throw new PermitDeletedException();
        }
    }
}
