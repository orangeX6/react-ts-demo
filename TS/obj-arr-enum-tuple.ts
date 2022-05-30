// -> Obj, array, tuple
// const person: {
//   name: string;
//   CGPA: number;
//   hobbies: string[];
//   role: [number, string]; // tuple - specifies we want a special array with exactly 2 elements, first one number and second string
// } = {
//   name: 'Pranav',
//   CGPA: 9.34,
//   hobbies: ['music', 'sports'],
//   role: [2, 'author'],
// };

//-> ENUM
// WITHOUT ENUM
// const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;

//WITH ENUM
// By default starts with one. But we can add any number or text
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR,
}

const person = {
  name: 'Pranav',
  CGPA: 9.34,
  hobbies: ['music', 'sports'],
  role: Role.AUTHOR,
};

// person.role.push('admin'); // allowed - but output is wrong
// person.role[1] = 10;
//person.role = [0,'admin','user']  // Not allowed
// person.role = [0, 'admin'];

let favoriteActivities: any[];
favoriteActivities = ['Sports'];

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is Author');
}
