import axios from 'axios';

async function testAuth() {
  try {
    // Test registration
    const registerResponse = await axios.post('http://localhost:5000/api/auth/register', {
      name: 'testuser',
      email: 'test@example.com',
      password: 'test123'
    });
    console.log('Registration successful:', registerResponse.data);

    // Test login
    const loginResponse = await axios.post('http://localhost:5000/api/auth/login', {
      email: 'test@example.com',
      password: 'test123'
    });
    console.log('Login successful:', loginResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

testAuth();
