


export default function CartComponent() {
    return (
        <div className="bg-background text-primary-foreground min-h-screen shadow-md">
            <div className="max-w-4xl mx-auto px-4 py-8 border rounded-lg border-primary">
                <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
                <hr />
                <div className="bg-card text-card-foreground p-4 rounded-lg flex items-center mb-4">
                    <img src="https://placehold.co/100" alt="Product Image" className="w-16 h-16 object-cover rounded-lg mr-4" />
                    <div className="flex-1">
                        <h2 className="text-lg font-bold">Product Name</h2>
                        <p className="text-sm text-muted-foreground">Product Description</p>
                        <p className="text-sm font-bold">$19.99</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="bg-secondary text-secondary-foreground px-3 py-1 mr-2 border rounded-lg border-primary">-</button>
                        <span className="text-lg font-bold rounded-lg border-primary" >1</span>
                        <button className="bg-primary text-primary-foreground px-3 py-1 ml-2 border rounded-lg border-primary">+</button>
                    </div>
                    <button className="bg-destructive text-destructive-foreground px-3 py-1 rounded-md ml-4">Remove</button>
                </div>
                
                <div className="bg-card text-card-foreground p-4 rounded-lg flex items-center mb-4">
                    <img src="https://placehold.co/100" alt="Product Image" className="w-16 h-16 object-cover rounded-lg mr-4" />
                    <div className="flex-1">
                        <h2 className="text-lg font-bold">Product Name</h2>
                        <p className="text-sm text-muted-foreground">Product Description</p>
                        <p className="text-sm font-bold">$19.99</p>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md mr-2">-</button>
                        <span className="text-lg font-bold">1</span>
                        <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md ml-2">+</button>
                    </div>
                    <button className="bg-destructive text-destructive-foreground px-3 py-1 rounded-md ml-4">Remove</button>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex items-center mb-4">
                    <img src="https://placehold.co/100" alt="Product Image" className="w-16 h-16 object-cover rounded-lg mr-4" />
                    <div className="flex-1">
                        <h2 className="text-lg font-bold">Product Name</h2>
                        <p className="text-sm text-muted-foreground">Product Description</p>
                        <p className="text-sm font-bold">$19.99</p>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md mr-2">-</button>
                        <span className="text-lg font-bold">1</span>
                        <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md ml-2">+</button>
                    </div>
                    <button className="bg-destructive text-destructive-foreground px-3 py-1 rounded-md ml-4">Remove</button>
                </div>
                
                <hr />
                <div className="bg-card text-card-foreground p-4 rounded-lg flex justify-between items-center ">
                    <p className="text-lg">Total:</p>
                    <p className="text-lg font-bold">$19.99</p>

                </div>
                <button className="btn-primary text-primary-foreground w-full py-2 mt-4 rounded-lg hover:bg-primary/80">Proceed to Checkout</button>
                
            </div>
        </div>
    )
}