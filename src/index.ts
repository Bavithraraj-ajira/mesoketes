import { BattleSimulator } from "./BattleSimulator";

const input1 = ["Day 1$ T1 - N - X - 5 : T2 - W - X - 3", "Day 2$ T1 - S - X - 2"];
const input2 = ["Day 1$ T1 - N - X - 3", "Day 2$ T1 - N - X - 4"];
const input3 = ["Day 1$ T1 - W - X - 4", "Day 2$ T2 - W - X - 3"];
const input4 = ["Day 1$ T1 - E - X - 4", "Day 2$ T1 - W - X - 3"];
const input5 = ["Day 1$ T1 - E - X - 4", "Day 2$ T1 - W - X - 3 : T2 - E - X - 3"];
const input6 = ["Day 1$ T1 - E - X - 4", "Day 2$ T1 - W - X - 3 : T2 - E - X - 3", "Day 3$ T3 - N - X - 2: T2 - W - X - 4"];
const input7 = ["Day 1$ T1 - N - X - 3: T2 - S - X - 4: T3 - W - X - 2", "Day 2$ T1 - E - X - 4: T2 - N - X - 3: T3 - S - X - 2", "Day 3$ T1 - W - X - 3: T2 - E - X - 5: T3 - N - X - 2"];
const input8 = ["Day 1$ T1 - S - X - 4: T1 - N - X - 2: T3 - W - X - 3", "Day 2$ T2 - S - X - 5: T2 - N - X - 1: T3 - N - X - 3", "Day 3$ T1 - W - X - 2: T1 - W - X - 4: T2 - N - X - 3: T2 - S - X - 4"];

const simulator1 = new BattleSimulator();
console.log(simulator1.processAttacks(input1)); 

const simulator2 = new BattleSimulator();
console.log(simulator2.processAttacks(input2)); 

const simulator3 = new BattleSimulator();
console.log(simulator3.processAttacks(input3)); 

const simulator4 = new BattleSimulator();
console.log(simulator4.processAttacks(input4)); 

const simulator5 = new BattleSimulator();
console.log(simulator5.processAttacks(input5)); 

const simulator6 = new BattleSimulator();
console.log(simulator6.processAttacks(input6)); 

const simulator7 = new BattleSimulator();
console.log(simulator7.processAttacks(input7)); 

const simulator8 = new BattleSimulator();
console.log(simulator8.processAttacks(input8)); 