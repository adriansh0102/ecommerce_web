
import Cookie from 'js-cookie'


interface CookieI {
    _id: string;
    amount: number;
}

export const saveCookie = (valor: string ) => {

    valor = 'pepito'

Cookie.set('number', valor)
    
}


export const deleteCookie = (cart: CookieI[]) => {
    
}