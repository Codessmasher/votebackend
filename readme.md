# Voting App Backend API

This repository contains the backend API for a voting app. It includes endpoints for user authentication, managing candidates, voting, and viewing live election results.

## Features

### Admin

- Manage candidates: Add, update, and delete candidates.

### Users

- Signup/Signin: Users and admin can signup and signin using Aadhaar card as a government ID.
- View candidates: Users can see the list of candidates.
- Vote: Users can vote for one candidate.
- Update/Delete their account

### Results

- Live updates: Anyone can see live updates of vote counts in sorted order of vote counts.

## Routes

### Users

- `/users/signup` (POST): Signup for users and admin.
- `/users/signin` (POST): Signin for users and admin to receive a JWT token.
- `/users/updateuser/:userid` (PATCH)(users & admin update)
- `/users/profile/` (GET)(login required)
- `/users/deleteuser/:userid` (DELETE)(users & admin delete)

### Admin

- `/candidates/addcandidate` (POST): Create new candidates. (Admin Authorization required)
- `/candidate/:candidateid` (PATCH): Update a candidate information.
- `/candidate/:candidateid` (DELETE): Delete a candidate.

### Candidates

- `/candidates` (GET): Get the list of candidates.
- `/candidates/:id` (GET): Get information of a candidate.
- `/vote/:candidateid` (POST): Vote for a candidate. (Voter Authorization required)

### Results

- `/results` (GET): Access live election results. (Public access)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication 
- BcryptJs for password encryption/decryption

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`
3. Configure environment variables.
4. Start the server: `npm start`

<!-- ## API Documentation

For detailed API documentation, please refer to the [API Documentation](API_DOCS.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->
