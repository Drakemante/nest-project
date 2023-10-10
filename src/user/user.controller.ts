import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService as UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: "Criar novo usuário"
  })
  @Post()
  @ApiOperation({summary: 'Criar novo usuário',})
  create(@Body() createAuthDto: CreateUserDto) {
    try {
      return this.userService.create(createAuthDto);
    } catch (error) {
      console.log(error)
    }
  }

  @Get()
  @ApiOperation({summary: 'Pesquisar todos os usúarios'})
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Pesquisar um usúario por id'})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Alterar dados de usúario'})
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.userService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Deletar um usúario'})
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

