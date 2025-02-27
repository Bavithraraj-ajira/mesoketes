export class Tribe {
    private strength: number;

    constructor( strength: number){
        this.strength=strength;
    }
    public attack(): number{
        return this.strength;
    }
}