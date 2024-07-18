'use client'

import { useProducts } from "@/hooks";


export const ProductDetailComponent = () => {

  const { products , isLoading , isError } = useProducts(`/users`);
  
  

  // return <div>  --{data.data.username}</div>

  let amount:number = 10;
    return (
      <div className="p-4 md:p-4 bg-background">
        
           <div className=" flex items-center justify-center">
          <div className="flex flex-col md:flex-row bg-card p-6 rounded-lg shadow-md border border-border overflow-hidden">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground mb-2">Everyday Ruck Snack</h1>
              <div className="text-xl text-foreground mb-2">$220</div>
              
              <p className="text-muted-foreground mb-4">
                Don't compromise on n snack-carrying capacity with this lightweight and spacious bag. The drawsn snack-carrying capacity with this lightweight and spacious bag. The drawsn snack-carrying capacity with this lightweight and spacious bag. The drawsn snack-carrying capacity with this lightweight and spacious bag. The drawsn snack-carrying capacity with this lightweight and spacious bag. The n snack-carrying capacity with this lightweight and spacious bag. The drawsn snack-carrying capacity with this lightweight and spacious bag. The drawsn snack-carrying capacity with this lightweight and spacious bag. The drawsn snack-carrying capacity with this lightweight and spacious bag. The drawsn snack-carrying capacity with this lightweight and spacious bag. The drawsn snack-carrying capacity with this lightweight and spacious bag. The drawsn snack-carrying capacity with this lightweight and spacious bag. The draws-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.
              </p>
              <div className="flex items-center mb-4">
                <span className="text-green-600">●</span>
                <span className="text-muted-foreground ml-2">In stock and ready to ship</span>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-foreground mb-2">Amount</h2>
                <div className="flex space-x-4">
                  <button 
                  onClick={() => {
                    amount--;
                    console.log(amount);
                  }}
                  className="flex-1 border border-border p-1 rounded-lg text-foreground hover:bg-green-400">
                    <div className="text-lg font-semibold">-</div>
                  </button>
                  <button 
                  
                  
                  className="flex-1 border border-border p-1 rounded-lg text-foreground">
                    <div className="text-lg font-semibold">{amount}</div>
                  </button>
                  <button 
                  
                  className="flex-1 border border-border p-4 rounded-lg text-foreground hover:bg-green-400">
                    <div className="text-lg font-semibold">+</div>
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-muted-foreground">What size should I buy?</span>
                <img  alt="info-icon" src="https://openui.fly.dev/openui/16x16.svg?text=ℹ️" className="inline ml-2" />
              </div>
              <button className="btn-primary w-full bg-primary text-primary-foreground p-4 rounded-lg hover:bg-primary/80 mb-4">Add to bag</button>
            </div>
            <div className="flex-1 mt-6 md:mt-0 md:ml-6">
              <div style={{
                display: "flex",
                justifyContent: "center",
              }}>
              <img src="https://placehold.co/400x533" alt="Everyday Ruck Snack" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        
          {/* <div>{data.data[0].username}</div> */}
          
        </div>
        
        
        
    )
}

 const car = () => {
  let amount:number = 1;
  return amount++
 }

export default ProductDetailComponent;