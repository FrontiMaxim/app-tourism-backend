import { Injectable } from '@nestjs/common';
import { HotelRepository } from './hotel.repository';
import { HotelModel } from './models/hotel.model';
import { DeleteResult, UpdateResult } from 'typeorm';
import { HotelNotFoundException } from './errors/hotelNotFound.error';
import { HotelAlreadyExistsException } from './errors/hotelAlreadyExists.error';
import { HotelCreatedException } from './errors/hotelCreated.error';
import { HotelUpdatedException } from './errors/hotelUpdated.error';
import { HotelDeletedException } from './errors/hotelDeleted.error';

@Injectable()
export class HotelService {

    constructor(private readonly hotelRepository: HotelRepository) {}

    async getHotelAll(): Promise<HotelModel[]> {
        return await this.hotelRepository.find();
    }

    async getHotel(id: number): Promise<HotelModel> {

        const hotel: HotelModel =  await this.hotelRepository.findOneBy({
            id
        });

        if(hotel) {
            return hotel;
        } 

        throw new HotelNotFoundException();
    }

    async saveHotel(newHotel: HotelModel): Promise<void> {

        let client: HotelModel = await this.hotelRepository.findOne({
            where: {
                ...newHotel
            }
        });

        if(client) {
            throw new HotelAlreadyExistsException();
        }

        client = await this.hotelRepository.save(newHotel);

        if(!client) {
            throw new HotelCreatedException();
        }
    }


    async changeHotel(changedHotel: HotelModel): Promise<void> {
        
        const result: UpdateResult = await this.hotelRepository.update({
            id: changedHotel.id
        }, changedHotel);

        if(!result.affected) {
            throw new HotelUpdatedException();
        }
    }


    async removeHotel(id: number): Promise<void> {
        
        const result: DeleteResult = await this.hotelRepository.delete({
            id
        });

        if(!result.affected) {
            throw new HotelDeletedException();
        }
    }
}
