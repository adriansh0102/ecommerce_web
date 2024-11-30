
'use client'
import { Loader } from "@/app/components/ui";
import { useCategoryGetAll } from "@/hooks/useCategorys";
import ErrorServer from "@/public/pages/Error.server";
import NotElement from "@/public/pages/Not.element";
import NextLink from "next/link";


export default function CategoryComponent() {
  const { categorys, isLoading, isError } = useCategoryGetAll();

  return (
    <>
      {
        isError
          ? <ErrorServer />
          : isLoading
            ? <Loader />
            : categorys.status === 404 || categorys.status === 500
                ? <NotElement title="Not Element"/>
                : <div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:max-w-none ">
                    <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
    
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 lg:gap-y-6">
                      {categorys.data.map((callout) => (
                        <div key={callout._id} className="group relative">
                          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <NextLink href={`/home/category/${callout._id}`} passHref prefetch={false}>
                              {/* ponerle las fotos en el back a las categorias */}
                              <img
                                alt={callout.name}
                                src="../assets/img/descarga.jpeg"
                                className="h-full w-full object-cover object-center"
                              />
                            </NextLink>
                          </div>
                          <h3 className="mt-6 text-sm text-gray-500">
                            {/* <a href={'public/products'}>
                            <span className="absolute inset-0" />
                            {callout.name}
                          </a> */}
                          </h3>
                          <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          
      }
      
    </>



  )
}
