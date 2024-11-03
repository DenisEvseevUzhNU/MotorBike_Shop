import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from '../components/InputField';
import styles from '../style/InputField.module.css';


describe('InputField Component', () => {
    const mockSetState = jest.fn();

    beforeEach(() => {
        render(
            <InputField 
                label="Test Label"
                type="text"
                placeholder="Test Placeholder"
                value=""
                setState={mockSetState}
            />
        );
    });

    it('should render the label correctly', () => {
        const labelElement = screen.getByText(/test label/i);
        expect(labelElement).toBeInTheDocument();
    });

    it('should render the input field with correct placeholder', () => {
        const inputElement = screen.getByPlaceholderText(/test placeholder/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should call setState on input change', () => {
        const inputElement = screen.getByPlaceholderText(/test placeholder/i);
        fireEvent.change(inputElement, { target: { value: 'new value' } });
        expect(mockSetState).toHaveBeenCalledWith('new value');
    });

    it('should have correct class names', () => {
        const inputElement = screen.getByPlaceholderText(/test placeholder/i);
        expect(inputElement).toHaveClass(styles.Input);
        const labelElement = screen.getByText(/test label/i);
        expect(labelElement).toHaveClass(styles.text3);
    });
});
