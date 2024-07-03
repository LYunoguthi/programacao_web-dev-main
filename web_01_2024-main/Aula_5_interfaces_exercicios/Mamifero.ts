import { Animal } from "./Animal";
export class Mamifero implements Animal{
    Voa(): boolean {
        return false;
    }
    Nada(): boolean {
        return true;
    }
}