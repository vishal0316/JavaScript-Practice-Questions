function filterUsersByName(users, keyword) {
  const lowercaseKeyword = keyword.toLowerCase();

  const filteredUsers = users.filter((user) => {
    const lowercaseName = user.name.toLowerCase();
    return lowercaseName.includes(lowercaseKeyword);
  });
  return filteredUsers;
}

const users = [
  { name: "RoadsideCoder" },
  { name: "JavaScriptFanatic" },
  { name: "CodeNinja" },
  { name: "Hacker123" },
  { name: "ProgrammerGirl" },
  { name: "roadside123" },
];

console.log(filterUsersByName(users, "code"));
