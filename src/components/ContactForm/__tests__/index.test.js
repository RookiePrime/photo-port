import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]

describe('ContactForm is rendering', () => {

    it('renders', () => {
        render(<ContactForm></ContactForm>)
    });

    it('matchess snapshot', () => {
        const { asFragment } = render(<ContactForm></ContactForm>);
        expect(asFragment).toMatchSnapshot();
    });
});

describe('Stuff is visible', () => {
    it('renders the h1', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('Contact me')).toHaveTextContent('Contact me');
    });
    it('renders the submit button', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('Submit')).toHaveTextContent('Submit');
    });
});