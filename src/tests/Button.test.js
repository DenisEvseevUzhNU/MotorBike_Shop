import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import '@testing-library/jest-dom/extend-expect';

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe("Компонент Button", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("рендерить кнопку з дітьми", () => {
        const { getByText } = render(<Button functions={null} isNavigation={false}>Натисни Мене</Button>);
        
        expect(getByText("Натисни Мене")).toBeInTheDocument();
    });

    test("навігує на правильний маршрут, коли isNavigation істинний", () => {
        const mockNavigate = jest.fn();
        useNavigate.mockReturnValue(mockNavigate);

        const { getByText } = render(
            <MemoryRouter>
                <Routes>
                    <Route path="/signup" element={<div>Реєстрація</div>} />
                    <Route
                        path="/"
                        element={<Button to="/signup" isNavigation={false}>Зареєструватись</Button>}
                    />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.click(getByText("Зареєструватись"));
    });

    test("викликає функцію props, коли isNavigation хибний", () => {
        const mockFunction = jest.fn();
        const { getByText } = render(<Button isNavigation={false} onClick={mockFunction}>Натисни Мене</Button>);
    
        fireEvent.click(getByText("Натисни Мене"));
    });
    
});
