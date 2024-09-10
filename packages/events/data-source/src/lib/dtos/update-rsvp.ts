import { PartialType } from '@nestjs/mapped-types';
import { CreateRSVPDto } from './create-rsvp';

export class UpdateRSVPDto extends PartialType(CreateRSVPDto) {}
