import CategoryComponent from "../../category/components/Category"
import ProductDetailComponent from "../components/ProductDetail"



export default function CategoryPage({ params }: { params: { id: string } }) {

  return (
    <ProductDetailComponent params={{
      id: params.id
    }} />
  )
}

