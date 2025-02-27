import { BattleSimulator } from "../src/BattleSimulator";

describe("BattleSimulator", () => {
    let simulator: BattleSimulator;

    beforeEach(() => {
        simulator = new BattleSimulator();
    });

    describe("processAttacks", () => {
        test("should process multiple days and return correct successful attack count", () => {
            const attacks = [
                "Day 1$ T1 - N - X - 5 : T2 - W - X - 3",
                "Day 2$ T1 - S - X - 2"
            ];
            expect(simulator.processAttacks(attacks)).toBe(3);
        });

        test("should handle attacks reinforcing walls and return correct count", () => {
            const attacks = [
                "Day 1$ T1 - N - X - 3",
                "Day 2$ T1 - N - X - 4"
            ];
            expect(simulator.processAttacks(attacks)).toBe(2);
        });

        test("should not count an attack if the wall is already strong enough", () => {
            const attacks = [
                "Day 1$ T1 - W - X - 4",
                "Day 2$ T2 - W - X - 3"
            ];
            expect(simulator.processAttacks(attacks)).toBe(1);
        });

        test("should handle an empty attack list", () => {
            expect(simulator.processAttacks([])).toBe(0);
        });

        test("should throw an error for invalid attack format", () => {
            const invalidAttack = ["InvalidData"];
            expect(() => simulator.processAttacks(invalidAttack)).toThrow();
        });
    });
});
