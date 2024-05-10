const Books = [
    { title: 'book one', gener: 'fiction', publish: 1981, edition: 2004 },

    { title: 'book two', gener: 'non-fiction', publish: 1992, edition: 2008 },

    { title: 'book three', gener: 'history', publish: 1999, edition: 2007 },

    { title: 'book four', gener: 'physics', publish: 1989, edition: 2010 },

    { title: 'book five', gener: 'life science', publish: 2009, edition: 2014 },

    { title: 'book six', gener: 'chemistory', publish: 1987, edition: 2010 },

    { title: 'book seven', gener: 'bengali', publish: 1986, edition: 1996 },

    { title: 'book eight', gener: 'geography', publish: 2011, edition: 2018 },
];

let userBooks = Books.filter((bk) => bk.gener === 'history')

userBooks = Books.filter((bk) => { return bk.publish >= 1985 && bk.gener === 'chemistory' })

console.log(userBooks);


