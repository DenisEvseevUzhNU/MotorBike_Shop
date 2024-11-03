import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import ButtonShort from '../components/ButtonShort';
import styles from '../style/ButtonShort.module.css';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('ButtonShort Component', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        useNavigate.mockImplementation(() => mockNavigate);
        jest.clearAllMocks();
    });

    it('should render the button with correct text', () => {
        render(
            <MemoryRouter>
                <ButtonShort text="Sign Up" to="/signup" />
            </MemoryRouter>
        );
        const buttonElement = screen.getByRole('button', { name: /sign up/i });
        expect(buttonElement).toBeInTheDocument();
    });

    it('should call navigate when button is clicked', () => {
        render(
            <MemoryRouter>
                <ButtonShort text="Sign Up" to="/signup" />
            </MemoryRouter>
        );

        const buttonElement = screen.getByRole('button', { name: /sign up/i });
        fireEvent.click(buttonElement);
        expect(mockNavigate).toHaveBeenCalledWith('/signup');
    });
});
