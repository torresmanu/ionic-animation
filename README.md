
Features

	•	A reusable AnimatedSVG component that:
	•	Supports animating the fill of any SVG shape.
	•	Allows configuration of animation duration and fill percentage.
	•	Handles multiple shapes for simultaneous animations.
	•	Example usage to show how to integrate and customize the AnimatedSVG component.

Getting Started

Prerequisites

Ensure you have the following installed:
	•	Node.js
	•	Ionic CLI
	•	npm or yarn

Installation

	1.	Clone the repository:

git clone https://github.com/yourusername/your-repo-name.git


	2.	Navigate to the project folder:

cd your-repo-name


	3.	Install dependencies:

npm install



Running the Project

To start the Ionic application, run:

ionic serve

The application will open in your default browser.

Usage

The AnimatedSVG Component

The AnimatedSVG component can be used to render and animate the fill of SVGs.

## Props for `AnimatedSVG` Component

| Prop           | Type      | Default     | Description                                  |
|----------------|-----------|-------------|----------------------------------------------|
| `percentage`   | `number`  | `0`         | Percentage to fill the SVG (0-100).          |
| `fillColor`    | `string`  | `#FF5733`   | The color to use for the fill animation.     |
| `duration`     | `number`  | `2000`      | Duration of the animation in milliseconds.   |
| `shape`        | `string`  | `shape1`    | The SVG shape to animate (shape1, shape2. In this case there are 2 harcoded shapes).| 


Contribution

Feel free to fork the repository, create pull requests, or suggest improvements. Any contribution is welcome!

License

This project is licensed under the MIT License. See the LICENSE file for details.
