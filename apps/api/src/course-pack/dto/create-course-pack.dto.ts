import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Length, Min } from "class-validator";

export class CreateCoursePackDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  //   @IsInt()
  //   @Min(0)
  progress: number;

  //   @IsInt()
  difficulty: number;

  //   @IsBoolean()
  isFree: boolean;
}
