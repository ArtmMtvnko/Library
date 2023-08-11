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

submitBtn.addEventListener('click', event => {
    event.preventDefault()
    bookList.addBook({
        title: title.value,
        author: author.value,
        isRead: isRead.checked,
        pageAmount: pageAmount.value,
    })
    bookList.showBooks(list)
})