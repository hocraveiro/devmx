import {
  Get,
  Body,
  Post,
  Param,
  Patch,
  Query,
  Delete,
  Controller,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import {
  PageOptionsDto,
  ApiPaginatedResponse,
} from '@devmx/shared-data-source';
import {
  PresentationDto,
  PresentationFacade,
  CreatePresentationDto,
  UpdatePresentationDto,
} from '@devmx/account-data-source';

@ApiTags('Presentation')
@Controller('presentations')
export class PresentationsController {
  constructor(private readonly presentationFacade: PresentationFacade) {}

  @Get()
  @ApiPaginatedResponse(PresentationDto)
  async find(@Query() page: PageOptionsDto) {
    return this.presentationFacade.find({ page });
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Presentation encontrada' })
  @ApiNotFoundResponse({ description: 'Presentation não encontrada' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.presentationFacade.findOne({ id });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Post()
  @ApiCreatedResponse({ description: 'Presentation criada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  async create(@Body() createPresentation: CreatePresentationDto) {
    try {
      return await this.presentationFacade.create(createPresentation);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Presentation alterada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar conta' })
  async update(@Param('id') id: string, @Body() data: UpdatePresentationDto) {
    try {
      return await this.presentationFacade.update({ ...data, id });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Presentation apagada' })
  @ApiNotFoundResponse({ description: 'Presentation não encontrada' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar conta' })
  async delete(@Param('id') id: string) {
    const presentation = await this.presentationFacade.findOne({ id });
    if (!presentation) throw new NotFoundException();

    try {
      return await this.presentationFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  // @Get(':id/comments')
  // @ApiPaginatedResponse(PresentationCommentDto)
  // async findComments(@Query() page: PageOptionsDto) {
  //   return this.presentationCommentFacade.find({ page });
  // }

  // @Get(':id/comments/:commentId')
  // @ApiOkResponse({ description: 'Comentário encontrado' })
  // @ApiNotFoundResponse({ description: 'Comentário não encontrado' })
  // async findOneComment(@Param('commentId') commentId: string) {
  //   try {
  //     return await this.presentationCommentFacade.findOne({ id: commentId });
  //   } catch (err) {
  //     throw new NotFoundException(err);
  //   }
  // }

  // @Post(':id/comments')
  // @ApiCreatedResponse({ description: 'Comentário criado com sucesso' })
  // @ApiBadRequestResponse({ description: 'Problema ao criar comentário' })
  // async createComment(
  //   @Body() createPresentationComment: CreatePresentationCommentDto
  // ) {
  //   try {
  //     return await this.presentationCommentFacade.create(
  //       createPresentationComment
  //     );
  //   } catch (err) {
  //     throw new BadRequestException(err);
  //   }
  // }

  // @Patch(':id/comments/:commentId')
  // @ApiOkResponse({ description: 'Comentário alterado com sucesso' })
  // @ApiBadRequestResponse({ description: 'Problema ao alterar comentário' })
  // async updateComment(
  //   @Param('commentId') commentId: string,
  //   @Body() data: UpdatePresentationCommentDto
  // ) {
  //   try {
  //     return await this.presentationCommentFacade.update({
  //       ...data,
  //       id: commentId,
  //     });
  //   } catch (err) {
  //     throw new BadRequestException(err);
  //   }
  // }

  // @Delete(':id/comments/:commentId')
  // @ApiOkResponse({ description: 'Comentário apagado' })
  // @ApiNotFoundResponse({ description: 'Comentário não encontrado' })
  // @ApiBadRequestResponse({ description: 'Problema ao apagar comentário' })
  // async deleteComment(@Param('commentId') commentId: string) {
  //   const presentationComment = await this.presentationCommentFacade.findOne({
  //     id: commentId,
  //   });
  //   if (!presentationComment) throw new NotFoundException();

  //   try {
  //     return await this.presentationCommentFacade.remove(commentId);
  //   } catch (err) {
  //     throw new BadRequestException(err);
  //   }
  // }

  // @Get(':id/likes')
  // @ApiPaginatedResponse(PresentationLikeDto)
  // async findLikes(@Param('id') id: string, @Query() page: PageOptionsDto) {
  //   return this.presentationLikeFacade.find({ page });
  // }

  // @Get(':id/likes/:likeId')
  // @ApiOkResponse({ description: 'PresentationLike encontrada' })
  // @ApiNotFoundResponse({ description: 'PresentationLike não encontrada' })
  // async findOneLike(@Param('id') id: string, @Param('likeId') likeId: string) {
  //   try {
  //     return await this.presentationLikeFacade.findOne({ id: likeId });
  //   } catch (err) {
  //     throw new NotFoundException(err);
  //   }
  // }

  // @Post(':id/likes')
  // @ApiCreatedResponse({ description: 'PresentationLike criada com sucesso' })
  // @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  // async createLike(@Body() createPresentationLike: CreatePresentationLikeDto) {
  //   try {
  //     return await this.presentationLikeFacade.create(createPresentationLike);
  //   } catch (err) {
  //     throw new BadRequestException(err);
  //   }
  // }

  // @Patch(':id/likes/:likeId')
  // @ApiOkResponse({ description: 'PresentationLike alterada com sucesso' })
  // @ApiBadRequestResponse({ description: 'Problema ao alterar conta' })
  // async updateLike(
  //   @Param('id') id: string,
  //   @Param('likeId') likeId: string,
  //   @Body() data: UpdatePresentationLikeDto
  // ) {
  //   try {
  //     return await this.presentationLikeFacade.update({ ...data, id: likeId });
  //   } catch (err) {
  //     throw new BadRequestException(err);
  //   }
  // }

  // @Delete(':id/likes/:likeId')
  // @ApiOkResponse({ description: 'PresentationLike apagada' })
  // @ApiNotFoundResponse({ description: 'PresentationLike não encontrada' })
  // @ApiBadRequestResponse({ description: 'Problema ao apagar conta' })
  // async deleteLike(@Param('id') id: string, @Param('likeId') likeId: string) {
  //   const presentationLike = await this.presentationLikeFacade.findOne({
  //     id: likeId,
  //   });
  //   if (!presentationLike) throw new NotFoundException();

  //   try {
  //     return await this.presentationLikeFacade.remove(id);
  //   } catch (err) {
  //     throw new BadRequestException(err);
  //   }
  // }
}
