import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from './create-account';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
