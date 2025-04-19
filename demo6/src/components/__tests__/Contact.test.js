import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from '../Contact'

describe('Contact component', () => {
    test('Should load contact us component', () => {
        render(<Contact />)
        const heading = screen.getByRole('heading')

        // Assertion
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent('Contact us page')
    })

    it('Should load 3 input boxes contact us component', () => {
        render(<Contact />)
        const textboxes = screen.getAllByRole('textbox')
        // Assertion
        expect(textboxes).toHaveLength(3)
    })

    it('Should load 1 submit button in contact us component', () => {
        render(<Contact />)
        const button = screen.getByRole('button')
        // Assertion
        expect(button).toBeInTheDocument()
    })
})
