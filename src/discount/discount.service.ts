import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { DiscountRepository } from './discount.repository';
import { DiscountWithoutPermitsModel } from './models/discountWithoutPermits.model';
import { DiscountAlreadyExistsException, DiscountCreatedException, DiscountDeletedException, DiscountNotFoundException, DiscountUpdatedException } from './errors';

@Injectable()
export class DiscountService {

    constructor(private readonly discountRepository: DiscountRepository) {}

    async getDiscountAll(): Promise<DiscountWithoutPermitsModel[]> {
        return await this.discountRepository.find();
    }

    async getDiscount(id: number): Promise<DiscountWithoutPermitsModel> {

        const discount: DiscountWithoutPermitsModel =  await this.discountRepository.findOneBy({
            id
        });

        if(discount) {
            return discount;
        } 

        throw new DiscountNotFoundException();
    }

    async saveDiscount(newDiscount: DiscountWithoutPermitsModel): Promise<void> {

        let discount: DiscountWithoutPermitsModel = await this.discountRepository.findOne({
            where: {
                ...newDiscount
            }
        });

        if(discount) {
            throw new DiscountAlreadyExistsException();
        }

        discount = await this.discountRepository.save(newDiscount);

        if(!discount) {
            throw new DiscountCreatedException();
        }
    }


    async changeDiscount(changedDiscount: DiscountWithoutPermitsModel): Promise<void> {
        
        const result: UpdateResult = await this.discountRepository.update({
            id: changedDiscount.id
        }, changedDiscount);

        if(!result.affected) {
            throw new DiscountUpdatedException();
        }
    }


    async removeDiscount(id: number): Promise<void> {
        
        const result: DeleteResult = await this.discountRepository.delete({
            id
        });

        if(!result.affected) {
            throw new DiscountDeletedException();
        }
    }
}
