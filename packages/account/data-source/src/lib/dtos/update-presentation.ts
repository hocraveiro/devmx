import { PartialType } from '@nestjs/mapped-types';
import { CreatePresentationDto } from './create-presentation';

export class UpdatePresentationDto extends PartialType(CreatePresentationDto) {}
