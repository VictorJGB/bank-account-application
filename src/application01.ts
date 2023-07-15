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
  console.log('\nFuncionário:', employee.Name);
  console.log('CPF:', employee.CPF);
  console.log('Telefone:', employee.Phone);
  console.log('Salário:', employee.Salary);
  console.log('Cargo:', employee.Office);
};

showEmployee(employee01);
showEmployee(employee02);
