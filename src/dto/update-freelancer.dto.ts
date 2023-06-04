/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateFreelancerDTO } from './create-freelancer.dto';

export class UpdatFreelancerDto extends PartialType(CreateFreelancerDTO) {}
