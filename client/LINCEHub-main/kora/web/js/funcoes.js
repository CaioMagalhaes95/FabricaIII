
const onHandleClick = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/sub', {
        name: $('#name').val(),
        RA: $('#RA').val(),
        course: $('#course').val()
    }).then(() => {
        alert('Usuário Cadastrado com Sucesso')
    }).catch(()=>{
        alert('Campo inválido')
    })

    

    $('#name').val('');
    $('#RA').val('');
    $('#course').val('');

}

const onHandleClickS = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/sponsor',{
        Razao_social: $('#rs').val(),
        cnpj: $('#cnpj').val(),
        email: $('#email').val(),
        telefone: $('#tel').val(),
        
       
    }).then(() => {
        alert('Patrocinador Cadastrado com Sucesso')
    }).catch(()=>{
        alert('Campo inválido')
    })
}
   
