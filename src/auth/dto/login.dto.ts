import { ApiProperty } from "@nestjs/swagger";

export class LoginDto{
@ApiProperty({example: "samoelcostaviza@gmail.com"})
email: string;

@ApiProperty({example: "@123Abcd"})
password: string;
}