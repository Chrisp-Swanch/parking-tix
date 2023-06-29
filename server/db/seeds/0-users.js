/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, created_at: 1687147209343, name: 'Ektaj', profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/640px-Arnold_Schwarzenegger_1974.jpg', email: 'ek@taj.com'},
    {id: 2, created_at: 1687147209343, name: 'Chris', profile_image: 'https://www.thespruce.com/thmb/V1Z-qinMq2FFXCCWAss4mc71B3c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mute-swan-adult-58ad87433df78c345b85b294.jpg', email: 'Chris@swan.com'},
    {id: 3, created_at: 1687147209343, name: 'Callum', profile_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Lo8a-_16JWU3rRo61APsxr2RAcbVvj9Tjg&usqp=CAU', email: 'Cal@lum.com'},
    {id: 4, created_at: 1687147209343, name: 'Brindha', profile_image: 'https://img.dog-learn.com/dog-breeds/mastiff/mastiff-sz14.jpg', email: 'Brin@dha.com'},
    {id: 5, created_at: 1687147209343, name: 'Oscar', profile_image: 'https://www.odt.co.nz/sites/default/files/story/2022/09/6xazhrxwvrma7ikqisv7ydbjhu.jpg', email: 'Os@car.com'},
  ]);
};