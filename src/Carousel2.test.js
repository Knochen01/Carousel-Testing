import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Carousel from './Carousel'


it('should render on the screed',() => {
    render(<Carousel />)
})

test('if it Matches Snapshot', () => {
    const { asFragment} = render(<Carousel />)
    expect(asFragment).toMatchSnapshot()
})

it("works when you click on the right arrow",() => {
    const { queryByTestId, queryByAltText } = render(<Carousel />)

    // Expect the first image to show, but not the second.
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
    expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument()

    // move forward in the carousel

    const rightArrow = queryByTestId("right-arrow");
    fireEvent.click(rightArrow)

    // expect the second image to show but not the first
    expect(queryByAltText('Photo by Pratik Patel on Unsplash')).toBeInTheDocument()
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).not.toBeInTheDocument();
})

it("hides and shows arrows appropriately",() => {
    const { getByTestId} = render(<Carousel />)
    const leftArrow = getByTestId('left-arrow')
    const rightArrow = getByTestId('right-arrow')

    // expect the left arrow to be missing, but the right arrow to be present
    expect(leftArrow).toHaveClass('hidden')
    expect(rightArrow).not.toHaveClass('hidden')

    // Move forward, expect both arrows to exist
    fireEvent.click(rightArrow)

    expect(leftArrow).not.toHaveClass('hidden')
    expect(rightArrow).not.toHaveClass('hidden')

    // Move foward again, expect the right arrow to be missing
    fireEvent.click(rightArrow)

    expect(rightArrow).toHaveClass('hidden')
    expect(leftArrow).not.toHaveClass('hidden')


})