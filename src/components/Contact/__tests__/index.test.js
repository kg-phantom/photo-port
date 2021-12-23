import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('contact form content', () => {
    it('has correct text content', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('h1')).toHaveTextContent('Contact me');
        expect(getByTestId('submit-button')).toHaveTextContent('Submit');
    });
});