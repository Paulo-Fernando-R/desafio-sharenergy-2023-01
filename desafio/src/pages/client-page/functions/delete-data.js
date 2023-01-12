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
}
export default destroy

