import CategoryComponent from "./home/category/components/Category";
import HomeLayout from "./home/layout";



export default function Home() {
  return (
    <>
      <HomeLayout title={"Category"} pageDescription={"All category"} >
        <CategoryComponent />
      </HomeLayout>
    </>
  );
}
