async function update(id, name, email, phone, address, cpf) {
    const data = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        cpf: cpf
    }
    fetch(`http://localhost:3333/clients/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => alert('Atualizado com sucesso'))
        .catch(error => console.log(error))
}

export default update;