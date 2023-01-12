async function destroy (id) {
    if(id === '')
    {
        alert('Escolha um cliente para excluir.');
        return;
    }
        
    fetch(`http://localhost:3333/clients/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then(data => alert('Cliente excluído com sucesso.'))
    .catch(error => console.log('Não foi possível excluir.'))
}
export default destroy

