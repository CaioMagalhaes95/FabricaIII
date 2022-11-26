


const onHandleClick = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/sub', {
        nome: $('#name').val(),
        RA: $('#RA').val(),
        course: $('#curso').val()
    });
}

   
