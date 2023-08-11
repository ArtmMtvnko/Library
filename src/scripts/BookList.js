export class BookList {
    constructor() {
        this.books = [] 
    }

    addBook(bookObj) {
        this.books.push(bookObj)
    }

    showBooks(elementNode) {
        elementNode.innerHTML = ''
        this.books.forEach(book => {
            elementNode.innerHTML += 
            `
                <div class="main__item">
                    <div class="item__title">${book.title}</div>
                    <div class="item__author">${book.author}</div>
                    <div class="item__count-of-page">${book.pageAmount}</div>
                    <div class="item__is-read">${book.isRead}</div>
                    <button class="item__delete-btn">Delete</button>
                </div>
            `
        })
    }
}