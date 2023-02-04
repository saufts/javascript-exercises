const getTheTitles = function(books) {

        let titles = books.map(book => {

            return book.title;
             
        });
        return titles;     
};

// Do not edit below this line
module.exports = getTheTitles;
