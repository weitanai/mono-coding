'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getCompany(company) {
  return {
    name: `${company.name} is here`,
    total: company.total + 10
  };
}

exports.getCompany = getCompany;
