const submitted = document.getElementById('submitted')
const card = document.getElementById('card')
var rating = document.getElementById('rating').value;
var rate_value = '0';

function one(){
    rate_value = '1'
}

function two(){
    rate_value = '2'
}

function three(){
    rate_value = '3'
}

function four(){
    rate_value = '4'
}

function five(){
    rate_value = '5'
}

function submit(){
    document.getElementById('card').style.display = 'none';
    document.getElementById('submitted').style.display = 'block';

    document.getElementById('total').innerHTML = rate_value;

    if(rate_value === undefined){
        document.getElementById('thank').innerHTML = 'Error found!'
        document.getElementById('desc').innerHTML = "It looks like you didn't choose a rating number.."
        alert('Oops! Error found');
    } else {
        alert('Your rating has been submitted!')
    }
}