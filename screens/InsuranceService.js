import React from 'react'


const USERS_REST_API_URL = "http://localhost:8282/insurance/";

class InsuranceService{
    getInsurance(){
        return fetch(USERS_REST_API_URL).then((res => res.json()));
    }
}

export default new InsuranceService()