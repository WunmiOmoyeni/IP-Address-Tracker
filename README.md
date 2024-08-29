IP Address Tracker
This project is an IP Address Tracker built using React, Vite, and Leaflet.js. It allows users to search for any IP address or domain and displays detailed information, including location, ISP, and timezone. The location is visualized on a map.

Features
IP Address Search: Enter an IP address or domain to retrieve location data, ISP information, and timezone.
Map Visualization: Display the location on a map using Leaflet.js.
Responsive Design: The application is responsive and works on various screen sizes.
IPInfo API Integration: Uses the IPInfo API to fetch IP address data.
Demo
https://ip-address-tracker-ashy-three.vercel.app/

Screenshots
![IP-Address-Tracker](https://github.com/user-attachments/assets/1f79a36b-bce1-4c52-888a-85cc1cdab1b4)


Tech Stack
React: Frontend library used to build the user interface.
Vite: Build tool that provides a fast development environment.
Leaflet.js: JavaScript library for interactive maps.
IPInfo API: Used to fetch IP address details.
Installation
Clone the repository
Install dependencies:
npm install

Set up your IPInfo API key:

Create a .env file in the root of your project.
Add your IPInfo API token:
env
Copy code
VITE_API_TOKEN=your_ipinfo_token_here
Start the development server:

bash
Copy code
npm run dev
Build the project:

bash
Copy code
npm run build
Usage
Enter an IP address or domain in the search bar.
The app will display the IP's location, ISP, and timezone.
The location is shown on the map below the search bar.
Deployment
This project is deployed on Vercel/Netlify/Other. To deploy your own version:

Build the project:

bash
Copy code
npm run build
Deploy the dist directory to your hosting service.

Known Issues
Some IP addresses may return limited information due to API restrictions.
Ensure your API token is valid and has not exceeded its usage limits.
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
IPInfo API for providing IP address information.
Leaflet.js for the map functionality.
