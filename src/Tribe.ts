export class Tribe {
    private strength: number;

    constructor( strength: number){
        if(strength<0)
            throw "Strength is negative"
        this.strength=strength;
    }
    public attack(): number{
        return this.strength;
    }
}