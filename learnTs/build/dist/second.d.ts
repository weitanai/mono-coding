interface Company {
    name: string;
    total: number;
}
declare function getCompany(company: Company): Company;

export { Company, getCompany };
