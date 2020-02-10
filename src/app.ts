class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("123", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

//accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();

//const copy = { name: "lala", describe: accounting.describe };

//copy.describe();
