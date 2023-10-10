import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'zariel'})
    @IsString()
    name: string;
    @ApiProperty({example: 'email@mail.com'})
    @IsEmail()
    email: string;
    @ApiProperty({example: '@123Abcd'})
    @IsString()
    @MinLength(8, { message: 'Senha deve conter 8 digitos' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'Senha muito fraca',
    })
    password: string;
    @ApiProperty({example: 'https://br.pinterest.com/udeivide/foto-sem-perfil/'})
    @IsString()
    picture: string;
}
