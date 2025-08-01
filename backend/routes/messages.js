const express = require('express');
const Message = require('../models/Message');
const auth = require('../middleware/auth');

const router = express.Router();

// Public route - Submit a new message
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create new message
    const newMessage = new Message({
      name,
      email,
      phone,
      subject,
      message
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });
  } catch (error) {
    console.error('Message creation error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

// Protected route - Get all messages (admin only)
router.get('/admin', auth, async (req, res) => {
  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.json(messages);
  } catch (error) {
    console.error('Fetch messages error:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// Protected route - Update message status (admin only)
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!['unread', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const message = await Message.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    res.json(message);
  } catch (error) {
    console.error('Update message status error:', error);
    res.status(500).json({ error: 'Failed to update message status' });
  }
});

// Protected route - Delete a message (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findByIdAndDelete(id);

    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    res.json({ success: true, message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Delete message error:', error);
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

// Protected route - Get message statistics (admin only)
router.get('/admin/stats', auth, async (req, res) => {
  try {
    const total = await Message.countDocuments();
    const unread = await Message.countDocuments({ status: 'unread' });
    const read = await Message.countDocuments({ status: 'read' });
    const replied = await Message.countDocuments({ status: 'replied' });

    res.json({
      total,
      unread,
      read,
      replied
    });
  } catch (error) {
    console.error('Message stats error:', error);
    res.status(500).json({ error: 'Failed to fetch message statistics' });
  }
});

module.exports = router; 