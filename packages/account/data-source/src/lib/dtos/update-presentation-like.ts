import { PartialType } from '@nestjs/mapped-types';
import { CreatePresentationLikeDto } from './create-presentation-like';

export class UpdatePresentationLikeDto extends PartialType(
  CreatePresentationLikeDto
) {}
