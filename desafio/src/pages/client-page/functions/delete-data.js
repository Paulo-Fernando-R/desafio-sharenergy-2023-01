async function destroy(id) {
    if (id === '') {
        alert('Escolha um cliente para excluir.');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3333/clients/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = response.json();
        alert('Excluído com sucesso');
    }
    catch (err) {
        alert('Erro ao excluir');
    }


    /*
    .then(response => response.json())
    .then(data => alert('Cliente excluído com sucesso.'))
    .catch(error => console.log('Não foi possível excluir.'))*/
}
export default destroy

