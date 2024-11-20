export interface IProducto {
  id?: number;
  nombre?: string | null;
  descripcion?: string | null;
}

export class Producto implements IProducto {
  constructor(
    public id?: number,
    public nombre?: string | null,
    public descripcion?: string | null,
  ) {}
}
