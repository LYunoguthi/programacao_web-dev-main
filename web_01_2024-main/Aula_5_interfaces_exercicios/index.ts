import { Animal } from "./Animal";
import { Ave } from "./Ave";
import { Mamifero } from "./Mamifero";

function testeanimal(animal: Animal): void {
    animal.Nada();
    animal.Voa();
}  

const ave = new Ave();
const mamifero = new Mamifero();

testeanimal(ave);
testeanimal(mamifero);