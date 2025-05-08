import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  Switch,
  FormControlLabel,
  styled,
  alpha,
  useTheme,
  InputBase
} from '@mui/material';
import {
  Send as SendIcon,
  Lightbulb as LightbulbIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';

// Styled components
const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
  width: '100%',
  overflow: 'hidden',
  borderRadius: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e0e0e0',
}));

const ChatHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 24px',
  background: 'linear-gradient(90deg, #4cc9f0 0%, #1a365d 100%)',
  color: 'white',
  height: '50px'
}));

const ChatMessages = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: 'calc(100vh - 110px)', // Adjust for header and input area
  overflowY: 'auto',
  backgroundColor: '#f5f7f9',
  padding: '16px 24px',
  '&::-webkit-scrollbar': {
    width: '6px'
  },
  '&::-webkit-scrollbar-track': {
    background: '#f5f7f9',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#bdbdbd',
    borderRadius: '3px',
    '&:hover': {
      background: '#9e9e9e'
    }
  }
}));

const MessageBubble = styled(Paper)(({ isUser }) => ({
  padding: '12px 16px',
  marginBottom: '8px',
  maxWidth: '80%',
  backgroundColor: isUser ? 'white' : '#e0f2f1',
  color: '#333',
  borderRadius: isUser ? '12px 12px 0 12px' : '12px 12px 12px 0',
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  border: '1px solid',
  borderColor: isUser ? '#e0e0e0' : '#b2dfdb'
}));

const InputArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '12px 24px',
  backgroundColor: '#f5f7f9',
  borderTop: '1px solid #e0e0e0',
  height: '60px'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  backgroundColor: 'white',
  borderRadius: '24px',
  padding: '8px 16px',
  paddingRight: '12px',
  fontSize: '14px',
  border: '1px solid #e0e0e0',
  '&:hover': {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },
  '&.Mui-focused': {
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
  }
}));

const StyledSendButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#4cc9f0',
  color: 'white',
  width: '40px',
  height: '40px',
  marginLeft: '8px',
  '&:hover': {
    backgroundColor: '#00c4ff'
  },
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.2s ease-in-out',
}));

const TimeStamp = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  color: '#667b8c',
  marginBottom: '4px'
}));

// Main component
const ChatApp = () => {
  const theme = useTheme();
  const [message, setMessage] = useState('');
  const [webSearch, setWebSearch] = useState(true);

  // Sample messages
  const sampleMessages = [
    {
      id: 1,
      text: "Hello!",
      isUser: true,
      time: "07/05/2025 17:58:42",
      sender: "You"
    },
    {
      id: 2,
      text: "Hi there! Do you have any questions about our snowboards or ski wax, or perhaps need help with anything else related to sustern-development.myshopify.com?",
      isUser: false,
      time: "07/05/2025 17:58:42",
      sender: "ηoryΧ"
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <MainContainer>
      <ChatHeader>
        <Typography variant="body1" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '16px' }}>
          ηoryΧ: Talk to your data!
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LightbulbIcon sx={{ color: '#4cc9f0', mr: 2 }} />
          <FormControlLabel
            control={
              <Switch
                checked={webSearch}
                onChange={(e) => setWebSearch(e.target.checked)}
                size="small"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#ffffff'
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#4cc9f0'
                  }
                }}
              />
            }
            label={
              <Typography variant="body2" sx={{ color: 'white' }}>
                Web search?
              </Typography>
            }
          />
          <IconButton
            size="small"
            sx={{
              ml: 1,
              width: '32px',
              height: '32px',
              backgroundColor: '#4cc9f0',
              color: 'white',
              '&:hover': {
                backgroundColor: '#3db8dd'
              }
            }}
          >
            <RefreshIcon fontSize="small" />
          </IconButton>
        </Box>
      </ChatHeader>

      <ChatMessages>
        {sampleMessages.map((msg) => (
          <Box key={msg.id} sx={{ mb: 3 }}>
            <Box sx={{
              display: 'flex',
              justifyContent: msg.isUser ? 'flex-end' : 'flex-start',
              paddingX: 2
            }}>
              <Box sx={{ maxWidth: '85%' }}>
                <TimeStamp align={msg.isUser ? "right" : "left"}>
                  {msg.time} ({msg.sender})
                </TimeStamp>

                <Box
                  sx={{
                    backgroundColor: msg.isUser ? 'white' : '#cbe8f1',
                    padding: '12px 16px',
                    borderRadius: msg.isUser ? '12px 12px 0 12px' : '12px 12px 12px 0',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                    border: '1px solid',
                    borderColor: msg.isUser ? '#e0e0e0' : '#94def6'
                  }}
                >
                  <Typography variant="body2">
                    {msg.text}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </ChatMessages>

      <InputArea component="form" onSubmit={handleSendMessage}>
        <Box sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f5f7f9',
          borderRadius: '30px',
          padding: '0 10px'
        }}>
          <StyledInputBase
            placeholder="Ask me anything!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ ml: 1 }}
            fullWidth
          />
          <StyledSendButton type="submit" size="small">
            <SendIcon />
          </StyledSendButton>
        </Box>
      </InputArea>
    </MainContainer>
  );
};

export default ChatApp;
