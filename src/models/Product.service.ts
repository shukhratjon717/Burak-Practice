import Errors, { HttpCode, Message } from "../libs/Error";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }

  /*  SPA Starter*/

  /*  SPA Finisher*/

  /*  SSR Starter*/
  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.log("Error of Datatbase, model:CreateNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
  /*  SSR Finisher*/
}

export default ProductService;
