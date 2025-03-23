
import { toast } from "@/hooks/use-toast";

interface AuthCredentials {
  email: string;
  password: string;
}

export const authService = {
  login: async (credentials: AuthCredentials): Promise<boolean> => {
    try {
      // Simulate API call
      console.log("Logging in with:", credentials);
      
      // Simulate successful login
      localStorage.setItem("user", JSON.stringify({ email: credentials.email }));
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      return true;
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
      return false;
    }
  },
  
  signup: async (userData: AuthCredentials): Promise<boolean> => {
    try {
      // Simulate API call
      console.log("Signing up with:", userData);
      
      // Simulate successful signup
      localStorage.setItem("user", JSON.stringify({ email: userData.email }));
      toast({
        title: "Signup successful",
        description: "Your account has been created!",
      });
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        title: "Signup failed",
        description: "Please try again later",
        variant: "destructive",
      });
      return false;
    }
  },
  
  logout: (): void => {
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  },
  
  getCurrentUser: (): any => {
    const userString = localStorage.getItem("user");
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  },
};
