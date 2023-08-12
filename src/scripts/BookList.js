export class BookList {
    constructor() {
        this.books = [] 
    }

    addBook(bookObj) {
        this.books.push(bookObj)
    }

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title)
        console.log(index, title);
        this.books.splice(index, 1)
        console.log(this.books);
    }

    showBooks(elementNode) {
        elementNode.innerHTML = ''
        this.books.forEach(book => {
            elementNode.innerHTML += 
            `
                <div class="main__item">
                    <div class="item__number">${book.number}</div>
                    <div class="item__title"><span>Title: </span>${book.title}</div>
                    <div class="item__author"><span>Author: </span>${book.author}</div>
                    <div class="item__count-of-page"><span>Amount of pages: </span>${book.pageAmount}</div>
                    <div class="item__is-read"><span>Read: </span>${book.isRead}</div>
                    <button class="item__delete-btn">Delete</button>
                </div>
            `
        })
    }
}