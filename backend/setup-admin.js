const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');
require('dotenv').config({ path: './config.env' });

const setupAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    
    // Check if admin user already exists
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    
    if (existingAdmin) {
      // Admin user already exists
      return;
    }
    
    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const adminUser = new Admin({
      username: 'admin',
      password: hashedPassword,
      email: 'admin@jaimodernschool.edu',
      role: 'admin',
      active: true
    });
    
    await adminUser.save();
    
    // Admin user created successfully
    // Username: admin
    // Password: admin123
    // Please change the password after first login
    
  } catch (error) {
    console.error('Setup error:', error);
  } finally {
    await mongoose.disconnect();
  }
};

setupAdmin(); 