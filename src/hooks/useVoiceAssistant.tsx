
import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useNavigate } from 'react-router-dom';

interface VoiceAssistantOptions {
  onCommand?: (command: string) => void;
}

export function useVoiceAssistant(options?: VoiceAssistantOptions) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const { toast } = useToast();
  const { preferences } = useAccessibility();
  const navigate = useNavigate();
  
  // Speech synthesis for voice feedback
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  }, []);
  
  // Handle voice commands
  const processCommand = useCallback((command: string) => {
    const normalizedCommand = command.toLowerCase().trim();
    
    if (options?.onCommand) {
      options.onCommand(normalizedCommand);
    }
    
    // Basic command handling
    if (normalizedCommand.includes('help') || normalizedCommand === 'help') {
      speak('Available commands include: find accessible transport, book a hotel, show my itinerary, emergency help, and go to home page.');
      toast({
        title: "Voice Assistant Help",
        description: "I can help you navigate the app. Try commands like 'find accessible transport' or 'book a hotel'.",
      });
    } 
    else if (normalizedCommand.includes('find transport') || normalizedCommand.includes('book transport')) {
      speak('Taking you to transport booking page');
      navigate('/transport');
    }
    else if (normalizedCommand.includes('find hotel') || normalizedCommand.includes('book hotel') || normalizedCommand.includes('find stay')) {
      speak('Taking you to hotel booking page');
      navigate('/stays');
    }
    else if (normalizedCommand.includes('itinerary') || normalizedCommand.includes('my plan')) {
      speak('Opening your itinerary');
      navigate('/itinerary');
    }
    else if (normalizedCommand.includes('emergency') || normalizedCommand.includes('help me')) {
      speak('Activating emergency assistance');
      navigate('/safety');
    }
    else if (normalizedCommand.includes('go home') || normalizedCommand.includes('main page')) {
      speak('Going to home page');
      navigate('/');
    }
    else {
      speak('Sorry, I didn\'t understand that command. Say help for a list of commands.');
    }
  }, [navigate, options, speak, toast]);
  
  // Setup speech recognition
  useEffect(() => {
    if (!preferences.voiceAssistant) return;
    
    let recognition: any = null;
    
    try {
      // @ts-ignore - Browser compatibility
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
          setIsListening(true);
        };
        
        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setTranscript(transcript);
          processCommand(transcript);
        };
        
        recognition.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };
        
        recognition.onend = () => {
          setIsListening(false);
        };
      }
    } catch (error) {
      console.error('Speech recognition not supported', error);
    }
    
    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, [preferences.voiceAssistant, processCommand]);
  
  // Function to start listening
  const startListening = useCallback(() => {
    if (!preferences.voiceAssistant) {
      toast({
        title: "Voice Assistant Disabled",
        description: "Please enable Voice Assistant in accessibility settings first.",
      });
      return;
    }
    
    try {
      // @ts-ignore - Browser compatibility
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
          setIsListening(true);
          toast({
            title: "Listening...",
            description: "Speak now. Say 'help' for available commands.",
            duration: 2000,
          });
        };
        
        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setTranscript(transcript);
          processCommand(transcript);
        };
        
        recognition.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };
        
        recognition.onend = () => {
          setIsListening(false);
        };
        
        recognition.start();
      } else {
        toast({
          title: "Not Supported",
          description: "Speech recognition is not supported in your browser.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Speech recognition error', error);
      toast({
        title: "Error",
        description: "Could not start voice recognition. Please try again.",
        variant: "destructive"
      });
    }
  }, [preferences.voiceAssistant, processCommand, toast]);
  
  return {
    isListening,
    transcript,
    startListening,
    speak
  };
}
