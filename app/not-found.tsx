import NextLink from "next/link";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      <h1 className="text-9xl font-bold text-green-500">404</h1>
      <p className="text-2xl font-semibold text-black mt-4">Something's missing.</p>
      <p className="text-zinc-500 mt-2">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>

    
      <NextLink
        style={{
          marginTop: "20px",
        }}
        href={`/admin?name=test&apellido=testApellido2222`} passHref prefetch={false}>
        <button
          type="button"
          className="font-medium text-green-500 hover:text-green-600"
        >
          Continue Shopping
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </NextLink>

    </div>
  )
}