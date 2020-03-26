import React from 'react';
import styled from 'styled-components';

import Counter from '../components/Counter';
import ShoppingList from '../components/ShoppingList';

const Wrapper = styled.div`
    margin: 50px 0;
    padding: 40px;
    background-color: beige;
    color: darkcyan;

    /* implement mixins */
`;

const Page = props => (
    <Wrapper>
        { props.children }
        <Counter/>
        <ShoppingList/>
    </Wrapper>
);

export default Page;