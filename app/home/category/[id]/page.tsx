

import CategoryComponent from "../../category/components/Category"
import { ProductsCategoryComponent } from "../components/ProductsIdCategory"



export default function CategoryIdProductsPage({ params }: { params: { id: string } }) {

  return (
    <ProductsCategoryComponent params={{
      id: params.id
    }} />
  )
}
