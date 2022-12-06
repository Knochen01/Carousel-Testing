import React from 'react';
import { render } from '@testing-library/react'
import Card from './Card'

// SmokeTest
it("should render to the screen", function() {
    render(<Card />)
})

// Snapshot
it("should match the Snapshot", function() {
    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
})