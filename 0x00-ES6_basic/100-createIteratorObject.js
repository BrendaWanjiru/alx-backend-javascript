export default function createIteratorObject(report) {
  const departments = Object.values(report);

  // Flatten the array of employees from all departments
  const allEmployees = departments.flatMap(department => department);

  // Create an iterator for the array of all employees
  const iterator = allEmployees[Symbol.iterator]();

  return iterator;
}

