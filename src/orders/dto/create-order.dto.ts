export class CreateOrderDto {
    readonly customerId: number;
    readonly productIds: number[];
    readonly quantities: number[];
    readonly status: string;
  }