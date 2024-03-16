import { updateLocale } from "moment";
import Errors, { HttpCode, Message } from "../libs/Error";
import {
  Product,
  ProductInput,
  ProductUpdateInput,
} from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { shapeIntoMongooseObjectId } from "../libs/config";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }

  /*  SPA Starter*/

  /*  SPA Finisher*/

  /*  SSR Starter*/
  public async getAllProducts(): Promise<Product[]> {
    // string => ObjectId
    const result = await this.productModel.find().exec();
      if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

      return result
  };

  public async createNewProduct(input: ProductInput): Promise<Product> {
    // try().catch() => mongoDB errorlarni o'rniga o'zimizni customized errorlarni beradi
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.log("Error of Datatbase, model:CreateNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
  ): Promise<Product> {
    // string => ObjectId
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findByIdAndUpdate({ _id: id }, input, { new: true })
      .exec();
      if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

      return result
  }
  /*  SSR Finisher*/
}

export default ProductService;
