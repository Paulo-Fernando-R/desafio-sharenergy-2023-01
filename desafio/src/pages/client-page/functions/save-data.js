async function save(name, email, phone, address, cpf) {
    const data = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        cpf: cpf
    }

    try {
        const response = await fetch('http://localhost:3333/clients', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json();
        alert('Cadastrado com sucesso');
    }
    catch (err) {
        alert('Erro interno');
    }
}

export default save