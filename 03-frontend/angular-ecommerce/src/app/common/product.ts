// Basically an entity class, this is the parameters that
// will be read in from remote API
export class Product {

  id: string;
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  unitsInStock: number;
  dateCreated: Date;
  lastUpdated: Date;  
}
