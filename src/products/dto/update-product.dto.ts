import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    readonly name?: string;
    readonly price?: number;
    readonly category?: string;
    readonly imageUrl?: string;
}