import './index.html'
import './styles/index.scss'
import { BookList } from './scripts/BookList.js'

const list = document.querySelector('#booksList')

const bookList = new BookList()

const title = document.querySelector('#bookTitle')
const author = document.querySelector('#bookAuthor')
const pageAmount = document.querySelector('#bookPageAmount')
const isRead = document.querySelector('#toogleCheckbox')
const submitBtn = document.querySelector('#bookSubmitBtn')

let numberOfBook = 1

submitBtn.addEventListener('click', event => {
    event.preventDefault()
    bookList.addBook({
        number: numberOfBook++,
        title: title.value,
        author: author.value,
        isRead: isRead.checked,
        pageAmount: pageAmount.value,
    })
    bookList.showBooks(list)

    const deleteBookBtns = document.querySelectorAll('.item__delete-btn')
    deleteBookBtns.forEach(button => button.addEventListener('click', e => {
        let numberToIdentify = e.target.parentNode.children[0].innerText
        console.log(numberToIdentify);
        bookList.removeBook(numberToIdentify)
        bookList.showBooks(list)
    }))
})