import { CitiesModel } from "./cities.model"


export interface UsersModel{
    id: string
    email: string
    cities?: CitiesModel[]
}