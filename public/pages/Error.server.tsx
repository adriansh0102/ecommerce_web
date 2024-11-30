
export default function ErrorServer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      <h1 className="text-9xl font-bold text-green-500">500</h1>
      <p className="text-2xl font-semibold text-black mt-4">Problemas con el Servidor.</p>
      <p className="text-zinc-500 mt-2">Por favor contacte con el Administrador</p>
    </div>
  )
}