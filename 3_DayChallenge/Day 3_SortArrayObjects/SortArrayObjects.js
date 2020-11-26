function sortLibrary() {
    // var library is defined, use it in your code
    // use console.log(library) to output the sorted library data
    function compare_to_sort(x,y) 
    {
    if (x.title < y.title)
        return -1;
    if (x.title > y.title)
        return 1;
    return 0;
    }
    
    console.log(library.sort(compare_to_sort));
}

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();