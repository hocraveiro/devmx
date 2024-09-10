import { PartialType } from '@nestjs/mapped-types';
import { CreatePresentationCommentDto } from './create-presentation-comment';

export class UpdatePresentationCommentDto extends PartialType(
  CreatePresentationCommentDto
) {}
