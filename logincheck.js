let admin = prompt('who there?') 

if (admin === 'Admin') {

    let password = prompt('and the password?')

    if (password === 'TheMaster') {
        alert('Welcome!!')
    } else if (password === '' || password === null) {
        alert('Cancelled!')
    } else {
        alert('Wrong Password')
    }
} else if (admin === null || admin === '') {
    alert('cancelled')
} else {
    alert('i don\'t know you')
}