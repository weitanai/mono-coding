interface Company {
    name: string;
    total: number;
}

function getCompany(company: Company): Company  {
    return {
        name: `${company.name} is here`,
        total: company.total + 10
    }
}

export {
    Company,
    getCompany,
}