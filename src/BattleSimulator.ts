import { Wall } from "./Wall";
import { Battle } from "./Battle";
import { Tribe } from "./Tribe";

export class BattleSimulator {
    private wall: Wall;
    private successfulAttacks: number;

    constructor() {
        this.wall = new Wall();
        this.successfulAttacks = 0;
    }

    public processAttacks(days: string[]): number {
        for (const day of days) {
            const attacks: Battle[] = this.parseDayAttacks(day);
            let breachedAttacks: { direction: string; strength: number }[] = [];

            for (const attack of attacks) {
                if (this.wall.isBreached(attack.direction, attack.tribe.attack())) {
                    this.successfulAttacks++;
                    breachedAttacks.push({ direction: attack.direction, strength: attack.tribe.attack() });
                }
            }

            this.wall.reinforceBatch(breachedAttacks);
        }
        return this.successfulAttacks;
    }

    private parseDayAttacks(day: string): Battle[] {
        const parts = day.split("$")[1].split(/[;:]/);
        return parts.map(part => {
            const [tribeName, direction, , strength] = part.trim().split(" - ");
            const tribe = new Tribe(parseInt(strength)); // Create Tribe instance with strength
            return new Battle(tribe, direction);
        });
    }
}
