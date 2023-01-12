async function save(name, email, phone, address, cpf){
    const data = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        cpf: cpf
    }

    fetch('http://localhost:3333/clients', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        return true;
    })
    .catch(error => {
        return false;
    })
}

export default save