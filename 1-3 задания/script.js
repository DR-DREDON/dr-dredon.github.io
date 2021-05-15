function Max()
{
d=document
var a = Number(d.form1.A.value) 
var b = Number(d.form1.B.value) 
var x1 = Math.max(a,b) 
d.form1.x1.value=x1;
}

function Check()
{
d=document
var admin, name; 
name = "Арина";
admin = name;
alert( admin ); 
}

 functionAge()
{
    d=document
    let name = prompt("Введите имя"),
            age = +prompt('Введите ваш возраст');
 
        alert(`Здравствуйте, ${name}!`);
        let message = (age < 18) ? 'Вы младше 18 лет' : 'Вы старше 18 лет';
        alert(message);

        var result = confirm('Вы уверены, что вам '+age);
        if (result == true)
        {
            alert ('Хорошо')
        }
        else 
        {
            age = +prompt('Введите ваш возраст');
            alert ('ОК')
        }
}

function Show()
{
    d=document
    var city, country;
    city = "Москва";
    country = "Россия";
    alert( country );
    alert( city );
}