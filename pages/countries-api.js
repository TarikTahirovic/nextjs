import {ApolloClient, ApolloProvider, InMemoryCache, useQuery} from "@apollo/client";
import gql from "graphql-tag";
import React, {useState} from "react";
import Layout from "@/components/Layout";

export const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache()
});

const GET_COUNTRIES = gql`
    {
        countries {
            languages {
                name
            }
            name
            currency
            code
            phone
            capital
            states {
                name
            }
        }
    }
`;

export default function CountryApi() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
    const [selectedCountry, setSelectedCountry] = useState(null);

    if (loading) return <Layout><p>Loading...</p></Layout>;
    if (error) return <Layout><p>Error :(</p></Layout>;

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        console.log(selectedCountry);
    };

    return (
        <Layout>
            <ApolloProvider client={client}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <div style={{width: '50%'}}>
                        <h2>Click on a country for morea details:</h2>
                    <ul style={{background: 'white', fontFamily: 'Inter'}}>
                        {data.countries.map((country) => (
                            <li key={country.name}
                                onClick={() => handleCountryClick(country)}
                                style={{
                                    color:
                                        selectedCountry && selectedCountry.name === country.name
                                            ? 'blue'
                                            : 'none',
                                    cursor: "pointer",
                                }}
                            >
                                {country.name}

                            </li>
                        ))}
                    </ul>
                    </div>
                    {selectedCountry && (
                        <div style={{background: 'white', fontFamily: 'Inter'}}>
                            <h2>{selectedCountry.name}</h2>
                            <p>Capital: {selectedCountry.capital}</p>
                            <p>Currency: {selectedCountry.currency}</p>
                            <p>Language: {selectedCountry.languages[0].name}</p>
                        </div>
                    )}
                </div>
            </ApolloProvider>
        </Layout>
    );
}
