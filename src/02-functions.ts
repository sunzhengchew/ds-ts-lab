import {Friend, Colleague, EmailContact, FriendName } from './myTypes'
import { friends, colleagues } from "./01-basics";


function older(f: Friend) {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

function highestExtension(cs: Colleague[]) { 
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string,
  extension: number = 0
) {
  cs.push({
    name,
    department,
    contact: {
      email,
      extension,
    },
  });
}

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

function findFriends(
  friends: Friend[],
  predicate: (friend: Friend) => boolean
): FriendName[] {
  return friends
  .filter(predicate)
  .map((friend) => ({ name: friend.name }));
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
