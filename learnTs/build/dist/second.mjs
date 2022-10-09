function getCompany(company) {
  return {
    name: `${company.name} is here`,
    total: company.total + 10
  };
}

export { getCompany };
