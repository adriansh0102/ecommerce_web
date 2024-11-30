
export interface User {
    id:string;
    _id: string;
    full_name: string;
    username: string;
    password: string;
    role: string;
    movil: string;
    email: string;
    address: string;
    state: boolean;
    __v: number;
}

export interface ResultLogin {
    success: boolean;
    status: boolean,
    message: string;
    data: {
        user: User;
        token: string;
    }
}