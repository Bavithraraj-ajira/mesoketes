export class Wall {
    private northHeight: number;
    private southHeight: number;
    private eastHeight: number;
    private westHeight: number;

    constructor() {
        this.northHeight = 0;
        this.southHeight = 0;
        this.eastHeight = 0;
        this.westHeight = 0;
    }

    public isBreached(direction: string, strength: number): boolean {
        return this.getHeight(direction) < strength;
    }

    public reinforce(direction: string, strength: number): void {
        if (this.getHeight(direction) < strength) {
            this.setHeight(direction, strength);
        }
    }

    public reinforceBatch(updates: { direction: string; strength: number }[]): void {
        updates.forEach(({ direction, strength }) => {
            if (this.getHeight(direction) < strength) {
                this.setHeight(direction, strength);
            }
        });
    }


    private getHeight(direction: string): number {
        switch (direction) {
            case 'N': return this.northHeight;
            case 'S': return this.southHeight;
            case 'E': return this.eastHeight;
            case 'W': return this.westHeight;
            default: throw new Error('Invalid direction');
        }
    }

    private setHeight(direction: string, strength: number): void {
        switch (direction) {
            case 'N': this.northHeight = strength; break;
            case 'S': this.southHeight = strength; break;
            case 'E': this.eastHeight = strength; break;
            case 'W': this.westHeight = strength; break;
            default: throw new Error('Invalid direction');
        }
    }
}