export const people = [{
    id : 1,
    name : "kyle",
    age : 36,
    gender : "Female"
    },
    {
    id :2,
    name : "eunhye",
    age : 31,
    gender : "Mail"
    }];

export const getById = (id) => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}