import { Animal } from "./Animal";
export class Ave implements Animal{
    Voa(): boolean {
        return true;
    }
    Nada(): boolean {
        return false;
    }
}