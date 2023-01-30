let date = new Date(2023, 0, 1);
date.setDate(date.getDate() + 50);
date.setMonth(date.getMonth() + 1);
date.setFullYear(date.getFullYear() + 1);

let dateOptions = {
    year: "numeric"
};
console.log(date.toLocaleDateString(undefined, dateOptions));