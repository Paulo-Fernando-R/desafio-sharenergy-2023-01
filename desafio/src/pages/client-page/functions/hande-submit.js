function verifyFields(name, email, phone, address, cpf){
    if(name.length < 3)
        return false;
    
    if(email.length < 6)
    return false;

    if(phone.length < 8)
        return false;
    
    if(address.length < 5)
    return false;
    
    if(cpf.length < 11)
        return false;

    return true;
}

function verifyCpf(cpf){
    var sum;
    var remainder;
    var i;
    sum = 0;
    if (cpf === "00000000000") return false;
  
    for (i=1; i<=9; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
  
    if ((remainder === 10) || (remainder === 11))  remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10)) ) return false;
  
    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
  
    if ((remainder === 10) || (remainder === 11))  remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
}

function handleSubmit(name, email, phone, address, cpf){
    if(!verifyFields(name, email, phone, address, cpf))
        return 'empty-fields';

    if(!verifyCpf(cpf))
        return 'invalid-cpf';

    return true;
}

export default handleSubmit