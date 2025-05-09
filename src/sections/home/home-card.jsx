import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  IconButton,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  InputAdornment,
  List,
  ListItem
} from '@mui/material';
import {
  Search,
  AttachFile,
  Lightbulb as LightbulbIcon,
  Send,
  FlashOn,
  Description,
  CardGiftcard,
  MoreHoriz,
  ChatBubble,
  Refresh as RefreshIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export default function ChatInterface() {
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([]);
  const [showEmptyState, setShowEmptyState] = useState(true);
  const messageEndRef = useRef(null);
  const inputRef = useRef(null);
  const [webSearch, setWebSearch] = useState(true);
  // Suggestion categories with MUI icons
  const suggestionCategories = [
    { icon: <Description fontSize="small" />, text: "Help me write", color: "secondary" },
    { icon: <FlashOn fontSize="small" />, text: "Get advice", color: "primary" },
    { icon: <ChatBubble fontSize="small" />, text: "Summarize text", color: "warning" },
    { icon: <CardGiftcard fontSize="small" />, text: "Surprise me", color: "info" }
  ];

  // Example suggestions for help
  const exampleSuggestions = [
    "What are the benefits of snowboarding vs skiing?",
    "Help me pick the right snowboard for a beginner",
    "What ski wax should I use for wet snow conditions?",
    "Compare your top 3 all-mountain snowboards",
    "How do I properly wax a snowboard?",
    "What safety gear do you recommend for beginners?"
  ];

  const skyBlueTheme = {
    primary: '#3498db', // Main sky blue
    primaryLight: '#5dade2',
    primaryDark: '#2980b9',
    gradient: 'linear-gradient(90deg, #3498db 0%, #2980b9 100%)',
    headerGradient: 'linear-gradient(90deg, #3498db 0%, #2980b9 100%)'
  };

  const ChatHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    background: skyBlueTheme.headerGradient,
    color: 'white',
    height: '70px',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    boxShadow: '0 4px 20px rgba(52, 152, 219, 0.2)',
    position: 'sticky',
    top: 0, // Ensure it's fixed at the top
    zIndex: 10,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '0',
      right: '0',
      height: '10px',
      background: 'linear-gradient(180deg, rgba(52, 152, 219, 0.05) 0%, rgba(52, 152, 219, 0) 100%)',
      zIndex: 9
    }
  }));

  const GlowAccent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '-50%',
    right: '-10%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(52, 152, 219, 0.3) 0%, rgba(52, 152, 219, 0) 70%)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    zIndex: 1,
    opacity: 0.6,
  }));

  const BotAvatar = styled(Box)(() => ({
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    backgroundColor: skyBlueTheme.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    boxShadow: '0 4px 12px rgba(52, 152, 219, 0.2)',
  }));

  const StyledSwitch = styled(Switch)(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 1,
      margin: 1,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: 'rgba(52, 152, 219, 0.9)',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      opacity: 1,
      transition: 'background-color 500ms',
    },
  }));

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        text: message,
        isUser: true,
        time: new Date().toLocaleString()
      };
      setConversations(prev => [...prev, newMessage]);
      setMessage('');
      setShowEmptyState(false);

      // Simulate AI response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: `I'd be happy to help with "${message.trim()}". What specific details would you like to know?`,
          isUser: false,
          time: new Date().toLocaleString()
        };
        setConversations(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (text) => {
    setMessage(text);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversations]);

  return (
    <Container maxWidth="lg" sx={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
      {/* Main content area */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', height: 'calc(100% - 72px)', overflowX: 'hidden' }}>
        <ChatHeader>
          <GlowAccent />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, zIndex: 10 }}>
            <BotAvatar>η</BotAvatar>
            <Typography variant="h6" sx={{
              fontWeight: 600,
              fontSize: '20px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              letterSpacing: '0.5px'
            }}>
              ηoryΧ: Talk to your data!
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, zIndex: 10 }}>
            <LightbulbIcon sx={{ color: 'rgba(255, 255, 255, 0.9)' }} />
            <Typography variant="body2" sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500,
            }}>
              Web search?
            </Typography>
            <StyledSwitch
              checked={webSearch}
              onChange={(e) => setWebSearch(e.target.checked)}
              size="small"
            />
            <IconButton
              size="small"
              sx={{
                width: '36px',
                height: '36px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(5px)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                },
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <RefreshIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                width: '36px',
                height: '36px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(5px)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                },
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>
        </ChatHeader>
        {showEmptyState ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%',mx:10 }}>
            <Typography variant="h4" gutterBottom>
              What can I help with?
            </Typography>

            {/* Suggestion categories */}
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
              {suggestionCategories.map((category, index) => (
                <Grid item key={index}>
                  <Chip
                    icon={category.icon}
                    label={category.text}
                    color={category.color}
                    variant="outlined"
                    sx={{ px: 1, borderRadius: '16px' }}
                  />
                </Grid>
              ))}
              <Grid item>
                <Chip
                  icon={<MoreHoriz fontSize="small" />}
                  label="More"
                  variant="outlined"
                  sx={{ px: 1, borderRadius: '16px' }}
                />
              </Grid>
            </Grid>

            {/* Example prompts */}
            <Grid container spacing={2}>
              {exampleSuggestions.map((suggestion, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    onClick={() => handleSuggestionClick(suggestion)}
                    sx={{
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      '&:hover': { bgcolor: 'grey.100' },
                      height: '100%'
                    }}
                  >
                    <CardContent>
                      <Typography variant="body1">
                        {suggestion}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <List>
            {conversations.map((msg) => (
              <ListItem
                key={msg.id}
                sx={{
                  justifyContent: msg.isUser ? 'flex-end' : 'flex-start',
                  mb: 2
                }}
              >
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    maxWidth: '80%',
                    bgcolor: msg.isUser ? 'primary.main' : 'grey.100',
                    color: msg.isUser ? 'white' : 'text.primary',
                    borderRadius: 2
                  }}
                >
                  <Typography variant="body1">
                    {msg.text}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.7 }}>
                    {msg.time}
                  </Typography>
                </Paper>
              </ListItem>
            ))}
            <div ref={messageEndRef} />
          </List>
        )}
      </Box>

      {/* Input area */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderTop: '1px solid',
          borderColor: 'grey.200'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{color:'#3498db'}}>
            <AttachFile fontSize="small" />
          </IconButton>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            value={message}
            inputRef={inputRef}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything"
            variant="outlined"
            size="small"
            sx={{ mx: 1 }}
          />
          <IconButton
            sx={{color:'#3498db'}}
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <Send fontSize="small" />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
}
