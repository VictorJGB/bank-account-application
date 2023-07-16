import Employee from './models/Employee';

const employee01 = new Employee(
  2500.0,
  '000.000.000-01',
  'Antônio',
  '(88) 9 9111-2292',
  'Gerente'
);
const employee02 = new Employee(
  1800.0,
  '000.000.000-02',
  'Rafael',
  '(88) 9 9222-3393',
  'Atendente'
);

const showEmployee = (employee: Employee) => {
  console.log('Funcionário:', employee.Name);
  console.log('CPF:', employee.CPF);
  console.log('Telefone:', employee.Phone);
  console.log('Salário:', employee.Salary);
  console.log('Cargo:', employee.Office);
};

employee01.authenticate();
showEmployee(employee01);

employee02.authenticate();
showEmployee(employee02);
