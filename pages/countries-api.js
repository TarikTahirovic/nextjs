import { ApolloClient, ApolloProvider, InMemoryCache, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { keyframes } from '@emotion/react';
import {css} from "@emotion/css";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const countryStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const listStyles = css`
  width: 50%;
`;

const listItemStyles = (selected) => css`
  color: ${selected ? 'blue' : 'none'};
  font-family: Inter,sans-serif;
  cursor: pointer;
`;

const selectedCountryStyles = css`
  font-family: Inter,sans-serif;
  animation: ${fadeIn} 1s;
`;

export const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
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

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };

    return (
        <Layout>
            <ApolloProvider client={client}>
                <h2>Click on a country for more details:</h2>
                <div className={countryStyles}>
                    <div className={listStyles}>
                        <ul css={{ background: 'white', fontFamily: 'Inter' }}>
                            {loading && <p>Loading...</p>}
                            {error && <p>Error :(</p>}
                            {data && data.countries.map((country) => (
                                <li
                                    key={country.name}
                                    onClick={() => handleCountryClick(country)}
                                    className={listItemStyles(selectedCountry && selectedCountry.name === country.name)}
                                >
                                    {country.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {selectedCountry && (
                        <div className={selectedCountryStyles}>
                            <h2>{selectedCountry?.name}</h2>
                            <p>Capital: {selectedCountry?.capital}</p>
                            <p>Currency: {selectedCountry?.currency}</p>
                            <p>Language: {selectedCountry?.languages[0]?.name}</p>
                        </div>
                    )}
                </div>
            </ApolloProvider>
        </Layout>
    );
}
