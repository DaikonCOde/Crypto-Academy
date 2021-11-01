import React from 'react';

import { useQuery, gql } from "@apollo/client";

const GET_ALL_SERVICES = gql`
    query GetAllServices{
        getAllService {
        name
        }
    }
`;

function Services() {

    const { loading, error, data } = useQuery(GET_ALL_SERVICES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);
    return (
        <div className="services">

        </div>
    );
};

export default Services;