import { Tribe } from "../src/Tribe";

describe("Tribe", () => {
    it("should create a tribe with the given strength and return the strength", () => {
        const tribe = new Tribe(5);
        expect(tribe.attack()).toBe(5);
    });

});
