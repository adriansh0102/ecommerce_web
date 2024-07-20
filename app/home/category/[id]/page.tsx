

import CategoryComponent from "../../category/components/Category"



export default function CategoryPage({ params }: { params: { id: string } }
  ) {

  return (
    <CategoryComponent params={{
      id: params.id
    }} />
  )
}

