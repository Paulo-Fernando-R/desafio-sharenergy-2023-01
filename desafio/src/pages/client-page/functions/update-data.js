async function update(id, name, email, phone, address, cpf) {
    const data = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        cpf: cpf
    }

    try {
        const response = await fetch(`http://localhost:3333/clients/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = response.json();
        alert('Atualizado com sucesso')
    }
    catch (err) {
        alert('Erro ao atualizar')
    }
}

export default update;