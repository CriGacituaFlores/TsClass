class Department {
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'IT');
  }

  addEmployee(name: string) {
    if(name === 'Max') {
      return
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }
}

const accounting = new ITDepartment("123",["1"]);

const acc = new AccountingDepartment('d2', [])
acc.addReport('Algun reporte')
acc.addEmployee('Max')
acc.printReports();
acc.printEmployeeInformation();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

//accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();

//const copy = { name: "lala", describe: accounting.describe };

//copy.describe();
