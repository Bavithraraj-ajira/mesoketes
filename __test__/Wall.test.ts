import { Wall } from "../src/Wall";

describe("Wall Class", () => {
    let wall: Wall;

    beforeEach(() => {
        wall = new Wall();
    });

    describe("isBreached", () => {
        test("should return true if the wall height is less than strength", () => {
            expect(wall.isBreached("N", 5)).toBe(true);
        });

        test("should throw an error for invalid direction", () => {
            expect(() => wall.isBreached("X", 5)).toThrow("Invalid direction");
        });
    });

    describe("reinforce", () => {
        test("should increase wall height if strength is greater", () => {
            wall.reinforce("S", 7);
            expect(wall.isBreached("S", 6)).toBe(false);
        });

        test("should not decrease wall height if strength is lower", () => {
            wall.reinforce("E", 10);
            wall.reinforce("E", 5);
            expect(wall.isBreached("E", 10)).toBe(false);
        });

        test("should throw an error for invalid direction", () => {
            expect(() => wall.reinforce("Z", 8)).toThrow("Invalid direction");
        });
    });

    describe("reinforceBatch", () => {
        test("should reinforce multiple directions correctly", () => {
            wall.reinforceBatch([
                { direction: "N", strength: 5 },
                { direction: "S", strength: 8 },
                { direction: "E", strength: 3 }
            ]);

            expect(wall.isBreached("N", 4)).toBe(false);
            expect(wall.isBreached("S", 7)).toBe(false);
            expect(wall.isBreached("E", 2)).toBe(false);
        });

        test("should not decrease existing wall heights", () => {
            wall.reinforce("W", 10);
            wall.reinforceBatch([
                { direction: "W", strength: 5 },
                { direction: "N", strength: 6 }
            ]);

            expect(wall.isBreached("W", 10)).toBe(false);
            expect(wall.isBreached("N", 6)).toBe(false);
        });

        test("should throw an error for invalid directions", () => {
            expect(() => {
                wall.reinforceBatch([
                    { direction: "N", strength: 5 },
                    { direction: "X", strength: 8 }
                ]);
            }).toThrow("Invalid direction");
        });
    });


   /*  describe("getHeight", () => {
        test("should return 0 of wall height initially", () => {
            wall.getHeight("S");
            expect(wall.getHeight("S")).toBe(0);
        });

        test("should return reinforced height", () => {
            wall.reinforce("E", 10);
            expect(wall.getHeight("E")).toBe(10);
        });

        test("should throw an error for invalid direction", () => {
            expect(() => wall.getHeight("Z")).toThrow("Invalid direction");
        });
    }); */
});
