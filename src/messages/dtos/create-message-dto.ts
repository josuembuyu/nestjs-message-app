import { IsString } from 'class-validator';

// Data Transfer Object class For messages

export class CreateMessageDto {
  @IsString()
  content: string;
}
